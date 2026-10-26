/**
 * CrocKicks™ Motion Runtime Engine
 * 3D Parallax Tilt, Lerp Cursor Physics, Specular Reflections & Confetti
 */

(function () {
  // 1. Lerp Cursor Runtime
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mouse = { x: -100, y: -100 };
  let ringPos = { x: -100, y: -100 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (dot) {
      dot.style.left = `${mouse.x}px`;
      dot.style.top = `${mouse.y}px`;
    }
  });

  function renderCursor() {
    ringPos.x += (mouse.x - ringPos.x) * 0.16;
    ringPos.y += (mouse.y - ringPos.y) * 0.16;
    if (ring) {
      ring.style.left = `${ringPos.x}px`;
      ring.style.top = `${ringPos.y}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachCursorInteractions() {
    document
      .querySelectorAll(
        'button, a, input, select, .tilt-card, .charm-item, .color-dot, .charm-port'
      )
      .forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (ring) {
            ring.style.width = '52px';
            ring.style.height = '52px';
            ring.style.borderColor = 'rgba(180, 41, 7, 0.6)';
            ring.style.backgroundColor = 'rgba(180, 41, 7, 0.08)';
          }
        });
        el.addEventListener('mouseleave', () => {
          if (ring) {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'rgba(0, 0, 0, 0.4)';
            ring.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
          }
        });
      });
  }

  // 2. 3D Parallax Tilt with Specular Sheen
  function attachTiltEffects() {
    document.querySelectorAll('.tilt-card').forEach((card) => {
      // Ensure specular sheen element exists
      if (
        !card.querySelector('.specular-sheen') &&
        !card.querySelector('.specular-shine')
      ) {
        const sheen = document.createElement('div');
        sheen.className = 'specular-sheen';
        card.prepend(sheen);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -6.5;
        const rotY = ((x - centerX) / centerX) * 6.5;

        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform =
          'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // 3. Confetti Celebration Cannon
  function triggerConfettiBurst() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = [
      '#FE5D39',
      '#FFE087',
      '#B42907',
      '#000000',
      '#34D399',
      '#60A5FA',
      '#F472B6'
    ];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.4,
        r: Math.random() * 6 + 4,
        d: Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1) * 16,
        gravity: 0.35,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    let animationFrame;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.009;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }
    animate();
  }

  // 4. Global Modal Toggle Helper
  window.toggleModal = function (id) {
    if (window.CrocCart) window.CrocCart.playAcousticPop(490);
    const modal = document.getElementById(id);
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.triggerConfettiBurst = triggerConfettiBurst;
  window.attachTiltEffects = attachTiltEffects;
  window.attachCursorInteractions = attachCursorInteractions;

  document.addEventListener('DOMContentLoaded', () => {
    attachCursorInteractions();
    attachTiltEffects();
  });
})();
