/* =========================================================
   Andrade & Nascimento — Sociedade de Advogados
   script.js  (Vanilla ES6)
   ========================================================= */
(function () {
  'use strict';

  var WHATSAPP = 'https://wa.me/5521975785413';
  var STAR = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.6 5.9 20.8 7.1 14l-5-4.8 6.9-.9z"/></svg>';
  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Data ---------- */
  var services = [
    { n: '01', title: 'Direito Previdenciário', desc: 'Aposentadorias, auxílio-doença, BPC/LOAS, salário-maternidade e revisões. Teve o benefício negado pelo INSS? A gente recorre e resolve.' },
    { n: '02', title: 'Direito Trabalhista', desc: 'Demissão sem justa causa, verbas rescisórias, horas extras, assédio e reconhecimento de vínculo. Seus direitos de trabalhador, garantidos.' },
    { n: '03', title: 'Direito de Família', desc: 'Divórcio, pensão alimentícia, guarda, inventário e partilha — conduzidos com sensibilidade e total discrição.' },
    { n: '04', title: 'Direito do Consumidor', desc: 'Cobranças indevidas, negativação, produtos e serviços com defeito e contratos abusivos. Você não está sozinho contra as empresas.' },
    { n: '05', title: 'Direito Cível', desc: 'Contratos, indenizações, cobranças e conflitos patrimoniais resolvidos com estratégia e segurança jurídica.' }
  ];

  var testimonials = [
    { text: 'Me ajudaram a conseguir minha aposentadoria depois de anos de negativa do INSS. Atendimento humano do início ao fim.', who: 'Cliente · Previdenciário' },
    { text: 'Fui demitida sem receber meus direitos e elas resolveram tudo com muita rapidez e clareza. Recomendo demais.', who: 'Cliente · Trabalhista' },
    { text: 'Explicaram cada etapa em uma linguagem que eu entendi. Me senti acolhida e segura o tempo todo.', who: 'Cliente · Direito de Família' }
  ];

  var faq = [
    { q: 'Quem tem direito a se aposentar pelo INSS?', a: 'Depende do tempo de contribuição, da idade e da categoria (urbano, rural ou especial). Analisamos o seu caso e dizemos exatamente o que falta para você se aposentar.' },
    { q: 'O INSS negou meu benefício. Ainda posso conseguir?', a: 'Sim. Muitas negativas são revertidas na via administrativa ou judicial. Reunimos os documentos certos e recorremos da decisão por você.' },
    { q: 'Dona de casa pode receber aposentadoria ou salário-maternidade?', a: 'Pode, em várias situações — inclusive contribuindo como facultativa de baixa renda. Avaliamos qual é o melhor caminho para o seu caso.' },
    { q: 'Fui demitido. Como sei se recebi tudo o que tinha direito?', a: 'Fazemos o cálculo das suas verbas rescisórias e verificamos horas extras, FGTS e demais direitos. Se houver diferença, buscamos o pagamento.' },
    { q: 'Quanto custa a primeira conversa?', a: 'A análise inicial do seu caso é feita pelo WhatsApp, sem compromisso. Você entende suas opções antes de decidir qualquer coisa.' }
  ];

  function el(id) { return document.getElementById(id); }

  /* ---------- Stars ---------- */
  document.querySelectorAll('.stars').forEach(function (s) {
    s.innerHTML = STAR + STAR + STAR + STAR + STAR;
  });

  /* ---------- Render services ---------- */
  (function () {
    var wrap = el('servicesList');
    if (!wrap) return;
    services.forEach(function (s, i) {
      var a = document.createElement('a');
      a.className = 'service reveal';
      a.href = WHATSAPP;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('data-reveal', 'left');
      a.setAttribute('data-reveal-delay', String(i * 130));
      a.innerHTML =
        '<span class="service__num">' + s.n + '</span>' +
        '<span class="service__body"><span class="service__title">' + s.title +
        '</span><span class="service__desc">' + s.desc + '</span></span>' +
        '<span class="service__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
      wrap.appendChild(a);
    });
  })();

  /* ---------- Render testimonials ---------- */
  (function () {
    var track = el('testiTrack');
    var dotsWrap = el('testiDots');
    if (!track || !dotsWrap) return;
    var index = 0, timer;

    testimonials.forEach(function (t, i) {
      var b = document.createElement('blockquote');
      b.className = 'testi__item' + (i === 0 ? ' is-active' : '');
      b.innerHTML = '<p>\u201C' + t.text + '\u201D</p><footer>' + t.who + '</footer>';
      track.appendChild(b);

      var d = document.createElement('button');
      d.className = 'testi__dot' + (i === 0 ? ' is-active' : '');
      d.type = 'button';
      d.setAttribute('aria-label', 'Ver depoimento ' + (i + 1));
      d.addEventListener('click', function () { go(i); restart(); });
      dotsWrap.appendChild(d);
    });

    var items = track.querySelectorAll('.testi__item');
    var dots = dotsWrap.querySelectorAll('.testi__dot');

    // keep stage tall enough for the tallest quote
    function sizeStage() {
      var max = 0;
      items.forEach(function (it) { max = Math.max(max, it.offsetHeight); });
      if (max) track.style.minHeight = max + 'px';
    }

    function go(i) {
      index = i;
      items.forEach(function (it, k) { it.classList.toggle('is-active', k === i); });
      dots.forEach(function (dt, k) { dt.classList.toggle('is-active', k === i); });
    }
    function next() { go((index + 1) % testimonials.length); }
    function restart() { clearInterval(timer); timer = setInterval(next, 6000); }

    window.addEventListener('load', sizeStage);
    window.addEventListener('resize', sizeStage);
    sizeStage();
    restart();
  })();

  /* ---------- Render FAQ ---------- */
  (function () {
    var wrap = el('faqList');
    if (!wrap) return;
    faq.forEach(function (f, i) {
      var item = document.createElement('div');
      item.className = 'faq-item' + (i === 0 ? ' is-open' : '');
      item.innerHTML =
        '<button class="faq-item__q" type="button" aria-expanded="' + (i === 0) + '">' +
        '<span>' + f.q + '</span>' +
        '<span class="faq-item__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
        '</button>' +
        '<div class="faq-item__a"><p>' + f.a + '</p></div>';
      var btn = item.querySelector('.faq-item__q');
      btn.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
      });
      wrap.appendChild(item);
    });
  })();

  /* ---------- Reveal on scroll ---------- */
  (function () {
    var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('is-shown'); });
      return;
    }
    function reveal(e) {
      var d = parseFloat(e.getAttribute('data-reveal-delay') || 0);
      setTimeout(function () { e.classList.add('is-shown'); }, d);
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { reveal(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { obs.observe(e); });
    // safety net
    setTimeout(function () { els.forEach(function (e) { e.classList.add('is-shown'); }); }, 2500);
  })();

  /* ---------- Counters ---------- */
  (function () {
    var wrap = el('counters');
    if (!wrap) return;
    var run = false;
    function animate() {
      if (run) return; run = true;
      wrap.querySelectorAll('[data-count]').forEach(function (node) {
        var target = parseInt(node.getAttribute('data-count'), 10);
        var suffix = node.getAttribute('data-suffix') || '';
        if (prefersReduced) { node.textContent = target + suffix; return; }
        var dur = 1600, start = performance.now();
        function tick(now) {
          var p = Math.min(1, (now - start) / dur);
          var e = 1 - Math.pow(1 - p, 3);
          node.textContent = Math.round(e * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
    if (!('IntersectionObserver' in window)) { animate(); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { animate(); obs.disconnect(); } });
    }, { threshold: 0.35 });
    obs.observe(wrap);
  })();

  /* ---------- Nav scroll state ---------- */
  (function () {
    var nav = el('nav');
    if (!nav) return;
    function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 24); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---------- Mobile menu ---------- */
  (function () {
    var menu = el('mobilemenu');
    var burger = el('burger');
    var close = el('menuClose');
    if (!menu || !burger) return;
    function open() { menu.hidden = false; document.body.style.overflow = 'hidden'; }
    function shut() { menu.hidden = true; document.body.style.overflow = ''; }
    burger.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
  })();

  /* ---------- Contact form ---------- */
  (function () {
    var form = el('contactForm');
    if (!form) return;
    var nome = el('f-nome'), whats = el('f-whats'), area = el('f-area'), msg = el('f-msg');
    var errNome = el('err-nome'), errWhats = el('err-whats');

    function formatPhone(v) {
      var d = (v || '').replace(/\D/g, '').slice(0, 11);
      if (d.length <= 2) return d.length ? '(' + d : '';
      if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
      return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
    }
    whats.addEventListener('input', function () {
      whats.value = formatPhone(whats.value);
      errWhats.textContent = '';
    });
    nome.addEventListener('input', function () { errNome.textContent = ''; });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      if (!nome.value.trim()) { errNome.textContent = 'Por favor, informe seu nome.'; ok = false; }
      if (whats.value.replace(/\D/g, '').length < 10) {
        errWhats.textContent = 'Informe um WhatsApp válido com DDD.'; ok = false;
      }
      if (!ok) return;
      var parts = ['Olá! Meu nome é ' + nome.value.trim() + '.',
        'Tenho interesse em ' + area.value + '.'];
      if (msg.value.trim()) parts.push(msg.value.trim());
      window.open(WHATSAPP + '?text=' + encodeURIComponent(parts.join(' ')), '_blank');
    });
  })();

})();
