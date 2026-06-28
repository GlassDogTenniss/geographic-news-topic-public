const DATA_URL = './latest.geojson';
const UNRESOLVED_URL = './latest-unresolved.json';
const KUNLUN_PLACEHOLDER = {
  label: '場所不明(崑崙山)',
  lat: 35.0,
  lon: 80.0,
};

const map = L.map('map', { zoomControl: true }).setView([35.6812, 139.7671], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  opacity: 0.23,
  attribution: '&copy; OpenTopoMap contributors',
}).addTo(map);

const statusEl = document.getElementById('status');
const statsEl = document.getElementById('stats');
const topicListEl = document.getElementById('topicList');
const unresolvedListEl = document.getElementById('unresolvedList');
const updatedAtBadgeEl = document.getElementById('updatedAtBadge');
const panelToggleEl = document.getElementById('panelToggle');
const panelCloseButtonEl = document.getElementById('panelCloseButton');

const markers = [];

panelToggleEl.addEventListener('click', () => setPanelCollapsed(false));
panelCloseButtonEl.addEventListener('click', () => setPanelCollapsed(true));

load();

async function load() {
  try {
    const [geojson, unresolved] = await Promise.all([
      fetchJson(DATA_URL),
      fetchJson(UNRESOLVED_URL, { fallback: [] }),
    ]);

    const features = Array.isArray(geojson.features) ? geojson.features : [];
    renderFeatures(features);
    renderUnresolved(normalizeUnresolved(unresolved));
    renderStats(features, normalizeUnresolved(unresolved));
    renderUpdatedAt(geojson);
    fitMarkers();

    statusEl.textContent = `${features.length} 件の場所解決済みニュースを表示中`;
  } catch (error) {
    console.error(error);
    statusEl.textContent = `読み込みに失敗しました: ${error.message}`;
    updatedAtBadgeEl.textContent = '読み込み失敗';
  }
}

async function fetchJson(url, options = {}) {
  const response = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) {
    if ('fallback' in options) return options.fallback;
    throw new Error(`${url}: HTTP ${response.status}`);
  }
  return response.json();
}

function renderFeatures(features) {
  topicListEl.replaceChildren();

  const sorted = [...features].sort((a, b) => {
    const ap = a.properties || {};
    const bp = b.properties || {};
    return String(ap.sort_place_label || ap.place_label || '').localeCompare(String(bp.sort_place_label || bp.place_label || ''), 'ja')
      || String(ap.title || '').localeCompare(String(bp.title || ''), 'ja');
  });

  sorted.forEach((feature, index) => {
    const props = feature.properties || {};
    const coordinates = feature.geometry && Array.isArray(feature.geometry.coordinates)
      ? feature.geometry.coordinates
      : null;
    if (!coordinates || coordinates.length < 2) return;

    const [lon, lat] = coordinates;
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

    const colorVars = colorVarsFor(props.place_label || props.sort_place_label || props.representative_place || 'unknown');
    const marker = L.circleMarker([lat, lon], {
      radius: 7,
      weight: 2,
      fillOpacity: 0.82,
    }).addTo(map);
    marker.bindPopup(popupHtml(props));
    markers.push(marker);

    const item = document.createElement('article');
    item.className = 'topic-item';
    item.style.setProperty('--place-border', colorVars.border);
    item.style.setProperty('--place-bg', colorVars.bg);
    item.innerHTML = topicHtml(props, index + 1);
    item.addEventListener('click', () => {
      document.querySelectorAll('.topic-item.active').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      map.setView([lat, lon], Math.max(map.getZoom(), 7), { animate: true });
      marker.openPopup();
      item.scrollIntoView({ block: 'nearest' });
    });
    topicListEl.appendChild(item);
  });
}

function renderUnresolved(unresolved) {
  unresolvedListEl.replaceChildren();
  if (!unresolved.length) return;

  const heading = document.createElement('div');
  heading.className = 'unresolved-heading';
  heading.textContent = `未解決ニュース ${unresolved.length} 件`;
  unresolvedListEl.appendChild(heading);

  unresolved.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'unresolved-item';
    article.innerHTML = `
      <div class="topic-title">${escapeHtml(item.title || item.name || '無題')}</div>
      <div class="topic-meta">${escapeHtml(KUNLUN_PLACEHOLDER.label)} / 実際の解決地点ではありません</div>
      ${item.url ? `<div class="topic-meta"><a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">記事を開く</a></div>` : ''}
    `;
    unresolvedListEl.appendChild(article);
  });

  const marker = L.circleMarker([KUNLUN_PLACEHOLDER.lat, KUNLUN_PLACEHOLDER.lon], {
    radius: 6,
    weight: 2,
    dashArray: '4 4',
    fillOpacity: 0.3,
  }).addTo(map);
  marker.bindPopup(`
    <strong>${escapeHtml(KUNLUN_PLACEHOLDER.label)}</strong><br>
    未解決ニュースの仮表示です。<br>
    Kunlun / 中国として場所解決したものではありません。
  `);
  markers.push(marker);
}

function renderStats(features, unresolved) {
  const labels = new Set(features.map((feature) => feature.properties?.place_label).filter(Boolean));
  statsEl.innerHTML = `
    <div class="stat"><span class="stat-value">${features.length}</span><span class="stat-label">解決済み</span></div>
    <div class="stat"><span class="stat-value">${labels.size}</span><span class="stat-label">地域ラベル</span></div>
    <div class="stat"><span class="stat-value">${unresolved.length}</span><span class="stat-label">未解決</span></div>
  `;
}

function renderUpdatedAt(geojson) {
  const value = geojson.updated_at || geojson.generated_at || geojson.properties?.updated_at || null;
  updatedAtBadgeEl.textContent = value ? `更新: ${value}` : '更新日時なし';
}

function fitMarkers() {
  if (!markers.length) return;
  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.18));
}

function setPanelCollapsed(collapsed) {
  document.body.classList.toggle('panel-collapsed', collapsed);
  panelToggleEl.setAttribute('aria-expanded', String(!collapsed));
  panelToggleEl.textContent = collapsed ? '一覧を開く' : '一覧を閉じる';
}

function normalizeUnresolved(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.unresolved)) return payload.unresolved;
  if (Array.isArray(payload.articles)) return payload.articles;
  return [];
}

function popupHtml(props) {
  return `
    <strong>${escapeHtml(props.title || props.name || '無題')}</strong><br>
    <span>${escapeHtml(props.representative_place || '')}</span><br>
    <span>${escapeHtml(props.place_label || '')}</span>
    ${props.url ? `<br><a href="${escapeAttr(props.url)}" target="_blank" rel="noopener noreferrer">記事を開く</a>` : ''}
  `;
}

function topicHtml(props, index) {
  return `
    <div class="topic-title">${index}. ${escapeHtml(props.title || props.name || '無題')}</div>
    <div class="topic-meta">${escapeHtml(props.representative_place || '')}</div>
    ${props.place_label ? `<div class="place-label">${escapeHtml(props.place_label)}</div>` : ''}
    ${props.place_reason ? `<div class="place-reason">${escapeHtml(props.place_reason)}</div>` : ''}
    ${props.url ? `<div class="topic-meta"><a href="${escapeAttr(props.url)}" target="_blank" rel="noopener noreferrer">記事を開く</a></div>` : ''}
  `;
}

function colorVarsFor(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  const hue = hash % 360;
  return {
    border: `hsl(${hue} 55% 45%)`,
    bg: `hsl(${hue} 70% 96%)`,
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('`', '&#96;');
}
