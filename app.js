// ── Firebase config ──────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyD69L677x8OWg7lkRkv_-QZUSvxHQDPL8U",
  authDomain:        "tripwise-4a4ba.firebaseapp.com",
  databaseURL:       "https://tripwise-4a4ba-default-rtdb.firebaseio.com",
  projectId:         "tripwise-4a4ba",
  storageBucket:     "tripwise-4a4ba.firebasestorage.app",
  messagingSenderId: "1082201515676",
  appId:             "1:1082201515676:web:533f783bfaef342ec8af59",
  measurementId:     "G-49GQWXZB05"
};

// ── Supply presets ───────────────────────────────────────────────
const BASE_SUPPLIES = {
  lead_climbing: [
    'Climbing harness', 'Helmet', 'Belay device + locking carabiner', 'Chalk bag + chalk',
    'Climbing shoes', 'Dynamic rope (60m+)', 'Quickdraws (12–16)', 'Personal anchor system',
    'Nut tool', 'Trad rack (if trad climbing)', 'First aid kit', 'Water (2L+ per person)',
    'Snacks / nutrition', 'Sun protection (hat, SPF)', 'Approach shoes', 'Headlamp',
    'Emergency bivy', 'Rope bag / tarp', 'Guidebook or topo', 'Crash pad (for approach boulders)'
  ],
  top_rope_climbing: [
    'Climbing harness', 'Helmet', 'Belay device + locking carabiner', 'Chalk bag + chalk',
    'Climbing shoes', 'Static or dynamic rope', 'Anchor webbing / cordelette',
    'Locking carabiners (3+)', 'First aid kit', 'Water (2L+ per person)',
    'Snacks / nutrition', 'Sun protection (hat, SPF)', 'Approach shoes', 'Headlamp',
    'Rope bag', 'Guidebook or topo'
  ],
  bouldering: [
    'Crash pads (2+)', 'Climbing shoes', 'Chalk bag + chalk', 'Brush for holds',
    'Knee pads', 'First aid kit', 'Water (2L+ per person)', 'Snacks / nutrition',
    'Sun protection', 'Headlamp', 'Guidebook or topo', 'Backpack to carry crash pads'
  ],
  hiking: [
    'Trail map / GPS device', 'Navigation compass', 'Water (3L+ per person)',
    'Water filter / purification tabs', 'Snacks / nutrition', 'First aid kit',
    'Hiking boots / trail shoes', 'Trekking poles', 'Rain jacket / poncho',
    'Sun protection (hat, SPF)', 'Headlamp + extra batteries', 'Emergency whistle',
    'Space / emergency blanket', 'Knife / multi-tool', 'Layers (fleece/puffy)',
    'Gaiters (if muddy)', 'Satellite communicator'
  ],
  backpacking: [
    'Backpack (50–70L)', 'Trail map / GPS device', 'Navigation compass',
    'Water filter / purification tabs', 'Water bottles / hydration bladder',
    'Backpacking stove + fuel', 'Cookpot + utensils', 'Food (3 days+)',
    'Bear canister / hang bag', 'Trekking poles', 'Rain jacket / poncho',
    'Sun protection', 'Headlamp + extra batteries', 'First aid kit',
    'Knife / multi-tool', 'Layers (fleece/puffy)', 'Gaiters',
    'Satellite communicator', 'Leave No Trace essentials', 'Trowel', 'Waste bags'
  ],
  scuba_diving: [
    'BCD (buoyancy control device)', 'Regulator + alternate air source', 'Dive computer',
    'Wetsuit / drysuit', 'Mask + snorkel', 'Fins', 'Weight system + weights',
    'Dive tank (or rental confirmation)', 'Underwater torch', 'Surface marker buoy (SMB)',
    'Dive flag', 'Logbook + certification card', 'Dive knife / shears',
    'Rash guard / thermal layer', 'Defog solution', 'First aid / O2 kit',
    'Waterproof bag', 'Sun protection', 'Water + hydration'
  ],
  kayaking: [
    'Kayak + paddle', 'PFD (life jacket)', 'Helmet (whitewater)', 'Spray skirt',
    'Bilge pump', 'Paddle float', 'Dry bags (waterproof storage)', 'Wetsuit / paddling jacket',
    'Water shoes / booties', 'Headlamp', 'Navigation / maps', 'First aid kit',
    'Sun protection', 'Water + hydration', 'Snacks', 'Throw bag', 'Whistle'
  ],
  mountain_biking: [
    'Mountain bike (tuned & serviced)', 'Helmet', 'Gloves', 'Knee & elbow pads',
    'Eye protection / goggles', 'Hydration pack / water bottles', 'Nutrition / snacks',
    'Bike multi-tool', 'Spare tubes + patch kit', 'Tire levers',
    'Hand pump / CO2 inflator', 'Chain lube', 'First aid kit',
    'Sun protection', 'GPS / trail map', 'Lights (front & rear)', 'Phone mount'
  ],
  skiing: [
    'Skis / snowboard + bindings (tuned)', 'Boots', 'Poles (skiing)', 'Helmet',
    'Goggles', 'Ski jacket + pants', 'Base layers (thermal top & bottom)',
    'Gloves / mittens', 'Neck gaiter / balaclava', 'Ski socks (wool)', 'Lift pass',
    'Avalanche beacon + probe + shovel (backcountry)', 'Sunscreen (high SPF)',
    'Lip balm (SPF)', 'First aid kit', 'Backpack (day)', 'Water + snacks',
    'Hand warmers', 'Boot bag'
  ],
  canyoneering: [
    'Harness', 'Helmet', 'Rappel device (ATC or similar)', 'Locking carabiners (3+)',
    'Static rope (length for longest rappel)', 'Webbing / cordelette',
    'Wetsuit (if wet canyon)', 'Canyon shoes / booties', 'Dry bags',
    'Water (3L+ per person)', 'Water filter', 'Food / snacks', 'First aid kit',
    'Knife / shears', 'Headlamp', 'Sun protection', 'Satellite communicator',
    'Canyon topo / guidebook'
  ]
};

