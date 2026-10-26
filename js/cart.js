/**
 * CrocKicks™ Universal Cart & State Management Subsystem
 * Persists cart, wishlist, and completed orders across index.html, product.html, and cart.html
 */

const CrocCart = (function () {
  const STORAGE_KEY = 'crockicks_cart_v3';
  const PROMO_KEY = 'crockicks_active_promo';
  const WISHLIST_KEY = 'crockicks_wishlist_v1';
  const ORDERS_KEY = 'crockicks_orders_v1';

  // Explicitly purge legacy caches so new user starts with 100% clean, empty cart
  try {
    if (localStorage.getItem('crockicks_cart_v1')) {
      localStorage.removeItem('crockicks_cart_v1');
    }
    if (localStorage.getItem('crockicks_cart_v2')) {
      localStorage.removeItem('crockicks_cart_v2');
    }
  } catch (e) {}

  // Indian Currency Formatter (e.g. ₹2,995, ₹3,995)
  function formatPrice(amount) {
    return '₹' + Math.round(Number(amount) || 0).toLocaleString('en-IN');
  }

  // Available Promotional Discounts
  const PROMO_RULES = {
    KICK15: { type: 'percent', value: 0.15, label: '15% OFF entire order' },
    DESI20: { type: 'percent', value: 0.20, label: '20% OFF Festive Season Drop' },
    FIRST300: { type: 'fixed', value: 300.0, label: '₹300 OFF first order' },
    FREESHIP: { type: 'shipping', value: 0, label: 'Free All-India VIP Express Delivery' }
  };

  // Curated demo pack if the user wants to load sample items with 1 click
  const SAMPLE_ITEMS = [
    {
      id: 'item-platform',
      name: 'CrocKicks Platform Clog (+5cm)',
      series: 'Platform Atelier',
      price: 3995,
      quantity: 1,
      color: 'Sunburst Yellow',
      colorHex: '#FFE259',
      size: 'UK 8 (India / Men)',
      badge: '+5cm Lift',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA',
      details: 'Included: 🏏 Cricket & 🪔 Diya Jibbitz Charms Pre-Docked'
    },
    {
      id: 'item-fleece',
      name: 'CrocKicks Fleece Lined Clog',
      series: 'Seasonal Warmth',
      price: 4495,
      quantity: 1,
      color: 'Bubblegum Pink',
      colorHex: '#FFA8C5',
      size: 'UK 6 (India / Women)',
      badge: 'Cozy Drop',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHx1QE92UwptflBNyCvyTPvJ36RBZFzM0ml9fCFHltSjy_UwtzMxZqWp-zzDpAZWaLm4Eq9nEzHmghgV_1pVyIm1A5WY-1vAp6uHcVhpba4HRqz9Fyhepxl5c3jVHTw4wy_MTvs5f36_aeW6peTpvFqMKA2y2VunCi8KQ_--RPsMp_a3frP7CFwdRo-2svTYCiwsnghUVvqhEJyd7oLdtZymc21j7lgFVMpPKNErkd',
      details: 'Cloud-Shearling Lining • Non-Skid Indoor/Outdoor Sole'
    },
    {
      id: 'item-charms',
      name: 'Desi Pop 5-Pack Jibbitz Charms',
      series: 'Charms & Custom',
      price: 899,
      quantity: 1,
      color: 'Desi Pop Limited Edition',
      colorHex: '#FE5D39',
      size: 'Universal Fit',
      badge: 'Festive',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNA5FpGEF3Gh9KIJtkkIrF8lMYmSe3h04O6qk7Pg4WQlKYLA5M0ON1uXPnJFsDdIakiAPMSgq4dkgyuiyfzqVU1DWDZFqUtMOuXd-o2r4Ki04tdUl8Vo1UKTISFfDIiPtaB33B8Uc3LMOuBDd-E0yFv9EDGYPCNUqAVzR2uY5KYzbby0rlVLrDA8x6jcb9o2narvzPPFmDF9OUKfEFAgsSXXHszOZll23ZAtv3lJNe',
      details: 'Guaranteed Cricket, Auto, Chai, Diya & Evil Eye Charms'
    }
  ];

  // 1. Storage Operations (Defaults to clean empty array so user has 100% control)
  function getItems() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        return [];
      }
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }

  function saveItems(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
    updateHeaderUI();
  }

  function loadDemoItems() {
    saveItems(SAMPLE_ITEMS);
    playAcousticPop(640);
    showToast('Loaded 3 sample CrocKicks items into your bag!');
    return [...SAMPLE_ITEMS];
  }

  function getActivePromo() {
    return localStorage.getItem(PROMO_KEY) || 'KICK15';
  }

  function setActivePromo(code) {
    if (code) {
      localStorage.setItem(PROMO_KEY, code.toUpperCase());
    } else {
      localStorage.removeItem(PROMO_KEY);
    }
  }

  // 2. Wishlist Operations
  function getWishlist() {
    try {
      const data = localStorage.getItem(WISHLIST_KEY);
      if (!data) {
        const seed = ['prod-platform', 'prod-citrus'];
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(seed));
        return seed;
      }
      return JSON.parse(data);
    } catch (e) {
      return ['prod-platform', 'prod-citrus'];
    }
  }

  function toggleWishlistItem(id = 'prod-platform') {
    let list = getWishlist();
    const idx = list.indexOf(id);
    let added = false;
    if (idx > -1) {
      list.splice(idx, 1);
      added = false;
    } else {
      list.push(id);
      added = true;
    }
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    } catch (e) {}
    playAcousticPop(added ? 580 : 380);
    showToast(added ? 'Saved to Atelier Wishlist!' : 'Removed from Wishlist');
    updateWishlistUI();
    return added;
  }

  function updateWishlistUI() {
    const list = getWishlist();
    const count = list.length;
    const badgeElements = [
      document.getElementById('wishlist-counter'),
      document.getElementById('wishlist-badge'),
      document.getElementById('header-wishlist-count')
    ];
    badgeElements.forEach((el) => {
      if (el) el.innerText = count;
    });

    const icons = [
      document.getElementById('nav-wishlist-icon'),
      document.getElementById('product-wishlist-icon')
    ];
    icons.forEach((icon) => {
      if (icon) {
        if (list.includes('prod-platform')) {
          icon.classList.add('text-secondary');
        } else {
          icon.classList.remove('text-secondary');
        }
      }
    });
  }

  // 3. Cart Operations
  function addItem(item) {
    const items = getItems();
    const existingIndex = items.findIndex(
      (i) => i.id === item.id && i.color === item.color && i.size === item.size
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += item.quantity || 1;
    } else {
      items.push({
        id: item.id || 'item-' + Date.now(),
        productId: item.productId || 'platform',
        name: item.name || 'CrocKicks Custom',
        series: item.series || 'Atelier Collection',
        price: parseFloat(item.price) || 2995,
        quantity: item.quantity || 1,
        color: item.color || 'Sunburst Yellow',
        colorHex: item.colorHex || '#FFE259',
        size: item.size || 'UK 8 (India / Men)',
        badge: item.badge || 'New Drop',
        image:
          item.image ||
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA',
        details: item.details || 'Includes 3 Free Charms'
      });
    }

    saveItems(items);
    playAcousticPop(640);
    showToast(`Added ${item.name} to your CrocKicks bag!`);
  }

  function updateQuantity(id, delta) {
    let items = getItems();
    const index = items.findIndex((i) => i.id === id);
    if (index > -1) {
      items[index].quantity += delta;
      if (items[index].quantity <= 0) {
        items.splice(index, 1);
      }
      saveItems(items);
      playAcousticPop(delta > 0 ? 560 : 420);
    }
  }

  function removeItem(id) {
    let items = getItems();
    items = items.filter((i) => i.id !== id);
    saveItems(items);
    playAcousticPop(380);
    showToast('Item removed from your bag.');
  }

  function clearAll() {
    saveItems([]);
    playAcousticPop(320);
    showToast('Your bag has been emptied.');
  }

  // 4. Financial Calculations (Indian Rupee INR with Free Shipping over ₹999)
  function calculateTotals() {
    const items = getItems();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const promoCode = getActivePromo();
    const promo = PROMO_RULES[promoCode];

    let discount = 0;
    let promoDesc = '';

    if (promo && subtotal > 0) {
      if (promo.type === 'percent') {
        discount = subtotal * promo.value;
      } else if (promo.type === 'fixed') {
        discount = Math.min(subtotal, promo.value);
      }
      promoDesc = `Coupon ${promoCode} applied (${promo.label})`;
    }

    const freeShippingThreshold = 999.0;
    const shipping =
      subtotal === 0 ||
      subtotal >= freeShippingThreshold ||
      (promo && promo.type === 'shipping')
        ? 0
        : 99.0;

    const payableAmount = Math.max(0, subtotal - discount);
    // In India, prices are MRP (inclusive of GST). We calculate included 18% GST breakdown.
    const gstIncluded = Math.round(payableAmount - (payableAmount / 1.18));
    const total = Math.max(0, payableAmount + shipping);

    return {
      itemCount,
      subtotal,
      discount,
      promoCode,
      promoDesc,
      shipping,
      freeShippingThreshold,
      gstIncluded,
      tax: 0,
      total
    };
  }

  // 5. Global UI Syncer
  function updateHeaderUI() {
    const totals = calculateTotals();

    // Badges
    const badgeElements = [
      document.getElementById('header-cart-badge'),
      document.getElementById('cart-counter'),
      document.getElementById('cart-badge-counter'),
      document.getElementById('header-cart-count')
    ];

    badgeElements.forEach((el) => {
      if (el) {
        el.innerText = totals.itemCount;
        el.classList.add('scale-125');
        setTimeout(() => el.classList.remove('scale-125'), 200);
      }
    });

    // Subtotal Nav displays
    const priceElements = [
      document.getElementById('header-cart-total'),
      document.getElementById('cart-nav-total')
    ];

    priceElements.forEach((el) => {
      if (el) {
        el.innerText = formatPrice(totals.total);
      }
    });

    updateWishlistUI();
  }

  // 6. Sound Synthesizer Engine (Web Audio API)
  let audioContext = null;
  function playAcousticPop(freq = 480, duration = 0.08) {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        110,
        audioContext.currentTime + duration
      );

      gain.gain.setValueAtTime(0.22, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
      );

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + duration);
    } catch (e) {}
  }

  // 7. Toast Notification System
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('cart-toast');
    const msg = document.getElementById('toast-msg');
    if (!toast || !msg) return;

    msg.innerText = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2800);
  }

  // 8. Order Management System (Real Order Placement & History)
  function getOrders() {
    try {
      const data = localStorage.getItem(ORDERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function placeOrder(customerDetails = {}) {
    const items = getItems();
    if (items.length === 0) return null;

    const totals = calculateTotals();
    const orderNumber = '#CK-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();

    const order = {
      id: orderNumber,
      timestamp: now.toISOString(),
      formattedDate: now.toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customer: {
        firstName: customerDetails.firstName || 'Aarav',
        lastName: customerDetails.lastName || 'Sharma',
        phone: customerDetails.phone || '+91 98201 98201',
        email: customerDetails.email || 'aarav.sharma@crockicks.in',
        address: customerDetails.address || 'Flat 402, Sea Green Heights, Worli Sea Face',
        city: customerDetails.city || 'Mumbai',
        state: customerDetails.state || 'Maharashtra',
        zip: customerDetails.zip || '400018'
      },
      paymentMethod: customerDetails.paymentMethod || 'UPI (Google Pay / PhonePe / Paytm)',
      items: [...items],
      totals: { ...totals },
      status: 'Dispatched from Bhiwandi / Gurugram Atelier',
      estimatedDelivery: '2-3 Days (BlueDart / Delhivery VIP Air)'
    };

    const orders = getOrders();
    orders.unshift(order);
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch (e) {}

    // Empty the cart after successful order
    saveItems([]);
    playAcousticPop(700);

    return order;
  }

  function getLatestOrder() {
    const orders = getOrders();
    return orders.length > 0 ? orders[0] : null;
  }

  function clearOrders() {
    try {
      localStorage.removeItem(ORDERS_KEY);
    } catch (e) {}
  }

  // 9. Global Search Engine Setup
  function initGlobalSearch() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]');
    searchInputs.forEach((input) => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = input.value.trim().toLowerCase();
          if (!query) return;

          const catalog = document.getElementById('bestsellers');
          if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth' });
            const cards = document.querySelectorAll('#products-catalog-grid > div');
            cards.forEach((card) => {
              const text = card.innerText.toLowerCase();
              card.style.display = text.includes(query) ? 'flex' : 'none';
            });
            showToast(`Filtered catalog for: "${query}"`);
          } else {
            window.location.href = `index.html#bestsellers`;
          }
        }
      });
    });
  }

  // Auto-init on page load
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      updateHeaderUI();
      initGlobalSearch();
    });
  }

  return {
    formatPrice,
    getItems,
    saveItems,
    loadDemoItems,
    addItem,
    updateQuantity,
    removeItem,
    clearAll,
    calculateTotals,
    updateHeaderUI,
    getWishlist,
    toggleWishlistItem,
    updateWishlistUI,
    getActivePromo,
    setActivePromo,
    PROMO_RULES,
    SAMPLE_ITEMS,
    playAcousticPop,
    showToast,
    getOrders,
    placeOrder,
    getLatestOrder,
    clearOrders
  };
})();

window.CrocCart = CrocCart;

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const icon = document.getElementById('mobile-menu-icon');
  if (!drawer) return;
  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    if (icon) icon.innerText = 'close';
    if (window.CrocCart) window.CrocCart.playAcousticPop(480);
  } else {
    drawer.classList.add('hidden');
    if (icon) icon.innerText = 'menu';
    if (window.CrocCart) window.CrocCart.playAcousticPop(380);
  }
}
window.toggleMobileNav = toggleMobileNav;
