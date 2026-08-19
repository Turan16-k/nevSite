/* ═══════════════════════════════════════════════
   NevGenç — Tema Sistemi (Geometrik)
═══════════════════════════════════════════════ */

(function () {
  var THEME_KEY = 'ng-theme';
  var currentTheme = localStorage.getItem(THEME_KEY) || 'geometric';
  var animFrame = null;
  var particles = [];

  /* ──────────────────────────────────────────
     Tema Uygula
  ────────────────────────────────────────── */
  function setTheme(theme) {
    if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }

    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);

    var canvas = document.getElementById('themeCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.style.display = 'block';
    initGeometric(canvas, ctx);
  }

  /* ──────────────────────────────────────────
     İletişim Paneli Aç / Kapa
  ────────────────────────────────────────── */
  function toggleContactPanel() {
    var panel = document.getElementById('contactPanel');
    if (panel) panel.classList.toggle('open');
  }

  document.addEventListener('click', function (e) {
    var fab = document.getElementById('contactFab');
    if (fab && !fab.contains(e.target)) {
      var panel = document.getElementById('contactPanel');
      if (panel) panel.classList.remove('open');
    }
  });

  /* ──────────────────────────────────────────
     Canvas Boyutu
  ────────────────────────────────────────── */
  function resizeCanvas() {
    var canvas = document.getElementById('themeCanvas');
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', function () {
    resizeCanvas();
    var canvas = document.getElementById('themeCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    initGeometric(canvas, ctx);
  });

  /* ══════════════════════════════════════════
     GEOMETRİK — Noktalar & Bağlantı Ağları
  ══════════════════════════════════════════ */
  function initGeometric(canvas, ctx) {
    if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
    resizeCanvas();

    var count = window.innerWidth < 768 ? 55 : 100;
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 2 + 1.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var maxD = 135;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99,102,241,0.55)';
        ctx.fill();
      }

      for (var i = 0; i < particles.length - 1; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(99,102,241,' + ((1 - d / maxD) * 0.32) + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    }
    draw();
  }

  /* ── Global erişim ── */
  window.setTheme          = setTheme;
  window.toggleContactPanel = toggleContactPanel;

  /* ── Başlangıç ── */
  resizeCanvas();
  /* Eski 'default' / 'dark-red' / 'starry' kaydı varsa geometric'e düşür */
  if (currentTheme === 'default' || currentTheme === 'dark-red' || currentTheme === 'starry') {
    currentTheme = 'geometric';
  }
  setTheme(currentTheme);
})();
