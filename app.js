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
    { name: 'Climbing harness',                 perPerson: true  },
    { name: 'Helmet',                           perPerson: true  },
    { name: 'Belay device + locking carabiner', perPerson: true  },
    { name: 'Chalk bag + chalk',                perPerson: true  },
    { name: 'Climbing shoes',                   perPerson: true  },
    { name: 'Dynamic rope (60m+)',              perPerson: false },
    { name: 'Quickdraws (12–16)',               perPerson: false },
    { name: 'Personal anchor system',           perPerson: true  },
    { name: 'Nut tool',                         perPerson: false },
    { name: 'Trad rack (if trad climbing)',     perPerson: false },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Water (2L+)',                      perPerson: true  },
    { name: 'Snacks / nutrition',               perPerson: true  },
    { name: 'Sun protection (hat, SPF)',        perPerson: true  },
    { name: 'Approach shoes',                   perPerson: true  },
    { name: 'Headlamp',                         perPerson: true  },
    { name: 'Emergency bivy',                   perPerson: false },
    { name: 'Rope bag / tarp',                  perPerson: false },
    { name: 'Guidebook or topo',                perPerson: false },
    { name: 'Crash pad (for approach)',         perPerson: false },
  ],
  top_rope_climbing: [
    { name: 'Climbing harness',                 perPerson: true  },
    { name: 'Helmet',                           perPerson: true  },
    { name: 'Belay device + locking carabiner', perPerson: true  },
    { name: 'Chalk bag + chalk',                perPerson: true  },
    { name: 'Climbing shoes',                   perPerson: true  },
    { name: 'Static or dynamic rope',           perPerson: false },
    { name: 'Anchor webbing / cordelette',      perPerson: false },
    { name: 'Locking carabiners (3+)',          perPerson: false },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Water (2L+)',                      perPerson: true  },
    { name: 'Snacks / nutrition',               perPerson: true  },
    { name: 'Sun protection (hat, SPF)',        perPerson: true  },
    { name: 'Approach shoes',                   perPerson: true  },
    { name: 'Headlamp',                         perPerson: true  },
    { name: 'Rope bag',                         perPerson: false },
    { name: 'Guidebook or topo',                perPerson: false },
  ],
  bouldering: [
    { name: 'Crash pads (2+)',                  perPerson: false },
    { name: 'Climbing shoes',                   perPerson: true  },
    { name: 'Chalk bag + chalk',                perPerson: true  },
    { name: 'Brush for holds',                  perPerson: false },
    { name: 'Knee pads',                        perPerson: true  },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Water (2L+)',                      perPerson: true  },
    { name: 'Snacks / nutrition',               perPerson: true  },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'Headlamp',                         perPerson: true  },
    { name: 'Guidebook or topo',                perPerson: false },
    { name: 'Backpack to carry crash pads',     perPerson: false },
  ],
  hiking: [
    { name: 'Trail map / GPS device',           perPerson: false },
    { name: 'Navigation compass',               perPerson: false },
    { name: 'Water (3L+)',                      perPerson: true  },
    { name: 'Water filter / purification tabs', perPerson: false },
    { name: 'Snacks / nutrition',               perPerson: true  },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Hiking boots / trail shoes',       perPerson: true  },
    { name: 'Trekking poles',                   perPerson: true  },
    { name: 'Rain jacket / poncho',             perPerson: true  },
    { name: 'Sun protection (hat, SPF)',        perPerson: true  },
    { name: 'Headlamp + extra batteries',       perPerson: true  },
    { name: 'Emergency whistle',                perPerson: true  },
    { name: 'Space / emergency blanket',        perPerson: true  },
    { name: 'Knife / multi-tool',               perPerson: false },
    { name: 'Layers (fleece/puffy)',            perPerson: true  },
    { name: 'Gaiters (if muddy)',               perPerson: true  },
    { name: 'Satellite communicator',           perPerson: false },
  ],
  backpacking: [
    { name: 'Backpack (50–70L)',                perPerson: true  },
    { name: 'Trail map / GPS device',           perPerson: false },
    { name: 'Navigation compass',               perPerson: false },
    { name: 'Water filter / purification tabs', perPerson: false },
    { name: 'Water bottles / hydration bladder',perPerson: true  },
    { name: 'Backpacking stove + fuel',         perPerson: false },
    { name: 'Cookpot + utensils',               perPerson: false },
    { name: 'Food (3 days+)',                   perPerson: true  },
    { name: 'Bear canister / hang bag',         perPerson: false },
    { name: 'Trekking poles',                   perPerson: true  },
    { name: 'Rain jacket / poncho',             perPerson: true  },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'Headlamp + extra batteries',       perPerson: true  },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Knife / multi-tool',               perPerson: false },
    { name: 'Layers (fleece/puffy)',            perPerson: true  },
    { name: 'Gaiters',                          perPerson: true  },
    { name: 'Satellite communicator',           perPerson: false },
    { name: 'Leave No Trace essentials',        perPerson: false },
    { name: 'Trowel',                           perPerson: false },
    { name: 'Waste bags',                       perPerson: true  },
  ],
  scuba_diving: [
    { name: 'BCD (buoyancy control device)',    perPerson: true  },
    { name: 'Regulator + alternate air source', perPerson: true  },
    { name: 'Dive computer',                    perPerson: true  },
    { name: 'Wetsuit / drysuit',                perPerson: true  },
    { name: 'Mask + snorkel',                   perPerson: true  },
    { name: 'Fins',                             perPerson: true  },
    { name: 'Weight system + weights',          perPerson: true  },
    { name: 'Dive tank (or rental)',            perPerson: true  },
    { name: 'Underwater torch',                 perPerson: true  },
    { name: 'Surface marker buoy (SMB)',        perPerson: true  },
    { name: 'Dive flag',                        perPerson: false },
    { name: 'Logbook + certification card',     perPerson: true  },
    { name: 'Dive knife / shears',              perPerson: true  },
    { name: 'Rash guard / thermal layer',       perPerson: true  },
    { name: 'Defog solution',                   perPerson: true  },
    { name: 'First aid / O2 kit',               perPerson: false },
    { name: 'Waterproof bag',                   perPerson: true  },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'Water + hydration',                perPerson: true  },
  ],
  kayaking: [
    { name: 'Kayak + paddle',                   perPerson: true  },
    { name: 'PFD (life jacket)',                perPerson: true  },
    { name: 'Helmet (whitewater)',              perPerson: true  },
    { name: 'Spray skirt',                      perPerson: true  },
    { name: 'Bilge pump',                       perPerson: false },
    { name: 'Paddle float',                     perPerson: true  },
    { name: 'Dry bags (waterproof)',            perPerson: true  },
    { name: 'Wetsuit / paddling jacket',        perPerson: true  },
    { name: 'Water shoes / booties',            perPerson: true  },
    { name: 'Headlamp',                         perPerson: true  },
    { name: 'Navigation / maps',               perPerson: false },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'Water + hydration',                perPerson: true  },
    { name: 'Snacks',                           perPerson: true  },
    { name: 'Throw bag',                        perPerson: false },
    { name: 'Whistle',                          perPerson: true  },
  ],
  mountain_biking: [
    { name: 'Mountain bike (tuned)',            perPerson: true  },
    { name: 'Helmet',                           perPerson: true  },
    { name: 'Gloves',                           perPerson: true  },
    { name: 'Knee & elbow pads',               perPerson: true  },
    { name: 'Eye protection / goggles',         perPerson: true  },
    { name: 'Hydration pack / bottles',         perPerson: true  },
    { name: 'Nutrition / snacks',               perPerson: true  },
    { name: 'Bike multi-tool',                  perPerson: false },
    { name: 'Spare tubes + patch kit',          perPerson: true  },
    { name: 'Tire levers',                      perPerson: false },
    { name: 'Hand pump / CO2',                  perPerson: true  },
    { name: 'Chain lube',                       perPerson: false },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'GPS / trail map',                  perPerson: false },
    { name: 'Lights (front & rear)',            perPerson: true  },
    { name: 'Phone mount',                      perPerson: true  },
  ],
  skiing: [
    { name: 'Skis / snowboard + bindings',     perPerson: true  },
    { name: 'Boots',                            perPerson: true  },
    { name: 'Poles (skiing)',                   perPerson: true  },
    { name: 'Helmet',                           perPerson: true  },
    { name: 'Goggles',                          perPerson: true  },
    { name: 'Ski jacket + pants',              perPerson: true  },
    { name: 'Base layers (thermal)',            perPerson: true  },
    { name: 'Gloves / mittens',                perPerson: true  },
    { name: 'Neck gaiter / balaclava',         perPerson: true  },
    { name: 'Ski socks (wool)',                perPerson: true  },
    { name: 'Lift pass',                        perPerson: true  },
    { name: 'Avalanche beacon + probe + shovel',perPerson: true  },
    { name: 'Sunscreen (high SPF)',            perPerson: true  },
    { name: 'Lip balm (SPF)',                  perPerson: true  },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Backpack (day)',                   perPerson: true  },
    { name: 'Water + snacks',                  perPerson: true  },
    { name: 'Hand warmers',                     perPerson: true  },
    { name: 'Boot bag',                         perPerson: true  },
  ],
  canyoneering: [
    { name: 'Harness',                          perPerson: true  },
    { name: 'Helmet',                           perPerson: true  },
    { name: 'Rappel device (ATC)',              perPerson: true  },
    { name: 'Locking carabiners (3+)',          perPerson: true  },
    { name: 'Static rope',                      perPerson: false },
    { name: 'Webbing / cordelette',             perPerson: false },
    { name: 'Wetsuit (if wet canyon)',          perPerson: true  },
    { name: 'Canyon shoes / booties',           perPerson: true  },
    { name: 'Dry bags',                         perPerson: true  },
    { name: 'Water (3L+)',                      perPerson: true  },
    { name: 'Water filter',                     perPerson: false },
    { name: 'Food / snacks',                    perPerson: true  },
    { name: 'First aid kit',                    perPerson: false },
    { name: 'Knife / shears',                   perPerson: false },
    { name: 'Headlamp',                         perPerson: true  },
    { name: 'Sun protection',                   perPerson: true  },
    { name: 'Satellite communicator',           perPerson: false },
    { name: 'Canyon topo / guidebook',          perPerson: false },
  ],
};

