// ── PRODUCTS DATA ──
const products = [
  { id:1, name:'Blue Sapphire', type:'Blue Sapphire', category:'sapphire', heat:'unheated', size:'6.2mm Round', weight:'1.45 Ct', price:'USD 980', img:'images/Blue Sapphire.jpg', origImg:'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=400&q=80&auto=format&fit=crop', badge:'unheated' },
  { id:2, name:'Yellow Sapphire', type:'Yellow Sapphire', category:'sapphire', heat:'unheated', size:'7.1mm Oval', weight:'2.10 Ct', price:'USD 650', img:'images/Yellow Sapphire.jpg', origImg:'https://images.unsplash.com/photo-1583073284234-4fd5e0e0e5cf?w=400&q=80&auto=format&fit=crop', badge:'unheated' },
  { id:3, name:"Cat's Eye Chrysoberyl", type:"Cat's Eye", category:'rare', heat:'unheated', size:'8.0mm Cabochon', weight:'3.25 Ct', price:'USD 1,450', img:'images/CatEYE.jpg', origImg:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&auto=format&fit=crop', badge:'rare' },
  { id:4, name:'Pink Sapphire', type:'Pink Sapphire', category:'sapphire', heat:'heated', size:'5.5mm Round', weight:'1.02 Ct', price:'USD 520', img:'images/Pink Sapphire.jpg', origImg:'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&q=80&auto=format&fit=crop', badge:'heated' },
  { id:5, name:'Blue Sapphire Pair', type:'Blue Sapphire', category:'sapphire', heat:'heated', size:'5.0mm Rounds', weight:'2.18 Ct', price:'USD 740', img:'images/Blue Sapphire Pair.jpg', origImg:'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80&auto=format&fit=crop', badge:'heated' },
  { id:6, name:'Ceylon Spinel', type:'Red Spinel', category:'rare', heat:'unheated', size:'6.8mm Oval', weight:'1.85 Ct', price:'USD 1,100', img:'images/gem1.jpg', origImg:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80&auto=format&fit=crop', badge:'rare' },
  { id:7, name:'Orange Sapphire', type:'Orange Sapphire', category:'sapphire', heat:'unheated', size:'5.2mm Cushion', weight:'0.92 Ct', price:'USD 480', img:'images/gem2.jpg', origImg:'https://images.unsplash.com/photo-1574722772249-1b0d954e8f28?w=400&q=80&auto=format&fit=crop', badge:'unheated' },
  { id:8, name:'Green Tourmaline', type:'Tourmaline', category:'rare', heat:'unheated', size:'7.5mm Oval', weight:'2.40 Ct', price:'USD 390', img:'images/gem3.jpg', origImg:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80&auto=format&fit=crop', badge:'unheated' },
];

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter || p.heat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" onerror="this.src='${p.origImg}'">
        <span class="product-badge badge-${p.badge}">${p.badge === 'unheated' ? 'Unheated' : p.badge === 'heated' ? 'Heated' : 'Rare'}</span>
        <button class="product-wishlist" title="Save">♡</button>
      </div>
      <div class="product-info">
        <div class="product-type">${p.type}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-meta">${p.size} · ${p.weight}</div>
        <div class="product-footer">
          <div class="product-price">${p.price} <span>/ stone</span></div>
          <button class="btn-add" onclick="enquireProduct('${p.name}')">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
}
renderProducts('all');

function filterProducts(f, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(f);
}

function enquireProduct(name) {
  document.querySelector('#contact select').value = name.includes('Cat') ? "Cat's Eye (Chrysoberyl)" : name.includes('Spinel') ? 'Ceylon Spinel' : name.includes('Yellow') ? 'Yellow Sapphire' : name.includes('Pink') ? 'Pink Sapphire' : name.includes('Orange') ? 'Orange Sapphire' : name.includes('Tourmaline') ? 'Tourmaline' : 'Blue Sapphire';
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

// ── FORM SUBMIT ──
function submitForm(btn) {
  btn.textContent = '✓ Enquiry Sent!';
  btn.style.background = '#1a5c3a';
  setTimeout(() => { btn.textContent = 'Send Enquiry →'; btn.style.background = ''; }, 3000);
}

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom').forEach(el => obs.observe(el));

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 30);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}