const CAMPING_SUPPLIES = [
  'Tent + stakes + guylines', 'Sleeping bag (season-appropriate)', 'Sleeping pad',
  'Camp stove + fuel canister', 'Cookpot + utensils', 'Camp mug', 'Food (all meals)',
  'Bear canister / hang kit', 'Lantern or extra headlamps', 'Camp chair / sitting pad',
  'Camp soap + scrubber', 'Trash bags', 'Trowel + waste bags', 'Camp towel',
  'Clothes for extra days', 'Warm layers for evenings'
];

const TYPE_LABELS = {
  lead_climbing: 'Lead Climbing',
  top_rope_climbing: 'Top Rope Climbing',
  bouldering: 'Bouldering',
  hiking: 'Hiking',
  backpacking: 'Backpacking',
  scuba_diving: 'Scuba Diving',
  kayaking: 'Kayaking',
  mountain_biking: 'Mountain Biking',
  skiing: 'Skiing / Snowboarding',
  canyoneering: 'Canyoneering'
};

const TYPE_EMOJI = {
  lead_climbing: '🧗',
  top_rope_climbing: '🧗',
  bouldering: '🪨',
  hiking: '🥾',
  backpacking: '🎒',
  scuba_diving: '🤿',
  kayaking: '🛶',
  mountain_biking: '🚵',
  skiing: '⛷️',
  canyoneering: '🏜️'
};

// ── App state ────────────────────────────────────────────────────
let db = null;
let currentTrip = null;
let currentUser = null;
let campingOn = false;
let tripUnsubscribe = null;
let homeUnsubscribe = null;

// ── Firebase init ────────────────────────────────────────────────
function initFirebase() {
  const isPlaceholder = firebaseConfig.apiKey === 'YOUR_API_KEY';
  if (isPlaceholder) {
    document.getElementById('config-notice').classList.add('show');
    document.getElementById('loading-overlay').classList.add('hidden');
    renderHomeFallback();
    return;
  }
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    document.getElementById('loading-overlay').classList.add('hidden');
    subscribeHome();
  } catch (e) {
    console.error('Firebase init error:', e);
    document.getElementById('config-notice').classList.add('show');
    document.getElementById('loading-overlay').classList.add('hidden');
    renderHomeFallback();
  }
}