const CAMPING_SUPPLIES = [
  { name: 'Tent + stakes + guylines',          perPerson: false },
  { name: 'Sleeping bag (season-appropriate)', perPerson: true  },
  { name: 'Sleeping pad',                      perPerson: true  },
  { name: 'Camp stove + fuel canister',        perPerson: false },
  { name: 'Cookpot + utensils',               perPerson: false },
  { name: 'Camp mug',                          perPerson: true  },
  { name: 'Food (all meals)',                  perPerson: true  },
  { name: 'Bear canister / hang kit',          perPerson: false },
  { name: 'Lantern or extra headlamps',        perPerson: false },
  { name: 'Camp chair / sitting pad',          perPerson: true  },
  { name: 'Camp soap + scrubber',              perPerson: false },
  { name: 'Trash bags',                        perPerson: false },
  { name: 'Trowel + waste bags',              perPerson: false },
  { name: 'Camp towel',                        perPerson: true  },
  { name: 'Clothes for extra days',            perPerson: true  },
  { name: 'Warm layers for evenings',          perPerson: true  },
];

const TYPE_LABELS = {
  lead_climbing:    'Lead Climbing',
  top_rope_climbing:'Top Rope Climbing',
  bouldering:       'Bouldering',
  hiking:           'Hiking',
  backpacking:      'Backpacking',
  scuba_diving:     'Scuba Diving',
  kayaking:         'Kayaking',
  mountain_biking:  'Mountain Biking',
  skiing:           'Skiing / Snowboarding',
  canyoneering:     'Canyoneering',
};

