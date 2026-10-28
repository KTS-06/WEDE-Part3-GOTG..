/* ==========================================================================
   Gift of the Givers Foundation — Interactive Engine (script.js)
   ========================================================================== */

// 1. Operational Services Dataset
const servicesData = [
  {
    title: "Disaster & Search Rescue Operations",
    category: "Disaster",
    desc: "Specialized urban search-and-rescue teams equipped with acoustic locators and heavy extraction tools.",
    badge: "Acute Intervention"
  },
  {
    title: "Water Scarcity Mitigation & Boreholes",
    category: "Water",
    desc: "Comprehensive hydrological drilling, desalination plants, and emergency municipal water trucking.",
    badge: "Water Security"
  },
  {
    title: "Healthcare & Mobile Surgical Infrastructure",
    category: "Healthcare",
    desc: "Containerized field surgical units and deployment of specialist medical personnel.",
    badge: "Medical Relief"
  },
  {
    title: "Hunger Alleviation & Food Distribution",
    category: "Food",
    desc: "Bulk nutritional food pack distributions for vulnerable rural households and disaster zones.",
    badge: "Nutrition"
  }
];

// 2. Leaflet JS Map Initialization
let mapInstance = null;
function initMap() {
  const mapContainer = document.getElementById('leaflet-map');
  if (!mapContainer || mapInstance) return;

  mapInstance = L.map('leaflet-map').setView([-29.6006, 30.3794], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  L.marker([-29.6006, 30.3794]).addTo(mapInstance)
    .bindPopup('<b>Gift of the Givers HQ</b><br>Pietermaritzburg, South Africa');

  L.marker([-26.2041, 28.0473]).addTo(mapInstance)
    .bindPopup('<b>Gauteng Regional Hub</b><br>Mayfair, Johannesburg');
}

// 3. Lightbox Gallery Trigger
function openLightbox(imgSrc, title) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
  if (modal && img && caption) {
    img.src = imgSrc;
    caption.textContent = title;
    modal.classList.remove('hidden');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('hidden');
}

// 4. Accordion Toggle
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById(id + '-icon');
  if (!content) return;

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}

// 5. Impact Cost Calculator
function calculateImpact() {
  const categoryEl = document.getElementById('calc-category');
  const qtyEl = document.getElementById('calc-quantity');
  if (!categoryEl || !qtyEl) return;

  const category = categoryEl.value;
  const qty = parseInt(qtyEl.value) || 1;
  let unitCost = 600;

  if (category === 'borehole') unitCost = 150000;
  if (category === 'medical') unitCost = 2500;

  const total = unitCost * qty;
  const taxSavings = total * 0.27;

  document.getElementById('calc-total').textContent = 'R' + total.toLocaleString();
  document.getElementById('calc-tax').textContent = 'R' + taxSavings.toLocaleString();
}

// 6. Dynamic Services Filter & DOM Injection
function renderServices(items) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  
  grid.innerHTML = items.map(s => `
    <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
      <span class="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 px-2.5 py-1 rounded-full">${s.badge}</span>
      <h4 class="text-lg font-bold text-slate-900">${s.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${s.desc}</p>
    </div>
  `).join('');
}

function filterServices() {
  const queryEl = document.getElementById('service-search-input');
  const categoryEl = document.getElementById('service-category-filter');
  if (!queryEl || !categoryEl) return;

  const query = queryEl.value.toLowerCase();
  const category = categoryEl.value;

  const filtered = servicesData.filter(s => {
    const matchesQuery = s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
    const matchesCategory = category === 'ALL' || s.category === category;
    return matchesQuery && matchesCategory;
  });

  renderServices(filtered);
}

// 7. Form Handlers & Processing
function handleEnquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('enquiry-name').value;
  const type = document.getElementById('enquiry-type').value;

  const resp = document.getElementById('enquiry-response');
  const respText = document.getElementById('enquiry-response-text');

  if (resp && respText) {
    respText.textContent = `Thank you, ${name}. Your registration for [${type}] has been transmitted to our regional dispatch team. You will receive Section 18A documentation shortly.`;
    resp.classList.remove('hidden');
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const body = document.getElementById('contact-body').value;

  const mailtoUrl = `mailto:info@giftofthegivers.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + body)}`;
  window.location.href = mailtoUrl;
}

// 8. SEO Modal Trigger
function openModal(type) {
  const modal = document.getElementById('seo-modal');
  const title = document.getElementById('seo-modal-title');
  const content = document.getElementById('seo-modal-content');

  if (!modal || !title || !content) return;

  if (type === 'robots') {
    title.textContent = 'robots.txt';
    content.textContent = "User-agent: *\nAllow: /\nSitemap: https://giftofthegivers.org/sitemap.xml";
  } else {
    title.textContent = 'sitemap.xml';
    content.textContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url><loc>https://giftofthegivers.org/index.html</loc></url>\n  <url><loc>https://giftofthegivers.org/about.html</loc></url>\n  <url><loc>https://giftofthegivers.org/services.html</loc></url>\n  <url><loc>https://giftofthegivers.org/enquiry.html</loc></url>\n  <url><loc>https://giftofthegivers.org/contact.html</loc></url>\n</urlset>";
  }
  modal.classList.remove('hidden');
}

function closeSeoModal() {
  const modal = document.getElementById('seo-modal');
  if (modal) modal.classList.add('hidden');
}

// Global Document Initializers
document.addEventListener('DOMContentLoaded', () => {
  renderServices(servicesData);
  initMap();
});