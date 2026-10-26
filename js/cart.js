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

  // Available Promotional Discounts
  const PROMO_RULES = {
    KICK15: { type: 'percent', value: 0.15, label: '15% OFF entire order' },
    JIBBITZ: { type: 'fixed', value: 10.0, label: '$10 OFF accessories' },
    FREESHIP: { type: 'shipping', value: 0, label: 'Free Express VIP Shipping' }
  };

  // Curated demo pack if the user wants to load sample items with 1 click
  const SAMPLE_ITEMS = [
    {
      id: 'item-platform',
      name: 'CrocKicks Platform Clog (+5cm)',
      series: 'Platform Atelier',
      price: 59.99,
      quantity: 1,
      color: 'Sunburst Yellow',
      colorHex: '#FFE259',
      size: 'US Men 8 / Women 10',
      badge: '+5cm Lift',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA',
      details: 'Included: Smiley & Moon Jibbitz Charms Pre-Docked'
    },
    {
      id: 'item-fleece',
      name: 'CrocKicks Fleece Lined Clog',
      series: 'Seasonal Warmth',
      price: 64.99,
      quantity: 1,
      color: 'Bubblegum Pink',
      colorHex: '#FFA8C5',
      size: 'US Women 7',
      badge: 'Cozy Drop',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHx1QE92UwptflBNyCvyTPvJ36RBZFzM0ml9fCFHltSjy_UwtzMxZqWp-zzDpAZWaLm4Eq9nEzHmghgV_1pVyIm1A5WY-1vAp6uHcVhpba4HRqz9Fyhepxl5c3jVHTw4wy_MTvs5f36_aeW6peTpvFqMKA2y2VunCi8KQ_--RPsMp_a3frP7CFwdRo-2svTYCiwsnghUVvqhEJyd7oLdtZymc21j7lgFVMpPKNErkd',
      details: 'Cloud-Shearling Lining • Indoor/Outdoor Sole'
    },
    {
      id: 'item-charms',
      name: '5-Pack Mystery Jibbitz Pop Charms',
      series: 'Charms & Custom',
      price: 14.99,
      quantity: 1,
      color: 'Neo-Pop Vault Edition',
      colorHex: '#FE5D39',
      size: 'Universal Fit',
      badge: 'Limited',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNA5FpGEF3Gh9KIJtkkIrF8lMYmSe3h04O6qk7Pg4WQlKYLA5M0ON1uXPnJFsDdIakiAPMSgq4dkgyuiyfzqVU1DWDZFqUtMOuXd-o2r4Ki04tdUl8Vo1UKTISFfDIiPtaB33B8Uc3LMOuBDd-E0yFv9EDGYPCNUqAVzR2uY5KYzbby0rlVLrDA8x6jcb9o2narvzPPFmDF9OUKfEFAgsSXXHszOZll23ZAtv3lJNe',
      details: 'Guaranteed 1 Holographic Foil Charm Inside'
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
        price: parseFloat(item.price) || 49.99,
        quantity: item.quantity || 1,
        color: item.color || 'Sunburst Yellow',
        colorHex: item.colorHex || '#FFE259',
        size: item.size || 'US Men 8 / Women 10',
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

  // 4. Financial Calculations
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

    const freeShippingThreshold = 50.0;
    const shipping =
      subtotal === 0 ||
      subtotal >= freeShippingThreshold ||
      (promo && promo.type === 'shipping')
        ? 0
        : 6.99;

    const taxableAmount = Math.max(0, subtotal - discount);
    const tax = taxableAmount > 0 ? taxableAmount * 0.08 : 0;
    const total = Math.max(0, taxableAmount + shipping + tax);

    return {
      itemCount,
      subtotal,
      discount,
      promoCode,
      promoDesc,
      shipping,
      freeShippingThreshold,
      tax,
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
        el.innerText = `$${totals.total.toFixed(2)}`;
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
      formattedDate: now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customer: {
        firstName: customerDetails.firstName || 'Alex',
        lastName: customerDetails.lastName || 'Rivera',
        email: customerDetails.email || 'alex.rivera@crockicks.studio',
        address: customerDetails.address || '742 Evergreen Terrace, Loft 4B',
        city: customerDetails.city || 'Brooklyn',
        zip: customerDetails.zip || '11201'
      },
      paymentMethod: customerDetails.paymentMethod || 'Credit Card (•••• 4242)',
      items: [...items],
      totals: { ...totals },
      status: 'Crafting in Brooklyn Atelier',
      estimatedDelivery: '2-3 Business Days'
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