const TYPE_EMOJI = {
  lead_climbing:    '🧗',
  top_rope_climbing:'🧗',
  bouldering:       '🪨',
  hiking:           '🥾',
  backpacking:      '🎒',
  scuba_diving:     '🤿',
  kayaking:         '🛶',
  mountain_biking:  '🚵',
  skiing:           '⛷️',
  canyoneering:     '🏜️',
};

// ── Trip ID generator ────────────────────────────────────────────
// Generates a plain 4-character alphanumeric code like "B7KQ"
// Excludes 0/O and 1/I to avoid confusion when sharing
function generateTripId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = '';
  for (let i = 0; i < 4; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

// ── App state ────────────────────────────────────────────────────
let db              = null;
let currentTrip     = null;   // Firestore doc ID (= tripId e.g. "B7KQ")
let currentUser     = null;
let campingOn       = false;
let groupSize       = 1;
let tripUnsubscribe = null;
let homeUnsubscribe = null;

// Modal state
let modalItemId     = null;
let modalMaxQty     = 1;
let modalCurrentQty = 1;

// ── Item helpers ─────────────────────────────────────────────────
function makeItem(preset, memberCount, index) {
  const name      = typeof preset === 'string' ? preset : preset.name;
  const perPerson = typeof preset === 'object' && preset.perPerson;
  const qty       = perPerson ? memberCount : 1;
  return {
    id:        'item_' + Date.now() + '_' + index,
    name,
    perPerson: !!perPerson,
    qty,
    claims:    [],
  };
}

function remainingQty(item) {
  const claimed = (item.claims || []).reduce((s, c) => s + (c.qty || 1), 0);
  return Math.max(0, (item.qty || 1) - claimed);
}

function isCovered(item) {
  return remainingQty(item) === 0;
}

function rescaleItems(items, newMemberCount) {
  return items.map(item => {
    if (!item.perPerson) return item;
    const newQty = newMemberCount;
    const claims = (item.claims || [])
      .map(c => ({ ...c, qty: Math.max(0, Math.min(c.qty, newQty)) }))
      .filter(c => c.qty > 0);
    return { ...item, qty: newQty, claims };
  });
}

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
  if (name !== 'trip' && tripUnsubscribe) { tripUnsubscribe(); tripUnsubscribe = null; }
}

