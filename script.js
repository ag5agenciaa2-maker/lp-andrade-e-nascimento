/* =========================================================
   Andrade & Nascimento — Sociedade de Advogados
   Ultra Premium Rebuild — script.js
   ========================================================= */
(function(){
  'use strict';

  var WHATSAPP='https://wa.me/5521975785413';
  var WHATSAPP_MSG='Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20sobre%20';
  var STAR='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.6 5.9 20.8 7.1 14l-5-4.8 6.9-.9z"/></svg>';
  var prefersReduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(id){return document.getElementById(id)}

  /* ---------- Hero load ---------- */
  (function(){
    var hero=document.querySelector('.hero');
    if(!hero)return;
    function loaded(){hero.classList.add('is-loaded')}
    if(document.readyState==='complete')loaded();
    else window.addEventListener('load',loaded);
  })();

  /* ---------- Stars ---------- */
  document.querySelectorAll('.stars').forEach(function(s){
    s.innerHTML=STAR+STAR+STAR+STAR+STAR;
  });

  /* ---------- Services ---------- */
  /* ---------- Coverflow: acervo de vídeos ---------- */
  var reels=[
    {f:'video-dona-de-casa-pagar-inss-por-conta-propria',tag:'Previdenciário',t:'Dona de casa pode pagar o INSS por conta própria?',d:'0:32'},
    {f:'video-pensao-alimenticia-ostentacao-redes-sociais',tag:'Família',t:'Ostentação nas redes pode aumentar a pensão?',d:'0:58'},
    {f:'video-auxilio-doenca-depressao-inss',tag:'Previdenciário',t:'Depressão dá direito a auxílio-doença?',d:'0:34'},
    {f:'video-beneficio-loas-demora-analise-inss',tag:'Previdenciário',t:'O INSS está demorando para analisar seu LOAS?',d:'0:34'},
    {f:'video-protecao-de-bens-no-casamento-partilha',tag:'Família',t:'Como proteger seus bens no casamento',d:'0:32'},
    {f:'video-salario-maternidade-menor-de-idade',tag:'Previdenciário',t:'Menor de idade tem direito a salário-maternidade?',d:'0:32'},
    {f:'video-cobranca-indevida-conta-de-agua-danos-morais',tag:'Consumidor',t:'Cobrança indevida na conta de água gera dano moral?',d:'0:25'},
    {f:'video-auxilio-maternidade-uma-contribuicao-inss',tag:'Previdenciário',t:'Uma contribuição já dá direito ao auxílio-maternidade?',d:'0:18'}
  ];

  var services=[
    {n:'01',title:'Direito Previdenciário',desc:'Aposentadorias, auxílio-doença, BPC/LOAS, salário-maternidade e revisões. Teve o benefício negado pelo INSS? A gente recorre e resolve.'},
    {n:'02',title:'Direito Trabalhista',desc:'Demissão sem justa causa, verbas rescisórias, horas extras, assédio e reconhecimento de vínculo. Seus direitos de trabalhador, garantidos.'},
    {n:'03',title:'Direito de Família',desc:'Divórcio, pensão alimentícia, guarda, inventário e partilha — conduzidos com sensibilidade e total discrição.'},
    {n:'04',title:'Direito do Consumidor',desc:'Cobranças indevidas, negativação, produtos e serviços com defeito e contratos abusivos. Você não está sozinho contra as empresas.'},
    {n:'05',title:'Direito Cível',desc:'Contratos, indenizações, cobranças e conflitos patrimoniais resolvidos com estratégia e segurança jurídica.'}
  ];
  (function(){
    var wrap=el('servicesList');
    if(!wrap)return;
    services.forEach(function(s,i){
      var msg=WHATSAPP+'?text='+WHATSAPP_MSG+encodeURIComponent(s.title)+'.';
      var a=document.createElement('a');
      a.className='service reveal';
      a.href=msg;
      a.target='_blank';
      a.rel='noopener';
      a.setAttribute('data-reveal','left');
      a.setAttribute('data-reveal-delay',String(i*130));
      a.innerHTML='<span class="service__num">'+s.n+'</span><span class="service__body"><span class="service__title">'+s.title+'</span><span class="service__desc">'+s.desc+'</span></span><span class="service__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
      wrap.appendChild(a);
    });
  })();

  /* ---------- Testimonials (20 reais do Google) ---------- */
  var testimonials=[
    {text:'Advogada muito atenciosa. Tivemos êxito no processo graças à dedicação e competência da profissional. Indico a todos!',who:'Sara Melo · Google'},
    {text:'São profissionais maravilhosos! Tive um pequeno problema e, em menos de dois meses, elas resolveram tudo, sempre com uma comunicação clara, respeitosa e dispostas a esclarecer todas as dúvidas.',who:'Mauro Guedes · Google'},
    {text:'Melhor advogada. Excelente profissional, atenciosa, não abandona os clientes, sempre me responde quando tenho dúvidas. Indico demais!',who:'Larissa Helena · Google'},
    {text:'Ambiente muito agradável, ótimo atendimento, sempre com muito respeito. A doutora foi super simpática e conseguiu me auxiliar de forma clara e muito eficiente. Uma parceria para a vida toda.',who:'Luiz Vitor Santos · Google'},
    {text:'Espaço aconchegante. Consegui resolver meus problemos e ganhei um processo graças à Dra. Caroline e sua equipe. São atenciosos, competentes e explicam tudo com muita clareza e ética.',who:'Luciene Da Costa · Google'},
    {text:'Atenciosa, competente e muito dedicada! Ela me ajudou a resolver meu problema familiar. Sou muito grato! Indico para todos que conheço, uma excelente profissional!',who:'Isaias Henrique · Google'},
    {text:'Ótimo atendimento, super indico. Doutora super atenciosa e dedicada nas causas. Obrigada por tudo, causa ganha. Já tinha perdido as esperanças, mas graças à Dra. Caroline consegui essa vitória.',who:'Alessan Andrade · Google'},
    {text:'Ótima profissional, dedicada e atenciosa. Meu processo foi super rápido. Indicarei sempre os serviços para todos que conheço.',who:'Benjamin Almeida · Google'},
    {text:'Melhor advogada, super atenciosa e gentil. Sempre que preciso, tira minhas dúvidas. Ganhou minha causa, me auxilia até hoje. Super recomendo, maravilhosa.',who:'Yasmim Souza · Google'},
    {text:'Uma excelente advogada! Sou da Bahia e ela conseguiu me atender perfeitamente mesmo com a distância.',who:'Junior · Google'},
    {text:'Ótimo atendimento, super atenciosa. Resolveu meus problemos sem me dar dor de cabeça e muito rápido. Profissionalismo puro. Super recomendo! Pode confiar!',who:'Douglas Ferreira · Google'},
    {text:'Excelente profissional, muito atenciosa. Graças a ela ganhei minha causa!',who:'Mylene Lira Alves de Oliveira · Google'},
    {text:'Advogada excelente, atenciosa, competente e simpática. Me ajudou no meu processo e me aposentei.',who:'Ado Euclides · Google'},
    {text:'A melhor advogada! É de confiança, super indico.',who:'Bruna Antunes · Google'},
    {text:'Advogada excelente! Me ajudou a ganhar minha causa.',who:'Igor Costa · Google'},
    {text:'Excelente advogada! O trabalho dela é perfeito!',who:'Paola Rodrigues · Google'},
    {text:'Ótima profissional, super atenciosa e simpática! Super indico.',who:'Ellen Caroline · Google'},
    {text:'Sempre rápida e muito profissional na resolução dos processos. Indico seus serviços de olhos fechados!',who:'Ingrid Fernandes · Google'},
    {text:'Ótima profissional, me ajudou muito rápido com meu processo!',who:'CLEBER · Google'},
    {text:'Advogada maravilhosa! Uma excelente profissional!',who:'Lucas Vitor · Google'},
    {text:'Confiança e comprometimento. Só tenho a agradecer.',who:'Valquiria Silva · Google'},
    {text:'Excelente atendimento.',who:'Matheus Rodrigues · Google'}
  ];
  (function(){
    var rowA=el('testiRowA'),rowB=el('testiRowB');
    if(!rowA||!rowB)return;
    function initial(name){return name.trim().charAt(0).toUpperCase()}
    function card(t){
      var name=t.who.split('\u00B7')[0].trim();
      var d=document.createElement('article');
      d.className='testi__card';
      d.innerHTML=
        '<div class="testi__card-stars" aria-hidden="true">\u2605\u2605\u2605\u2605\u2605</div>'+
        '<p class="testi__card-text">\u201C'+t.text+'\u201D</p>'+
        '<div class="testi__card-by">'+
          '<span class="testi__card-avatar" aria-hidden="true">'+initial(name)+'</span>'+
          '<span class="testi__card-name">'+name+'<span>Avalia\u00E7\u00E3o verificada</span></span>'+
        '</div>';
      return d;
    }
    // duplica cada lista para o loop cont\u00EDnuo (translateX -50%)
    function fill(row,list){
      list.concat(list).forEach(function(t){row.appendChild(card(t))});
    }
    var half=Math.ceil(testimonials.length/2);
    fill(rowA,testimonials.slice(0,half));
    fill(rowB,testimonials.slice(half));
  })();

  /* ---------- FAQ ---------- */
  var faq=[
    {q:'Quem tem direito a se aposentar pelo INSS?',a:'Depende do tempo de contribuição, da idade e da categoria (urbano, rural ou especial). Analisamos o seu caso e dizemos exatamente o que falta para você se aposentar.'},
    {q:'O INSS negou meu benefício. Ainda posso conseguir?',a:'Sim. Muitas negativas são revertidas na via administrativa ou judicial. Reunimos os documentos certos e recorremos da decisão por você.'},
    {q:'Dona de casa pode receber aposentadoria ou salário-maternidade?',a:'Pode, em várias situações — inclusive contribuindo como facultativa de baixa renda. Avaliamos qual é o melhor caminho para o seu caso.'},
    {q:'Fui demitido. Como sei se recebi tudo o que tinha direito?',a:'Fazemos o cálculo das suas verbas rescisórias e verificamos horas extras, FGTS e demais direitos. Se houver diferença, buscamos o pagamento.'},
    {q:'Quanto custa a primeira conversa?',a:'A análise inicial do seu caso é feita pelo WhatsApp, sem compromisso. Você entende suas opções antes de decidir qualquer coisa.'}
  ];
  (function(){
    var nav=el('faqNav'),panel=el('faqPanel');
    if(!nav)return;
    var CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    var items=[];
    function pad(i){return(i<9?'0':'')+(i+1)}
    function renderPanel(i){
      if(!panel)return;
      var f=faq[i];
      panel.innerHTML=
        '<span class="faq__panel-num" aria-hidden="true">'+pad(i)+'</span>'+
        '<div class="faq__panel-content">'+
        '<p class="faq__panel-eyebrow">Resposta</p>'+
        '<h3 class="faq__panel-q">'+f.q+'</h3>'+
        '<p class="faq__panel-a">'+f.a+'</p>'+
        '</div>';
    }
    function select(i){
      items.forEach(function(it,k){
        var on=k===i;
        it.wrap.classList.toggle('is-active',on);
        it.btn.setAttribute('aria-expanded',String(on));
      });
      renderPanel(i);
    }
    faq.forEach(function(f,i){
      var wrap=document.createElement('div');
      wrap.className='faq-q'+(i===0?' is-active':'');
      var btn=document.createElement('button');
      btn.className='faq-q__btn';
      btn.type='button';
      btn.setAttribute('aria-expanded',String(i===0));
      btn.innerHTML=
        '<span class="faq-q__num">'+pad(i)+'</span>'+
        '<span class="faq-q__text">'+f.q+'</span>'+
        '<span class="faq-q__ico">'+CHEV+'</span>';
      var inline=document.createElement('div');
      inline.className='faq-q__inline';
      inline.innerHTML='<p>'+f.a+'</p>';
      wrap.appendChild(btn);
      wrap.appendChild(inline);
      btn.addEventListener('click',function(){
        // Mobile (accordion): permite fechar o item já aberto
        var isMobile=window.matchMedia('(max-width:900px)').matches;
        if(isMobile&&wrap.classList.contains('is-active')){
          wrap.classList.remove('is-active');
          btn.setAttribute('aria-expanded','false');
        }else{
          select(i);
        }
      });
      nav.appendChild(wrap);
      items.push({wrap:wrap,btn:btn});
    });
    renderPanel(0);
  })();

  /* ---------- Reveal on scroll ---------- */
  (function(){
    var els=Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if(prefersReduced||!('IntersectionObserver' in window)){
      els.forEach(function(e){e.classList.add('is-shown')});
      return;
    }
    function reveal(e){
      var d=parseFloat(e.getAttribute('data-reveal-delay')||0);
      setTimeout(function(){e.classList.add('is-shown')},d);
    }
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){reveal(en.target);obs.unobserve(en.target)}
      });
    },{threshold:0.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){obs.observe(e)});
    setTimeout(function(){els.forEach(function(e){e.classList.add('is-shown')})},2500);
  })();

  /* ---------- Counters ---------- */
  (function(){
    var wrap=el('counters');
    if(!wrap)return;
    var run=false;
    function animate(){
      if(run)return;run=true;
      wrap.querySelectorAll('[data-count]').forEach(function(node){
        var target=parseInt(node.getAttribute('data-count'),10);
        var suffix=node.getAttribute('data-suffix')||'';
        if(prefersReduced){node.textContent=target+suffix;return}
        var dur=1600,start=performance.now();
        function tick(now){
          var p=Math.min(1,(now-start)/dur);
          var e=1-Math.pow(1-p,3);
          node.textContent=Math.round(e*target)+suffix;
          if(p<1)requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
    if(!('IntersectionObserver' in window)){animate();return}
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){animate();obs.disconnect()}});
    },{threshold:0.35});
    obs.observe(wrap);
  })();

  /* ---------- Nav scroll ---------- */
  (function(){
    var nav=el('nav');
    if(!nav)return;
    function onScroll(){nav.classList.toggle('is-scrolled',window.scrollY>24)}
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  })();

  /* ---------- Mobile drawer ---------- */
  (function(){
    var menu=el('mobilemenu');
    var burger=el('burger');
    var close=el('menuClose');
    var overlay=el('drawerOverlay');
    if(!menu||!burger)return;
    function open(){
      menu.classList.add('is-open');
      if(overlay)overlay.classList.add('is-open');
      menu.setAttribute('aria-hidden','false');
      burger.setAttribute('aria-expanded','true');
      document.body.style.overflow='hidden';
    }
    function shut(){
      menu.classList.remove('is-open');
      if(overlay)overlay.classList.remove('is-open');
      menu.setAttribute('aria-hidden','true');
      burger.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
    }
    burger.addEventListener('click',open);
    if(close)close.addEventListener('click',shut);
    if(overlay)overlay.addEventListener('click',shut);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('is-open'))shut()});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut)});
  })();

  /* ---------- Contact form ---------- */
  (function(){
    var form=el('contactForm');
    if(!form)return;
    var nome=el('f-nome'),email=el('f-email'),whats=el('f-whats'),area=el('f-area'),msg=el('f-msg');
    var errNome=el('err-nome'),errEmail=el('err-email'),errWhats=el('err-whats');
    function formatPhone(v){
      var d=(v||'').replace(/\D/g,'').slice(0,11);
      if(d.length<=2)return d.length?'('+d:'';
      if(d.length<=6)return '('+d.slice(0,2)+') '+d.slice(2);
      if(d.length<=10)return '('+d.slice(0,2)+') '+d.slice(2,6)+'-'+d.slice(6);
      return '('+d.slice(0,2)+') '+d.slice(2,7)+'-'+d.slice(7);
    }
    function isValidEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())}
    whats.addEventListener('input',function(){whats.value=formatPhone(whats.value);errWhats.textContent=''});
    nome.addEventListener('input',function(){errNome.textContent=''});
    if(email)email.addEventListener('input',function(){errEmail.textContent=''});
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var ok=true;
      if(!nome.value.trim()){errNome.textContent='Por favor, informe seu nome.';ok=false}
      if(!email||!email.value.trim()||!isValidEmail(email.value)){if(errEmail)errEmail.textContent='Informe um e-mail válido.';ok=false}
      if(whats.value.replace(/\D/g,'').length<10){errWhats.textContent='Informe um WhatsApp válido com DDD.';ok=false}
      if(!ok)return;
      var message='Olá, me chamo '+nome.value.trim()+', vim através do site e gostaria de uma informação.\n\n'+
        '- E-mail: '+email.value.trim()+'\n'+
        '- Telefone: '+whats.value.trim()+'\n'+
        '- Assunto: '+area.value+'\n';
      if(msg.value.trim())message+='- Situação: '+msg.value.trim();
      window.open(WHATSAPP+'?text='+encodeURIComponent(message),'_blank');
    });
  })();

  /* ---------- Coverflow 3D (acervo de vídeos) ---------- */
  (function(){
    var track=el('cflowTrack');
    if(!track)return;
    var dotsWrap=el('cflowDots');
    var active=0;
    var isMobile=function(){return window.matchMedia('(max-width:900px)').matches};

    reels.forEach(function(r,i){
      var card=document.createElement('article');
      card.className='cflow__card';
      card.setAttribute('data-i',String(i));
      card.innerHTML=
        '<img class="cflow__poster" src="assets/posters/'+r.f+'.jpg" alt="'+r.t+'" loading="lazy">'+
        '<video class="cflow__video" src="assets/'+r.f+'.mp4" preload="none" playsinline muted></video>'+
        '<span class="cflow__shade"></span>'+
        '<span class="cflow__scrim"></span>'+
        '<span class="cflow__tag">'+r.tag+'</span>'+
        '<span class="cflow__time">'+r.d+'</span>'+
        '<div class="cflow__meta">'+
          '<p class="cflow__t">'+r.t+'</p>'+
          '<button type="button" class="cflow__play" aria-label="Assistir agora">'+
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Assistir agora'+
          '</button>'+
        '</div>'+
        /* Barra de controles (aparece só enquanto toca) */
        '<div class="cflow__controls">'+
          '<button type="button" class="cflow__toggle" aria-label="Pausar">'+
            '<svg class="cflow__ic-pause" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'+
            '<svg class="cflow__ic-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'+
          '</button>'+
          '<div class="cflow__track-bar" aria-label="Progresso do vídeo"><span class="cflow__fill"></span></div>'+
          '<span class="cflow__cur">'+r.d+'</span>'+
          '<button type="button" class="cflow__ctl cflow__sound" aria-label="Som">'+
            '<svg class="cflow__ic-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>'+
            '<svg class="cflow__ic-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>'+
          '</button>'+
          '<button type="button" class="cflow__ctl cflow__expand" aria-label="Expandir vídeo">'+
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/></svg>'+
          '</button>'+
        '</div>';
      track.appendChild(card);

      var dot=document.createElement('button');
      dot.type='button';dot.className='cflow__dot';
      dot.setAttribute('aria-label','Vídeo '+(i+1));
      dot.addEventListener('click',function(){go(i)});
      dotsWrap.appendChild(dot);
    });

    var cards=[].slice.call(track.querySelectorAll('.cflow__card'));
    var dots=[].slice.call(dotsWrap.querySelectorAll('.cflow__dot'));
    var N=cards.length;
    active=Math.floor(N/2);   /* abre com o leque dos dois lados (mais equilibrado) */

    function stopAll(){
      cards.forEach(function(c){
        var v=c.querySelector('.cflow__video');
        v.pause();v.muted=true;
        c.classList.remove('is-playing','is-paused');
        var fill=c.querySelector('.cflow__fill');
        if(fill)fill.style.width='0%';
      });
    }

    /* posiciona cada card em 3D conforme a distância ao centro */
    function layout(){
      var mobile=isMobile();
      /* mobile: leque mais fechado (vizinhos só espiam), 1 de cada lado */
      var VIS=mobile?1:3;
      var STEP=mobile?Math.min(window.innerWidth*.34,150):230;
      var ROT=mobile?15:32;
      var TZ=mobile?110:160, TZ2=mobile?50:70;
      var SCF=mobile?.16:.12;
      cards.forEach(function(c,n){
        c.classList.toggle('is-center',n===active);
        /* distância CIRCULAR: o array dá a volta, então as pontas
           reaparecem do outro lado — nunca "acaba" */
        var off=n-active;
        if(off>N/2)off-=N;
        if(off<-N/2)off+=N;
        /* Se o card "deu a volta" (saltou de uma ponta à outra), suprime a
           transição só nele para ele teleportar em vez de deslizar pela tela */
        var prev=c._off;
        var wrap=(prev!==undefined && Math.abs(off-prev)>VIS+1);
        if(wrap){c.style.transition='opacity .6s var(--ease)';}
        var abs=Math.abs(off);
        var x=off*STEP;
        var rot=off===0?0:(off<0?ROT:-ROT);
        var sc=off===0?1:Math.max(.7,1-abs*SCF);
        var tz=off===0?0:-TZ-abs*TZ2;
        c.style.transform='translate(-50%,-50%) translateX('+x+'px) translateZ('+tz+'px) rotateY('+rot+'deg) scale('+sc+')';
        c.style.opacity=abs>VIS?'0':'1';
        c.style.zIndex=String(50-abs);
        c.style.pointerEvents=abs>VIS?'none':'auto';
        if(wrap){void c.offsetWidth;c.style.transition='';}
        c._off=off;
      });
      dots.forEach(function(d,n){d.classList.toggle('is-on',n===active)});
    }

    function go(i){
      active=(i+N)%N;
      stopAll();
      layout();
    }

    function fmt(s){s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2)}
    function startVideo(card){
      var v=card.querySelector('.cflow__video');
      stopAll();
      card.classList.add('is-playing');
      card.classList.remove('is-paused');
      v.preload='auto';v.muted=false;
      var p=v.play();if(p&&p.catch)p.catch(function(){});
    }

    track.addEventListener('click',function(e){
      var card=e.target.closest('.cflow__card');
      if(!card)return;
      var i=+card.getAttribute('data-i');
      if(i!==active){go(i);return;}          /* clicar num lateral só centraliza */
      var v=card.querySelector('.cflow__video');

      /* barra de progresso: clicar salta para o ponto */
      var bar=e.target.closest('.cflow__track-bar');
      if(bar){
        var rect=bar.getBoundingClientRect();
        var ratio=(e.clientX-rect.left)/rect.width;
        if(v.duration)v.currentTime=Math.min(Math.max(ratio,0),1)*v.duration;
        return;
      }
      /* botão play/pause da barra — os controles seguem visíveis nos dois estados */
      if(e.target.closest('.cflow__toggle')){
        if(v.paused){v.muted=false;v.play();card.classList.remove('is-paused');}
        else{v.pause();card.classList.add('is-paused');}
        return;
      }
      /* som on/off */
      if(e.target.closest('.cflow__sound')){
        v.muted=!v.muted;
        card.classList.toggle('is-muted',v.muted);
        return;
      }
      /* expandir → abre o lightbox premium a partir do ponto atual */
      if(e.target.closest('.cflow__expand')){
        openBox(i,v.currentTime,!v.paused);
        v.pause();card.classList.add('is-paused');
        return;
      }
      /* botão grande "Assistir agora" */
      if(e.target.closest('.cflow__play')){startVideo(card);return;}
    });

    /* atualiza a barra + o tempo enquanto toca */
    track.addEventListener('timeupdate',function(e){
      var v=e.target;
      if(!v.classList||!v.classList.contains('cflow__video'))return;
      var card=v.closest('.cflow__card');
      var fill=card.querySelector('.cflow__fill');
      var cur=card.querySelector('.cflow__cur');
      if(v.duration){
        fill.style.width=(v.currentTime/v.duration*100)+'%';
        cur.textContent=fmt(v.currentTime);
      }
    },true);

    track.addEventListener('ended',function(e){
      if(e.target.classList.contains('cflow__video')){
        var card=e.target.closest('.cflow__card');
        card.classList.remove('is-playing','is-paused');
        card.querySelector('.cflow__fill').style.width='0%';
        card.querySelector('.cflow__cur').textContent=reels[+card.getAttribute('data-i')].d;
      }
    },true);

    el('cflowPrev').addEventListener('click',function(){go(active-1)});
    el('cflowNext').addEventListener('click',function(){go(active+1)});

    /* swipe */
    var x0=null;
    track.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
    track.addEventListener('touchend',function(e){
      if(x0===null)return;
      var dx=e.changedTouches[0].clientX-x0;
      if(Math.abs(dx)>50)go(active+(dx<0?1:-1));
      x0=null;
    },{passive:true});

    if('IntersectionObserver' in window){
      new IntersectionObserver(function(en){
        en.forEach(function(x){if(!x.isIntersecting)stopAll()});
      },{threshold:.15}).observe(track);
    }
    var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(layout,150)});

    /* ---- Lightbox premium (expandir) ---- */
    var box=el('vbox'),boxVid=el('vboxVideo');
    function openBox(i,at,playing){
      var r=reels[i];
      boxVid.src='assets/'+r.f+'.mp4';
      el('vboxTag').textContent=r.tag;
      box.classList.add('is-open');
      box.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      boxVid.currentTime=at||0;boxVid.muted=false;
      if(playing!==false){var p=boxVid.play();if(p&&p.catch)p.catch(function(){})}
    }
    function closeBox(){
      boxVid.pause();
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      setTimeout(function(){boxVid.removeAttribute('src');boxVid.load();},300);
    }
    if(box){
      el('vboxClose').addEventListener('click',closeBox);
      box.addEventListener('click',function(e){if(e.target.hasAttribute('data-vbox-close'))closeBox()});
      document.addEventListener('keydown',function(e){if(e.key==='Escape'&&box.classList.contains('is-open'))closeBox()});
    }

    layout();
  })();

  /* ---------- WhatsApp Premium Experience ---------- */
  (function () {
    var bubble = document.getElementById('wa-message-bubble');
    var typing = document.getElementById('wa-typing');
    var realMessage = document.getElementById('wa-real-message');
    var badge = document.getElementById('wa-notification');
    var closeBtn = document.getElementById('wa-close-btn');
    var mainBtn = document.getElementById('wa-main-btn');
    if (!bubble || !typing || !realMessage) return;

    // Mostrar o balão após 6 segundos
    setTimeout(function () {
      bubble.classList.add('show');
      // Simular digitação por 2.5 segundos antes de mostrar a mensagem
      setTimeout(function () {
        typing.style.display = 'none';
        realMessage.style.display = 'block';
        realMessage.style.opacity = '0';
        realMessage.style.transition = 'opacity .6s ease';
        requestAnimationFrame(function () {
          realMessage.style.opacity = '1';
        });
      }, 2500);
    }, 6000);

    // Fechar balão
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        bubble.classList.remove('show');
        // Mostrar notificação após fechar para manter engajamento
        if (badge) {
          setTimeout(function () {
            badge.classList.add('show');
          }, 2000);
        }
      });
    }

    // Ao clicar no botão, remove tudo
    if (mainBtn) {
      mainBtn.addEventListener('click', function () {
        bubble.classList.remove('show');
        if (badge) badge.classList.remove('show');
      });
    }
  })();

})();