// ── Screen routing ───────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'home') subscribeHome();
  if (name === 'trip') subscribeTrip();
  if (name !== 'trip' && tripUnsubscribe) {
    tripUnsubscribe();
    tripUnsubscribe = null;
  }
}

// ── Real-time home listener ──────────────────────────────────────
function subscribeHome() {
  if (!db) return;
  if (homeUnsubscribe) homeUnsubscribe();

  homeUnsubscribe = db.collection('trips')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snap => {
      const container = document.getElementById('home-trips-list');
      if (snap.empty) {
        container.innerHTML = '<div class="empty-state">No trips yet — create the first one! 🏕️</div>';
        return;
      }
      container.innerHTML = snap.docs.map(doc => {
        const t = doc.data();
        const covered = (t.items || []).filter(i => i.claimedBy).length;
        const total = (t.items || []).length;
        const pct = total ? Math.round(covered / total * 100) : 0;
        const name = doc.id;
        return `<span class="trip-pill" onclick="quickViewTrip('${name.replace(/'/g, "\\'")}')">
          <span class="pill-dot"></span>
          ${TYPE_EMOJI[t.type] || '🗺️'} ${name} · ${pct}% packed
        </span>`;
      }).join('');
    }, err => console.error('Home listener error:', err));
}

function renderHomeFallback() {
  document.getElementById('home-trips-list').innerHTML =
    '<div class="empty-state">Configure Firebase to see shared trips.</div>';
}

// ── Real-time trip listener ──────────────────────────────────────
function subscribeTrip() {
  if (!db || !currentTrip) return;
  if (tripUnsubscribe) tripUnsubscribe();

  tripUnsubscribe = db.collection('trips').doc(currentTrip)
    .onSnapshot(snap => {
      if (!snap.exists) { showScreen('home'); return; }
      renderTrip(snap.data());
    }, err => console.error('Trip listener error:', err));
}

// ── Toggle camping ───────────────────────────────────────────────
// FIX: prevent the label's default checkbox toggle from double-firing the state change
function toggleCamping(event) {
  if (event) event.preventDefault();
  campingOn = !campingOn;
  document.getElementById('camping-toggle').classList.toggle('on', campingOn);
  document.getElementById('camping-label').textContent =
    campingOn ? 'Yes — Camping Overnight' : 'No — Day Trip';
}