// ── Group size stepper ───────────────────────────────────────────
function changeGroupSize(delta) {
  groupSize = Math.max(1, groupSize + delta);
  document.getElementById('group-size-val').textContent = groupSize;
}

// ── Camping toggle ───────────────────────────────────────────────
function toggleCamping(event) {
  if (event) event.preventDefault();
  campingOn = !campingOn;
  document.getElementById('camping-toggle').classList.toggle('on', campingOn);
  document.getElementById('camping-label').textContent =
    campingOn ? 'Yes — Camping Overnight' : 'No — Day Trip';
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
        const t       = doc.data();
        const items   = t.items || [];
        const covered = items.filter(i => isCovered(i)).length;
        const total   = items.length;
        const pct     = total ? Math.round(covered / total * 100) : 0;
        const tripId  = doc.id; // doc ID is the tripId
        return `<span class="trip-pill" onclick="quickViewTrip('${tripId}')">
          <span class="pill-dot"></span>
          ${TYPE_EMOJI[t.type] || '🗺️'} ${t.name || tripId}
          <span class="pill-id">${tripId}</span>
          · ${pct}% packed
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

  const btn = document.querySelector('#screen-create .btn-primary');
  btn.disabled = true;
  btn.textContent = 'Creating…';

  try {
    // Generate a unique Trip ID, retry if collision (extremely rare)
    let tripId;
    let exists = true;
    while (exists) {
      tripId = generateTripId();
      const check = await db.collection('trips').doc(tripId).get();
      exists = check.exists;
    }

    const presets = [...(BASE_SUPPLIES[tripType] || [])];
    if (campingOn) presets.push(...CAMPING_SUPPLIES);
    const items = presets.map((preset, i) => makeItem(preset, groupSize, i));

    const tripData = {
      tripId,                   // stored as a field too for easy querying
      name:     tripName,       // human-readable name, stored in doc
      type:     tripType,
      camping:  campingOn,
      creator:  yourName,
      members:  [yourName],
      groupSize,
      items,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    // Doc ID = tripId
    await db.collection('trips').doc(tripId).set(tripData);

    currentTrip = tripId;
    currentUser = yourName;
    campingOn   = false;
    groupSize   = 1;
    document.getElementById('camping-toggle').classList.remove('on');
    document.getElementById('camping-label').textContent = 'No — Day Trip';
    document.getElementById('group-size-val').textContent = '1';
    document.getElementById('create-trip-name').value = '';
    document.getElementById('create-your-name').value = '';
    document.getElementById('create-trip-type').value = '';

    toast('🎉 Trip created!');
    showScreen('trip');
  } catch (e) {
    console.error('createTrip error:', e);
    toast('❌ Error: ' + e.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Generate Trip & Gear List';
  }
}

// ── Join trip (by Trip ID) ───────────────────────────────────────
async function joinTrip() {
  const rawId    = document.getElementById('join-trip-id').value.trim().toUpperCase();
  const yourName = document.getElementById('join-your-name').value.trim();
  let ok = true;

  const toggleErr = (id, show) => document.getElementById(id).classList.toggle('show', show);
  if (!rawId)   { toggleErr('err-join-trip', true); ok = false; }
  else toggleErr('err-join-trip', false);
  if (!yourName){ toggleErr('err-join-name', true); ok = false; }
  else toggleErr('err-join-name', false);
  if (!ok) return;
  if (!db) { toast('⚠️ Firebase not configured'); return; }

  const snap = await db.collection('trips').doc(rawId).get();
  if (!snap.exists) {
    document.getElementById('err-join-trip').classList.add('show');
    return;
  }

  const trip         = snap.data();
  const alreadyMember = (trip.members || []).includes(yourName);

  if (!alreadyMember) {
    const newMembers = [...(trip.members || []), yourName];
    const rescaled   = rescaleItems(trip.items || [], newMembers.length);
    await db.collection('trips').doc(rawId).update({
      members:   firebase.firestore.FieldValue.arrayUnion(yourName),
      groupSize: newMembers.length,
      items:     rescaled,
    });
  }

  currentTrip = rawId;
  currentUser = yourName;
  document.getElementById('join-trip-id').value  = '';
  document.getElementById('join-your-name').value = '';
  document.getElementById('err-join-trip').classList.remove('show');

  toast(`👋 Joined as ${yourName}!`);
  showScreen('trip');
}

// ── Quick view from home ─────────────────────────────────────────
function quickViewTrip(tripId) {
  const user = prompt("Welcome back! What's your name?");
  if (!user || !user.trim()) return;
  currentUser = user.trim();
  currentTrip = tripId;
  if (db) {
    db.collection('trips').doc(tripId).get().then(snap => {
      if (!snap.exists) return;
      const trip = snap.data();
      if (!(trip.members || []).includes(currentUser)) {
        const newMembers = [...(trip.members || []), currentUser];
        const rescaled   = rescaleItems(trip.items || [], newMembers.length);
        db.collection('trips').doc(tripId).update({
          members:   firebase.firestore.FieldValue.arrayUnion(currentUser),
          groupSize: newMembers.length,
          items:     rescaled,
        });
      }
    });
  }
  showScreen('trip');
}

// ── Render trip ──────────────────────────────────────────────────
function renderTrip(trip) {
  if (!trip) return;
  const emoji   = TYPE_EMOJI[trip.type] || '🗺️';
  const items   = trip.items || [];
  const members = trip.members || [];
  const tripId  = trip.tripId || currentTrip;

  // Update footer Trip ID display
  const footerEl = document.getElementById('footer-trip-id');
  if (footerEl) footerEl.textContent = tripId;

  // Header
  document.getElementById('trip-header-block').innerHTML = `
    <div class="trip-header" data-type-emoji="${emoji}">
      <div class="trip-type-badge">${emoji} ${TYPE_LABELS[trip.type] || trip.type}${trip.camping ? ' · 🏕️ Camping' : ''}</div>
      <div class="trip-name-big">${trip.name || currentTrip}</div>
      <div class="trip-meta">
        <span>👤 You're ${currentUser}</span>
        <span>👥 ${members.length} member${members.length !== 1 ? 's' : ''}</span>
        <span><span class="sync-dot"></span>Live sync on</span>
      </div>
      <div class="members-bar">
        <span style="font-size:12px;color:rgba(232,223,200,0.6);margin-right:4px">Crew:</span>
        ${members.map(m => {
          const isCreator = m === trip.creator;
          const isMe = m === currentUser;
          const canDelete = currentUser === trip.creator && !isMe && !isCreator;
          return `<span class="member-chip${isCreator ? ' creator' : ''}">
            ${m}${isCreator ? ' ★' : ''}
            ${isMe ? `<button class="chip-btn rename-btn" onclick="openRenameModal()" title="Edit your name">✎</button>` : ''}
            ${canDelete ? `<button class="chip-btn delete-btn" onclick="deleteMember('${m}')" title="Remove from trip">✕</button>` : ''}
          </span>`;
        }).join('')}
      </div>
    </div>`;

  // Stats
  const coveredItems = items.filter(i => isCovered(i));
  const neededItems  = items.filter(i => !isCovered(i));
  const pct          = items.length ? Math.round(coveredItems.length / items.length * 100) : 0;

  document.getElementById('trip-status-strip').innerHTML = `
    <div class="status-strip">
      <div class="status-stat"><strong>${items.length}</strong> total items</div>
      <div class="status-stat"><strong>${coveredItems.length}</strong> covered</div>
      <div class="status-stat"><strong>${neededItems.length}</strong> still needed</div>
      <div class="status-stat"><strong>${members.length}</strong> crew member${members.length !== 1 ? 's' : ''}</div>
    </div>`;

  document.getElementById('trip-progress-wrap').innerHTML = `
    <div class="progress-wrap">
      <div class="progress-label"><span>Pack progress</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;

  // Leave / delete self button (non-creators only)
  const isCreator = currentUser === trip.creator;
  document.getElementById('leave-trip-btn-wrap').innerHTML = isCreator
    ? `<button class="btn btn-ghost btn-sm" onclick="leaveTrip()">← All Trips</button>`
    : `<div style="display:flex;gap:10px;align-items:center;">
        <button class="btn btn-ghost btn-sm" onclick="leaveTrip()">← All Trips</button>
        <button class="btn btn-leave btn-sm" onclick="leaveAndDeleteSelf()">🚪 Leave Trip</button>
       </div>`;

  document.getElementById('needed-count').textContent  = neededItems.length;
  document.getElementById('covered-count').textContent = coveredItems.length;

  // Needed list
  document.getElementById('needed-list').innerHTML = neededItems.length
    ? neededItems.map(item => {
        const rem      = remainingQty(item);
        const total    = item.qty || 1;
        const partial  = (item.claims || []).length > 0;
        const qtyLabel = total > 1
          ? `<span class="item-qty-badge">${rem}/${total} needed</span>` : '';
        const ppLabel  = item.perPerson
          ? `<span class="per-person-badge">per person</span>` : '';
        const partialInfo = partial
          ? `<div class="partial-claims">${(item.claims || []).map(c =>
              `<span class="partial-chip">✓ ${c.user} ×${c.qty}${c.comment ? ` — "${c.comment}"` : ''}</span>`
            ).join('')}</div>` : '';
        return `
          <div class="supply-item">
            <div class="supply-check ${partial ? 'partial' : ''}" onclick="openClaimModal('${item.id}')" title="I'm bringing this!">
              ${partial ? '…' : '+'}
            </div>
            <div class="supply-info">
              <div class="supply-name">${item.name} ${qtyLabel}${ppLabel}</div>
              ${partialInfo}
            </div>
            <div class="supply-actions">
              <button class="icon-btn" onclick="openEditModal('${item.id}')" title="Edit">✎</button>
              <button class="icon-btn del" onclick="removeItem('${item.id}')" title="Remove">✕</button>
            </div>
          </div>`;
      }).join('')
    : '<div style="padding:20px;text-align:center;font-size:14px;color:var(--text-muted)">All gear accounted for! 🎉</div>';

  // Covered list
  document.getElementById('covered-list').innerHTML = coveredItems.length
    ? coveredItems.map(item => {
        const total      = item.qty || 1;
        const claims     = item.claims || [];
        const myClaimIdx = claims.findIndex(c => c.user === currentUser);
        const qtyLabel   = total > 1
          ? `<span class="item-qty-badge covered">${total}/${total} ✓</span>` : '';
        return `
          <div class="supply-item">
            <div class="supply-check checked" title="Fully covered">✓</div>
            <div class="supply-info">
              <div class="supply-name" style="color:var(--text-muted);text-decoration:line-through">${item.name} ${qtyLabel}</div>
              <div class="covered-claims">
                ${claims.map(c => `
                  <div class="claim-row">
                    <span class="supply-who">✓ ${c.user} ×${c.qty}</span>
                    ${c.comment ? `<span class="claim-comment">"${c.comment}"</span>` : ''}
                  </div>`).join('')}
              </div>
            </div>
            ${myClaimIdx !== -1
              ? `<div class="supply-actions">
                   <button class="icon-btn del" onclick="unclaimItem('${item.id}')" title="Unclaim my portion">↩</button>
                 </div>` : ''}
          </div>`;
      }).join('')
    : '<div style="padding:20px;text-align:center;font-size:14px;color:var(--text-muted)">Nothing claimed yet — grab some gear!</div>';
}

