/* =========================================================
   ORAVANY — Script principal
   Header injecté, footer injecté, panier localStorage,
   menu mobile, toast notifications.
   ========================================================= */

/* ---------- Header HTML (injecté dynamiquement) ---------- */
const HEADER_HTML = `
<div class="announcement">Livraison offerte dès 80€ d'achat — Récolte 2025 disponible</div>
<header class="header" id="site-header">
    <div class="container header-inner">
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Ouvrir le menu">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <nav class="nav-left">
            <a href="index.html" class="nav-link" data-page="index">Accueil</a>
            <a href="boutique.html" class="nav-link" data-page="boutique">Boutique</a>
            <a href="notre-histoire.html" class="nav-link" data-page="notre-histoire">Notre Histoire</a>
        </nav>
        <a href="index.html" class="logo">
            <span class="logo-mark"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse class="petal" cx="50" cy="33" rx="5.5" ry="14"/><ellipse class="petal" cx="50" cy="67" rx="5.5" ry="14"/><ellipse class="petal" cx="33" cy="50" rx="14" ry="5.5"/><ellipse class="petal" cx="67" cy="50" rx="14" ry="5.5"/><circle class="dot" cx="50" cy="14" r="1.4"/><circle class="dot" cx="50" cy="86" r="1.4"/><circle class="dot" cx="14" cy="50" r="1.4"/><circle class="dot" cx="86" cy="50" r="1.4"/></svg></span>
            <span class="logo-text">ORAVANY</span>
            <span class="logo-tagline">Wild Spices From Madagascar</span>
        </a>
        <nav class="nav-right">
            <a href="boutique.html" class="nav-link" data-page="boutique-r">Épices</a>
            <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
            <button class="icon-btn" aria-label="Rechercher">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
            </button>
            <a href="contact.html" class="icon-btn" aria-label="Mon compte">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </a>
            <a href="panier.html" class="icon-btn" aria-label="Panier">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                <span class="cart-count hidden" id="cart-count">0</span>
            </a>
        </nav>
    </div>
</header>
<div class="mobile-menu" id="mobile-menu">
    <a href="index.html" class="nav-link">Accueil</a>
    <a href="boutique.html" class="nav-link">Boutique</a>
    <a href="notre-histoire.html" class="nav-link">Notre Histoire</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="panier.html" class="nav-link">Panier</a>
</div>
`;

/* ---------- Footer HTML ---------- */
const FOOTER_HTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="index.html" class="logo" style="align-items:flex-start;">
                    <span class="logo-mark"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse class="petal" cx="50" cy="33" rx="5.5" ry="14"/><ellipse class="petal" cx="50" cy="67" rx="5.5" ry="14"/><ellipse class="petal" cx="33" cy="50" rx="14" ry="5.5"/><ellipse class="petal" cx="67" cy="50" rx="14" ry="5.5"/><circle class="dot" cx="50" cy="14" r="1.4"/><circle class="dot" cx="50" cy="86" r="1.4"/><circle class="dot" cx="14" cy="50" r="1.4"/><circle class="dot" cx="86" cy="50" r="1.4"/></svg></span>
                    <span class="logo-text">ORAVANY</span>
                    <span class="logo-tagline">Wild Spices From Madagascar</span>
                </a>
                <p>Épices rares récoltées à la main dans les forêts de Madagascar. Authenticité, savoir-faire artisanal, qualité d'exception.</p>
                <div class="footer-socials">
                    <a href="#" class="footer-social" aria-label="Instagram">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="#" class="footer-social" aria-label="Facebook">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" class="footer-social" aria-label="Pinterest">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h4 class="footer-title">Boutique</h4>
                <div class="footer-links">
                    <a href="boutique.html?cat=poivres">Poivres sauvages</a>
                    <a href="boutique.html?cat=vanille">Vanille Bourbon</a>
                    <a href="boutique.html?cat=epices">Épices rares</a>
                    <a href="boutique.html?cat=riz">Riz d'exception</a>
                    <a href="boutique.html">Tous nos produits</a>
                </div>
            </div>
            <div>
                <h4 class="footer-title">Maison</h4>
                <div class="footer-links">
                    <a href="notre-histoire.html">Notre histoire</a>
                    <a href="notre-histoire.html#savoir-faire">Notre savoir-faire</a>
                    <a href="contact.html">Nous contacter</a>
                    <a href="#">Livraison & retours</a>
                    <a href="#">Mentions légales</a>
                </div>
            </div>
            <div>
                <h4 class="footer-title">Newsletter</h4>
                <p style="font-size:0.85rem; opacity:0.8; line-height:1.7;">Recevez nos récoltes en avant-première et notre carnet de voyage.</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Merci pour votre inscription !');">
                    <input type="email" placeholder="Votre email" required>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <div>© 2025 ORAVANY — Antananarivo, Madagascar. Tous droits réservés.</div>
            <div class="footer-payments">
                <span style="opacity:0.7; font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase;">Paiement sécurisé</span>
                <svg width="34" height="22" viewBox="0 0 34 22" fill="none"><rect width="34" height="22" rx="3" fill="#1A1F71"/><text x="17" y="15" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="Arial">VISA</text></svg>
                <svg width="34" height="22" viewBox="0 0 34 22" fill="none"><rect width="34" height="22" rx="3" fill="#fff"/><circle cx="13" cy="11" r="6" fill="#EB001B"/><circle cx="21" cy="11" r="6" fill="#F79E1B" fill-opacity="0.9"/></svg>
                <svg width="34" height="22" viewBox="0 0 34 22" fill="none"><rect width="34" height="22" rx="3" fill="#003087"/><text x="17" y="15" text-anchor="middle" fill="#00A4DD" font-size="7" font-weight="bold" font-family="Arial">PayPal</text></svg>
                <svg width="34" height="22" viewBox="0 0 34 22" fill="none"><rect width="34" height="22" rx="3" fill="#635BFF"/><text x="17" y="15" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="Arial">stripe</text></svg>
            </div>
        </div>
    </div>