// ── Create trip ──────────────────────────────────────────────────
async function createTrip() {
  const tripName = document.getElementById('create-trip-name').value.trim();
  const yourName = document.getElementById('create-your-name').value.trim();
  const tripType = document.getElementById('create-trip-type').value;
  let ok = true;

  const toggleErr = (id, show, msg) => {
    const el = document.getElementById(id);
    el.classList.toggle('show', show);
    if (msg) el.textContent = msg;
  };

  if (!tripName) { toggleErr('err-trip-name', true, 'Please enter a trip name.'); ok = false; }
  else toggleErr('err-trip-name', false);

  if (!yourName) { toggleErr('err-your-name', true, 'Please enter your name.'); ok = false; }
  else toggleErr('err-your-name', false);

  if (!tripType) { toggleErr('err-trip-type', true, 'Please select a trip type.'); ok = false; }
  else toggleErr('err-trip-type', false);

  if (!ok) return;
  if (!db) { toast('⚠️ Firebase not configured'); return; }

  // FIX: disable button while async work runs so double-clicks can't fire duplicate writes
  const btn = document.querySelector('#screen-create .btn-primary');
  btn.disabled = true;
  btn.textContent = 'Creating…';

  try {
    const existing = await db.collection('trips').doc(tripName).get();
    if (existing.exists) {
      toggleErr('err-trip-name', true, 'A trip with this name already exists.');
      return;
    }

    const supplies = [...(BASE_SUPPLIES[tripType] || [])];
    if (campingOn) supplies.push(...CAMPING_SUPPLIES);

    const items = supplies.map((name, i) => ({
      id: 'item_' + Date.now() + '_' + i,
      name,
      claimedBy: null
    }));

    const tripData = {
      type: tripType,
      camping: campingOn,
      creator: yourName,
      members: [yourName],
      items,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    await db.collection('trips').doc(tripName).set(tripData);

    currentTrip = tripName;
    currentUser = yourName;
    campingOn = false;
    document.getElementById('camping-toggle').classList.remove('on');
    document.getElementById('camping-label').textContent = 'No — Day Trip';
    document.getElementById('create-trip-name').value = '';
    document.getElementById('create-your-name').value = '';
    document.getElementById('create-trip-type').value = '';

    toast('🎉 Trip created!');
    showScreen('trip');
  } catch (e) {
    console.error('createTrip error:', e);
    toast('❌ Error: ' + e.message);
  } finally {
    // FIX: always re-enable the button whether success or failure
    btn.disabled = false;
    btn.textContent = 'Generate Trip & Gear List';
  }
}

// ── Join trip ────────────────────────────────────────────────────
async function joinTrip() {
  const tripName = document.getElementById('join-trip-name').value.trim();
  const yourName = document.getElementById('join-your-name').value.trim();
  let ok = true;

  const toggleErr = (id, show) => document.getElementById(id).classList.toggle('show', show);

  if (!tripName) { toggleErr('err-join-trip', true); ok = false; }
  else toggleErr('err-join-trip', false);

  if (!yourName) { toggleErr('err-join-name', true); ok = false; }
  else toggleErr('err-join-name', false);

  if (!ok) return;
  if (!db) { toast('⚠️ Firebase not configured'); return; }

  const snap = await db.collection('trips').doc(tripName).get();
  if (!snap.exists) {
    document.getElementById('err-join-trip').classList.add('show');
    return;
  }

  const trip = snap.data();
  if (!trip.members.includes(yourName)) {
    await db.collection('trips').doc(tripName).update({
      members: firebase.firestore.FieldValue.arrayUnion(yourName)
    });
  }

  currentTrip = tripName;
  currentUser = yourName;
  document.getElementById('join-trip-name').value = '';
  document.getElementById('join-your-name').value = '';
  document.getElementById('err-join-trip').classList.remove('show');

  toast(`👋 Joined as ${yourName}!`);
  showScreen('trip');
}

// ── Quick view trip from home ────────────────────────────────────
function quickViewTrip(name) {
  const user = prompt("Welcome back! What's your name?");
  if (!user || !user.trim()) return;
  currentUser = user.trim();
  currentTrip = name;
  if (db) {
    db.collection('trips').doc(name).update({
      members: firebase.firestore.FieldValue.arrayUnion(currentUser)
    });
  }
  showScreen('trip');
}

// ── Render trip view ─────────────────────────────────────────────
function renderTrip(trip) {
  if (!trip) return;
  const emoji = TYPE_EMOJI[trip.type] || '🗺️';

  document.getElementById('trip-header-block').innerHTML = `
    <div class="trip-header" data-type-emoji="${emoji}">
      <div class="trip-type-badge">${emoji} ${TYPE_LABELS[trip.type] || trip.type}${trip.camping ? ' · 🏕️ Camping' : ''}</div>
      <div class="trip-name-big">${currentTrip}</div>
      <div class="trip-meta">
        <span>👤 You're ${currentUser}</span>
        <span><span class="sync-dot"></span>Live sync on</span>
      </div>
      <div class="members-bar">
        <span style="font-size:12px;color:rgba(232,223,200,0.6);margin-right:4px">Crew:</span>
        ${(trip.members || []).map(m =>
          `<span class="member-chip${m === trip.creator ? ' creator' : ''}">${m}${m === trip.creator ? ' ★' : ''}</span>`
        ).join('')}
      </div>
    </div>`;

  const items   = trip.items || [];
  const covered = items.filter(i => i.claimedBy).length;
  const needed  = items.length - covered;
  const pct     = items.length ? Math.round(covered / items.length * 100) : 0;

  document.getElementById('trip-status-strip').innerHTML = `
    <div class="status-strip">
      <div class="status-stat"><strong>${items.length}</strong> total items</div>
      <div class="status-stat"><strong>${covered}</strong> covered</div>
      <div class="status-stat"><strong>${needed}</strong> still needed</div>
      <div class="status-stat"><strong>${(trip.members || []).length}</strong> crew member${(trip.members || []).length !== 1 ? 's' : ''}</div>
    </div>`;

  document.getElementById('trip-progress-wrap').innerHTML = `
    <div class="progress-wrap">
      <div class="progress-label"><span>Pack progress</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;

  const needItems = items.filter(i => !i.claimedBy);
  const covItems  = items.filter(i => i.claimedBy);

  document.getElementById('needed-count').textContent = needItems.length;
  document.getElementById('covered-count').textContent = covItems.length;

  document.getElementById('needed-list').innerHTML = needItems.length
    ? needItems.map(item => `
      <div class="supply-item">
        <div class="supply-check" onclick="claimItem('${item.id}')" title="I'm bringing this!">+</div>
        <div class="supply-info"><div class="supply-name">${item.name}</div></div>
        <div class="supply-actions">
          <button class="icon-btn del" onclick="removeItem('${item.id}')" title="Remove">✕</button>
        </div>
      </div>`).join('')
    : '<div style="padding:20px;text-align:center;font-size:14px;color:var(--text-muted)">All gear accounted for! 🎉</div>';

  document.getElementById('covered-list').innerHTML = covItems.length
    ? covItems.map(item => `
      <div class="supply-item">
        <div class="supply-check checked"
          onclick="${item.claimedBy === currentUser ? `unclaimItem('${item.id}')` : ''}"
          title="${item.claimedBy === currentUser ? 'Unclaim' : ''}">✓</div>
        <div class="supply-info">
          <div class="supply-name" style="color:var(--text-muted);text-decoration:line-through">${item.name}</div>
          <div class="supply-who">by ${item.claimedBy}</div>
        </div>
        ${item.claimedBy === currentUser
          ? `<div class="supply-actions"><button class="icon-btn del" onclick="unclaimItem('${item.id}')" title="Unclaim">↩</button></div>`
          : ''}
      </div>`).join('')
    : '<div style="padding:20px;text-align:center;font-size:14px;color:var(--text-muted)">Nothing claimed yet — grab some gear!</div>';
}

// ── Firestore item helpers ───────────────────────────────────────
async function updateItems(mutate) {
  if (!db || !currentTrip) return;
  const snap = await db.collection('trips').doc(currentTrip).get();
  const items = [...(snap.data().items || [])];
  mutate(items);
  await db.collection('trips').doc(currentTrip).update({ items });
}

async function claimItem(itemId) {
  await updateItems(items => {
    const item = items.find(i => i.id === itemId);
    if (item) item.claimedBy = currentUser;
  });
}

async function unclaimItem(itemId) {
  await updateItems(items => {
    const item = items.find(i => i.id === itemId);
    if (item && item.claimedBy === currentUser) item.claimedBy = null;
  });
}

async function removeItem(itemId) {
  await updateItems(items => {
    const idx = items.findIndex(i => i.id === itemId);
    if (idx !== -1) items.splice(idx, 1);
  });
}

async function addItem() {
  const input = document.getElementById('new-item-input');
  const val = input.value.trim();
  if (!val) return;
  await updateItems(items => {
    items.push({ id: 'item_' + Date.now(), name: val, claimedBy: null });
  });
  input.value = '';
  toast('Item added!');
}

// ── Navigation helpers ───────────────────────────────────────────
function leaveTrip() {
  if (tripUnsubscribe) { tripUnsubscribe(); tripUnsubscribe = null; }
  currentTrip = null;
  showScreen('home');
}

function copyTripName() {
  navigator.clipboard.writeText(currentTrip).then(() => toast('📋 Trip name copied!'));
}

// ── Toast ────────────────────────────────────────────────────────
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ── Boot ─────────────────────────────────────────────────────────
initFirebase();