// ── Modal ────────────────────────────────────────────────────────
function openClaimModal(itemId) {
  db.collection('trips').doc(currentTrip).get().then(snap => {
    const trip = snap.data();
    const item = (trip.items || []).find(i => i.id === itemId);
    if (!item) return;

    const rem = remainingQty(item);
    if (rem === 0) { toast('This item is already fully covered!'); return; }

    modalItemId     = itemId;
    modalMaxQty     = rem;
    modalCurrentQty = 1;

    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-qty-val').textContent   = 1;
    document.getElementById('modal-qty-max').textContent   = `of ${rem} needed`;
    document.getElementById('modal-comment').value         = '';

    const qtySection = document.getElementById('modal-qty-section');
    qtySection.style.display = (item.qty || 1) > 1 ? 'block' : 'none';

    document.getElementById('claim-modal').classList.add('open');
    setTimeout(() => document.getElementById('modal-comment').focus(), 100);
  });
}

function changeQty(delta) {
  modalCurrentQty = Math.max(1, Math.min(modalMaxQty, modalCurrentQty + delta));
  document.getElementById('modal-qty-val').textContent = modalCurrentQty;
}

function closeModal(event) {
  if (event && event.target.closest('.modal-box')) return;
  document.getElementById('claim-modal').classList.remove('open');
  modalItemId = null;
}