</footer>
`;

/* ---------- Injection header / footer ---------- */
function renderLayout() {
    const headerHost = document.getElementById('header-host');
    const footerHost = document.getElementById('footer-host');
    if (headerHost) headerHost.innerHTML = HEADER_HTML;
    if (footerHost) footerHost.innerHTML = FOOTER_HTML;

    // Active link
    const currentPage = document.body.dataset.page;
    if (currentPage) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const page = link.dataset.page;
            if (page && (page === currentPage || page === currentPage + '-r')) {
                link.classList.add('active');
            }
        });
    }

    setupHeaderBehavior();
    updateCartCount();
}

/* ---------- Header scroll + mobile ---------- */
function setupHeaderBehavior() {
    const header = document.getElementById('site-header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 30) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
}

/* ---------- Panier (localStorage) ---------- */
const CART_KEY = 'oravany_cart';

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    document.dispatchEvent(new CustomEvent('cart:updated'));
}

function addToCart(productId, format, quantity = 1) {
    const product = getProduct(productId);
    if (!product) return;
    const selectedFormat = product.formats.find(f => f.label === format) || product.formats[0];
    const cart = getCart();
    const existing = cart.find(i => i.id === productId && i.format === selectedFormat.label);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            format: selectedFormat.label,
            price: selectedFormat.price,
            image: product.image,
            quantity
        });
    }
    saveCart(cart);
    showToast(`${product.name} ajouté au panier`);
}

function removeFromCart(productId, format) {
    const cart = getCart().filter(i => !(i.id === productId && i.format === format));
    saveCart(cart);
}

function updateQuantity(productId, format, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId && i.format === format);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
    }
}

function getCartTotal() {
    return getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function getCartCount() {
    return getCart().reduce((sum, i) => sum + i.quantity, 0);
}

function clearCart() {
    saveCart([]);
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (!el) return;
    const count = getCartCount();
    el.textContent = count;
    if (count > 0) el.classList.remove('hidden');
    else el.classList.add('hidden');
}

/* ---------- Toast ---------- */
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span>${message}</span>
    `;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---------- Formatage prix ---------- */
function formatPrice(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    }).format(amount);
}

/* ---------- Helper URL params ---------- */
function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

/* ---------- Image fallback ---------- */
// Image SVG inline stylisée (motif épice ORAVANY) en cas d'échec de chargement
const FALLBACK_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2E3B2F"/>
      <stop offset="100%" stop-color="#1a2419"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#g)"/>
  <g transform="translate(300,260)">
    <g stroke="#8B6B2E" stroke-width="2" fill="none" stroke-linecap="round">
      <ellipse cx="0" cy="-40" rx="16" ry="42"/>
      <ellipse cx="0" cy="40" rx="16" ry="42"/>
      <ellipse cx="-40" cy="0" rx="42" ry="16"/>
      <ellipse cx="40" cy="0" rx="42" ry="16"/>
    </g>
    <g fill="#8B6B2E">
      <circle cx="0" cy="-95" r="3"/>
      <circle cx="0" cy="95" r="3"/>
      <circle cx="-95" cy="0" r="3"/>
      <circle cx="95" cy="0" r="3"/>
    </g>
  </g>
  <text x="300" y="400" text-anchor="middle" fill="#8B6B2E" font-family="serif" font-size="32" letter-spacing="6">ORAVANY</text>
  <text x="300" y="430" text-anchor="middle" fill="#8B6B2E" font-family="sans-serif" font-size="10" letter-spacing="3" opacity="0.7">WILD SPICES FROM MADAGASCAR</text>
</svg>
`);

function setupImageFallback() {
    document.querySelectorAll('img').forEach(img => {
        if (img.dataset.fallback) return;
        img.dataset.fallback = '1';
        img.addEventListener('error', function handler() {
            if (this.src !== FALLBACK_SVG) {
                this.src = FALLBACK_SVG;
            }
        });
    });
    // Observer pour les images ajoutées dynamiquement
    new MutationObserver(muts => {
        muts.forEach(m => m.addedNodes.forEach(n => {
            if (n.nodeType === 1) {
                n.querySelectorAll && n.querySelectorAll('img').forEach(img => {
                    if (img.dataset.fallback) return;
                    img.dataset.fallback = '1';
                    img.addEventListener('error', function() {
                        if (this.src !== FALLBACK_SVG) this.src = FALLBACK_SVG;
                    });
                });
            }
        }));
    }).observe(document.body, { childList: true, subtree: true });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
    renderLayout();
    setupImageFallback();
});