async function confirmClaim() {
  if (!modalItemId) return;
  const comment = document.getElementById('modal-comment').value.trim();
  const qty     = modalCurrentQty;

  await updateItems(items => {
    const item = items.find(i => i.id === modalItemId);
    if (!item) return;
    item.claims = (item.claims || []).filter(c => c.user !== currentUser);
    item.claims.push({ user: currentUser, qty, comment });
  });

  document.getElementById('claim-modal').classList.remove('open');
  modalItemId = null;
  toast(`✓ Claimed ×${qty}!`);
}

// ── Firestore helpers ────────────────────────────────────────────
async function updateItems(mutate) {
  if (!db || !currentTrip) return;
  const snap  = await db.collection('trips').doc(currentTrip).get();
  const items = [...(snap.data().items || [])];
  mutate(items);
  await db.collection('trips').doc(currentTrip).update({ items });
}

async function unclaimItem(itemId) {
  await updateItems(items => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    item.claims = (item.claims || []).filter(c => c.user !== currentUser);
  });
}

async function removeItem(itemId) {
  await updateItems(items => {
    const idx = items.findIndex(i => i.id === itemId);
    if (idx !== -1) items.splice(idx, 1);
  });
}

async function addItem() {
  const input  = document.getElementById('new-item-input');
  const qtySel = document.getElementById('new-item-qty');
  const val    = input.value.trim();
  if (!val) return;

  const qtyRaw      = parseInt(qtySel.value, 10);
  const isPerPerson = qtyRaw === 0;
  let finalQty      = isPerPerson ? 1 : qtyRaw;

  if (isPerPerson && db && currentTrip) {
    const snap = await db.collection('trips').doc(currentTrip).get();
    finalQty   = (snap.data().members || []).length;
  }

  await updateItems(items => {
    items.push({
      id:        'item_' + Date.now(),
      name:      val,
      perPerson: isPerPerson,
      qty:       finalQty,
      claims:    [],
    });
  });

  input.value    = '';
  qtySel.value   = '1';
  toast('Item added!');
}

// ── Navigation ───────────────────────────────────────────────────
function leaveTrip() {
  if (tripUnsubscribe) { tripUnsubscribe(); tripUnsubscribe = null; }
  currentTrip = null;
  showScreen('home');
}

function copyTripId() {
  const tripId = currentTrip;
  if (!tripId) return;
  navigator.clipboard.writeText(tripId).then(() => toast('📋 Trip ID copied!'));
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
// ── Edit modal ───────────────────────────────────────────────────
let editItemId      = null;
let editQtyVal      = 1;
let editPerPerson   = false;

function openEditModal(itemId) {
  db.collection('trips').doc(currentTrip).get().then(snap => {
    const item = (snap.data().items || []).find(i => i.id === itemId);
    if (!item) return;

    editItemId    = itemId;
    editQtyVal    = item.qty || 1;
    editPerPerson = !!item.perPerson;

    document.getElementById('edit-item-name').value    = item.name;
    document.getElementById('edit-qty-val').textContent = editQtyVal;
    updateEditPerPersonUI();

    document.getElementById('edit-modal').classList.add('open');
    setTimeout(() => document.getElementById('edit-item-name').focus(), 100);
  });
}

function changeEditQty(delta) {
  editQtyVal = Math.max(1, editQtyVal + delta);
  document.getElementById('edit-qty-val').textContent = editQtyVal;
}

function toggleEditPerPerson() {
  editPerPerson = !editPerPerson;
  // If switching to per-person, set qty to current member count
  if (editPerPerson && db && currentTrip) {
    db.collection('trips').doc(currentTrip).get().then(snap => {
      const memberCount = (snap.data().members || []).length;
      editQtyVal = memberCount;
      document.getElementById('edit-qty-val').textContent = editQtyVal;
    });
  }
  updateEditPerPersonUI();
}

function updateEditPerPersonUI() {
  const checkbox = document.getElementById('edit-pp-checkbox');
  checkbox.classList.toggle('checked', editPerPerson);
}

function closeEditModal(event) {
  if (event && event.target.closest('.modal-box')) return;
  document.getElementById('edit-modal').classList.remove('open');
  editItemId = null;
}

async function confirmEdit() {
  if (!editItemId) return;
  const newName = document.getElementById('edit-item-name').value.trim();
  if (!newName) { document.getElementById('edit-item-name').focus(); return; }

  await updateItems(items => {
    const item = items.find(i => i.id === editItemId);
    if (!item) return;
    item.name      = newName;
    item.qty       = editQtyVal;
    item.perPerson = editPerPerson;
    // Clamp any existing claims so they don't exceed the new qty
    const totalClaimed = (item.claims || []).reduce((s, c) => s + (c.qty || 1), 0);
    if (totalClaimed > editQtyVal) {
      // Reduce claims from the end until we fit
      let remaining = editQtyVal;
      item.claims = item.claims.map(c => {
        const allowed = Math.min(c.qty, remaining);
        remaining -= allowed;
        return { ...c, qty: allowed };
      }).filter(c => c.qty > 0);
    }
  });

  document.getElementById('edit-modal').classList.remove('open');
  editItemId = null;
  toast('✏️ Item updated!');
}

// ── Rename member ────────────────────────────────────────────────
function openRenameModal() {
  document.getElementById('rename-input').value = currentUser;
  document.getElementById('rename-modal').classList.add('open');
  setTimeout(() => {
    const input = document.getElementById('rename-input');
    input.focus();
    input.select();
  }, 100);
}

function closeRenameModal(event) {
  if (event && event.target.closest('.modal-box')) return;
  document.getElementById('rename-modal').classList.remove('open');
}

async function confirmRename() {
  const newName = document.getElementById('rename-input').value.trim();
  if (!newName || newName === currentUser) {
    closeRenameModal();
    return;
  }

  const snap    = await db.collection('trips').doc(currentTrip).get();
  const trip    = snap.data();
  const members = trip.members || [];

  if (members.includes(newName)) {
    toast('⚠️ That name is already taken on this trip.');
    return;
  }

  const oldName = currentUser;

  // Update members array
  const newMembers = members.map(m => m === oldName ? newName : m);

  // Update creator if they renamed themselves
  const newCreator = trip.creator === oldName ? newName : trip.creator;

  // Reassign all item claims from old name to new name
  const newItems = (trip.items || []).map(item => ({
    ...item,
    claims: (item.claims || []).map(c =>
      c.user === oldName ? { ...c, user: newName } : c
    )
  }));

  await db.collection('trips').doc(currentTrip).update({
    members: newMembers,
    creator: newCreator,
    items:   newItems,
  });

  currentUser = newName;
  document.getElementById('rename-modal').classList.remove('open');
  toast(`✓ Name updated to ${newName}!`);
}

// ── Delete member (creator only) ─────────────────────────────────
async function deleteMember(memberName) {
  if (!confirm(`Remove ${memberName} from the trip? Their claimed gear will be unclaimed.`)) return;

  const snap  = await db.collection('trips').doc(currentTrip).get();
  const trip  = snap.data();

  // Remove from members list
  const newMembers = (trip.members || []).filter(m => m !== memberName);

  // Unclaim all items claimed by this member
  const newItems = (trip.items || []).map(item => ({
    ...item,
    claims: (item.claims || []).filter(c => c.user !== memberName)
  }));

  // Rescale per-person items to new member count
  const rescaled = rescaleItems(newItems, newMembers.length);

  await db.collection('trips').doc(currentTrip).update({
    members:   newMembers,
    groupSize: newMembers.length,
    items:     rescaled,
  });

  toast(`🗑️ ${memberName} removed from trip.`);
}

// ── Leave & delete self from trip ────────────────────────────────
async function leaveAndDeleteSelf() {
  if (!confirm("Leave this trip? Your claimed gear will be unclaimed and you'll be removed from the crew.")) return;

  const snap  = await db.collection('trips').doc(currentTrip).get();
  const trip  = snap.data();

  const newMembers = (trip.members || []).filter(m => m !== currentUser);

  // Unclaim all items claimed by this user
  const newItems = (trip.items || []).map(item => ({
    ...item,
    claims: (item.claims || []).filter(c => c.user !== currentUser)
  }));

  // Rescale per-person items to new member count
  const rescaled = rescaleItems(newItems, newMembers.length);

  await db.collection('trips').doc(currentTrip).update({
    members:   newMembers,
    groupSize: newMembers.length,
    items:     rescaled,
  });

  // Navigate home
  if (tripUnsubscribe) { tripUnsubscribe(); tripUnsubscribe = null; }
  currentTrip = null;
  currentUser = null;
  showScreen('home');
  toast('You have left the trip.');
}
