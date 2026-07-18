/* ==========================================================================
   CONFIGURACIÓN — edita solo esto para personalizar tu dedicatoria.
   "image" y "audio" son el nombre completo del archivo (con extensión).
   Ya tienes 6 fotos y 6 audios: pon aquí el nombre exacto de cada archivo
   dentro de assets/images y assets/audio (ej. "1.jpg", "1.mp3").
   ========================================================================== */
const CONFIG = {
  heroPhrase: "una carta escrita con el color exacto de tus ojos",

  chapters: [
    {
      image: "1.jpeg", audio: "1.mp3",
      accent: "#e8c14c",
      label: "Niña Bonita",
      title: "La primera vez que te miré de verdad",
      text: "Mi  niña desde cuando vi tus ojitos supe que no hay color más bonito que el de tus ojos. Eres mi niña bonita, la que se roba las miradas sin ni siquiera darse cuenta, y esta canción es lo más cerca que encontré de ese color que solo tú tienes.",
      songTitle: "Aquellos Ojos Verdes (Green Eyes)",
      songArtist: "Lisa Ono"
    },
    {
      image: "2.jpeg", audio: "2.mp3",
      accent: "#b6c76a",
      label: "Niña Loquita",
      title: "Cuando te ríes y se te arrugan un poco",
      text: "Eres mi niña loquita la que le pone color a cualquier día aburrido con tu actitud super linda. Aparte me gusta mucho tu sonrisa porque cuando te ríes se te llenan los ojos de esa miel que nadie más tiene, y yo solo quiero seguir viéndote reír así toda la vida.",
      songTitle: "Ojitos de Miel",
      songArtist: "T3R Elemento"
    },
    {
      image: "3.jpeg", audio: "3.mp3",
      accent: "#d9a86b",
      label: "Niña Chismosa",
      title: "La calma que llega cuando me miras así",
      text: "Eres mi niña chismosa, la que dice que no es pero si lo eres jajaaj  y me cuenta sus chismes  con todos los detalles y  con esa emoción que solo tú tienes. Y aun así, o tal vez justo por eso, no cambiaría nada de ti: te quiero exactamente como eres.",
      songTitle: "Just the Way You Are",
      songArtist: "Bruno Mars"
    },
    {
      image: "4.jpeg", audio: "4.mp3",
      accent: "#c9b23a",
      label: "Niña Enojona",
      title: "Cuando me miras y no hace falta hablar",
      text: "Mi niña enojona, la que se molesta rapidito pero se le pasa todavía más rápido. Hasta enojada tienes esa mirada que me hace querer quedarme, en un lugar donde solo tú y yo entendemos lo que pasa.",
      songTitle: "Donde Nadie Pueda Ir",
      songArtist: "Manuel Medrano"
    },
    {
      image: "5.jpeg", audio: "5.mp3",
      accent: "#9fbd6a",
      label: "Niña Posesiva",
      title: "Los días en que tus ojos se nublan un poco",
      text: "Mi niña posesiva, la que quiere saber dónde ando y con quién, y aunque a veces suene celosa yo sé que es porque me quieres cerca. Tus ojos, como girasoles, siempre buscan lo que aman, y yo siempre voy a estar ahí para que me encuentres.",
      songTitle: "Ojos de Girasol",
      songArtist: "Darviin"
    },
    {
      image: "6.jpeg", audio: "6.mp3",
      accent: "#e0c98a",
      label: "Mi Niña Hermosa",
      title: "La mirada que quiero seguir viendo siempre",
      text: "Isabel, mi niña hermosa, de todos los milagros pequeños que existen, tus ojos siguen siendo el que más quiero seguir descubriendo: hoy, mañana, y en todos los días que nos queden por mirar.",
      songTitle: "El Milagro de Tus Ojos",
      songArtist: "La Trova"
    }
  ]
};

/* ==========================================================================
   UTILIDADES
   ========================================================================== */
function eyePath(cx, cy, halfW, maxH, openness){
  const top = cy - maxH * openness;
  const bottom = cy + maxH * openness;
  const left = cx - halfW;
  const right = cx + halfW;
  return `M${left},${cy} Q${cx},${top} ${right},${cy} Q${cx},${bottom} ${left},${cy} Z`;
}

/* ==========================================================================
   1. CURSOR PERSONALIZADO
   ========================================================================== */
const cursorEl = document.getElementById('pupilCursor');
window.addEventListener('mousemove', (e) => {
  cursorEl.style.left = e.clientX + 'px';
  cursorEl.style.top = e.clientY + 'px';
});
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.photo-frame, .play-btn, .btn-open, .btn-replay, .np-eye')) {
    cursorEl.classList.add('dilate');
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.photo-frame, .play-btn, .btn-open, .btn-replay, .np-eye')) {
    cursorEl.classList.remove('dilate');
  }
});

/* ==========================================================================
   2. FONDO DE PARTÍCULAS (constelación suave)
   ========================================================================== */
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: "transparent" },
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#f2e9dc", "#e8c14c"] },
      opacity: { value: { min: 0.15, max: 0.6 } },
      size: { value: { min: 0.6, max: 2 } },
      links: {
        enable: true, distance: 130, color: "#f2e9dc", opacity: 0.08, width: 1
      },
      move: { enable: true, speed: 0.25, direction: "none", random: true, outModes: "out" }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.15 } } }
    },
    detectRetina: true
  });
}

/* ==========================================================================
   3. CORAZONES FLOTANTES — el detalle "owww"
   ========================================================================== */
(function injectHeartStyles(){
  const style = document.createElement('style');
  style.textContent = `
    .heart-particle{
      position: fixed;
      pointer-events: none;
      z-index: 70;
      opacity: 0;
      will-change: transform, opacity;
      filter: drop-shadow(0 0 6px rgba(0,0,0,.25));
    }
    @keyframes heartFloat{
      0%   { transform: translate(0,0) scale(.5) rotate(var(--rot,0deg)); opacity: 0; }
      12%  { opacity: 1; }
      100% { transform: translate(var(--dx,0px), -160px) scale(1) rotate(var(--rot,0deg)); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();

function makeHeartSVG(color){
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 32 29');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '16');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', 'M16 29 C 4 20 0 13 0 8 C 0 3 4 0 8 0 C 11.5 0 14 2 16 5 C 18 2 20.5 0 24 0 C 28 0 32 3 32 8 C 32 13 28 20 16 29 Z');
  path.setAttribute('fill', color);
  svg.appendChild(path);
  return svg;
}

function spawnHearts(x, y, count = 6, spread = 90){
  const palette = CONFIG.chapters.map(c => c.accent).concat(['#f2e9dc']);
  for (let i = 0; i < count; i++){
    const el = document.createElement('div');
    el.className = 'heart-particle';
    const color = palette[Math.floor(Math.random() * palette.length)];
    el.appendChild(makeHeartSVG(color));

    const dx = (Math.random() - 0.5) * spread;
    const rot = (Math.random() - 0.5) * 40;
    const duration = 1.6 + Math.random() * 1.2;
    const delay = Math.random() * 0.25;

    el.style.left = (x + (Math.random() - 0.5) * 20) + 'px';
    el.style.top = y + 'px';
    el.style.setProperty('--dx', dx.toFixed(0) + 'px');
    el.style.setProperty('--rot', rot.toFixed(0) + 'deg');
    el.style.animation = `heartFloat ${duration}s ease-out ${delay}s forwards`;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000 + 100);
  }
}

/* ==========================================================================
   4. HERO — el ojo que se abre (y parpadea de vez en cuando)
   ========================================================================== */
const heroState = { open: 0 };
const heroLid = document.getElementById('heroEyeLid');
const heroClipPath = document.getElementById('heroClipPath');

function renderHeroEye(){
  const d = eyePath(150, 80, 140, 62, heroState.open);
  heroLid.setAttribute('d', d);
  heroClipPath.setAttribute('d', d);
}
renderHeroEye();

function buildIrisTexture(){
  const svgNS = 'http://www.w3.org/2000/svg';
  const g = document.getElementById('irisTexture');
  const cx = 150, cy = 80;
  const colors = ['#a9853f', '#b6c76a', '#5c4620'];
  for (let i = 0; i < 56; i++){
    const angle = (i / 56) * Math.PI * 2;
    const rInner = 25 + Math.random() * 4;
    const rOuter = 48 + Math.random() * 10;
    const x1 = cx + rInner * Math.cos(angle);
    const y1 = cy + rInner * Math.sin(angle);
    const x2 = cx + rOuter * Math.cos(angle);
    const y2 = cy + rOuter * Math.sin(angle);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x1.toFixed(1));
    line.setAttribute('y1', y1.toFixed(1));
    line.setAttribute('x2', x2.toFixed(1));
    line.setAttribute('y2', y2.toFixed(1));
    line.setAttribute('stroke', colors[i % colors.length]);
    line.setAttribute('stroke-width', 0.6);
    line.setAttribute('opacity', (0.25 + Math.random() * 0.35).toFixed(2));
    g.appendChild(line);
  }
}
buildIrisTexture();

let blinkScheduled = false;
function scheduleBlink(){
  if (blinkScheduled) return;
  blinkScheduled = true;
  const delay = 3 + Math.random() * 4;
  gsap.delayedCall(delay, () => {
    gsap.to(heroState, {
      open: 0.05, duration: 0.09, ease: 'power1.in', onUpdate: renderHeroEye,
      onComplete: () => {
        gsap.to(heroState, {
          open: 1, duration: 0.16, ease: 'power1.out', onUpdate: renderHeroEye,
          onComplete: () => { blinkScheduled = false; scheduleBlink(); }
        });
      }
    });
  });
}

function typewrite(el, text, speed = 45){
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ==========================================================================
   5. CONSTRUCCIÓN DE CAPÍTULOS — marco con sello de ojito
   ========================================================================== */
const chaptersContainer = document.getElementById('chapters');

CONFIG.chapters.forEach((ch, idx) => {
  const section = document.createElement('section');
  section.className = 'chapter';
  section.dataset.index = idx;
  section.style.setProperty('--accent', ch.accent);

  section.innerHTML = `
    <div class="chapter-media">
      <div class="photo-frame" id="frame-${idx}">
        <img src="assets/images/${ch.image}" alt="${ch.label}" loading="lazy">
        <div class="sheen" id="sheen-${idx}"></div>
        <span class="frame-corner tl"></span>
        <span class="frame-corner br"></span>
        <div class="frame-badge">
          <svg viewBox="0 0 40 24">
            <path class="badge-sclera" d="M2,12 Q20,2 38,12 Q20,22 2,12 Z"/>
            <circle class="badge-iris" cx="20" cy="12" r="7"/>
            <circle class="badge-pupil" cx="20" cy="12" r="3"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="chapter-text">
      <p class="chapter-label">${ch.label}</p>
      <h2 class="chapter-title">${ch.title}</h2>
      <p class="chapter-body">${ch.text}</p>
      <div class="song-tag" data-index="${idx}">
        <button class="play-btn" data-index="${idx}" aria-label="Reproducir">►</button>
        <div class="song-meta">
          <span class="song-title">${ch.songTitle}</span>
          <span class="song-artist">${ch.songArtist}</span>
        </div>
        <div class="waveform"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>
  `;
  chaptersContainer.appendChild(section);
});

/* ==========================================================================
   6. AUDIO — Howler.js
   --------------------------------------------------------------------------
   Ahora el audio se controla SOLO con los botones de play (el de cada
   capítulo y el de la barra "sonando ahora"). Ya no se activa ni se
   detiene por el scroll: una canción sigue sonando aunque bajes la
   página, hasta que tú le des pausa o elijas otra canción.
   ========================================================================== */
// Ampliamos el pool de audio HTML5 de Howler. Por defecto el pool es
// compartido entre TODOS los Howl() de la página; con 6 canciones creadas
// a la vez (más los reintentos de "unlock" que hace el navegador antes de
// que interactúes) se agotaba y el navegador devolvía objetos de audio
// "posiblemente bloqueados" — de ahí el warning que viste en consola.
Howler.html5PoolSize = 20;

function showAudioError(msg){
  let box = document.getElementById('audioErrorToast');
  if (!box) {
    box = document.createElement('div');
    box.id = 'audioErrorToast';
    box.style.cssText = `
      position:fixed; left:50%; top:18px; transform:translateX(-50%);
      background:#3a0d0d; color:#f2e9dc; border:1px solid #c94b4b;
      padding:.7rem 1.1rem; border-radius:10px; font-family:sans-serif;
      font-size:.85rem; z-index:9999; max-width:88vw; text-align:center;
    `;
    document.body.appendChild(box);
  }
  box.textContent = msg;
  box.style.display = 'block';
  clearTimeout(box._hideTimer);
  box._hideTimer = setTimeout(() => { box.style.display = 'none'; }, 6000);
}

const howls = CONFIG.chapters.map((ch, idx) => {
  const h = new Howl({
    src: [`assets/audio/${ch.audio}`],
    html5: true,
    volume: 0,
    preload: false, // no cargues las 6 canciones al abrir la página; solo la que se pida
    onloaderror: (id, err) => {
      console.error(`No se pudo cargar el audio del capítulo ${idx + 1} (assets/audio/${ch.audio}):`, err);
      showAudioError(`No encontré o no pude leer "assets/audio/${ch.audio}" — revisa que el archivo exista con ese nombre exacto.`);
    },
    onplayerror: (id, err) => {
      console.error(`No se pudo reproducir el audio del capítulo ${idx + 1}:`, err);
      // Howler recomienda desbloquear en el próximo gesto del usuario si falla por autoplay
      h.once('unlock', () => { h.play(); });
    }
  });
  return h;
});

let activeIndex = null;
let audioUnlocked = false;

const nowPlaying = document.getElementById('nowPlaying');
const npChapter = document.getElementById('npChapter');
const npSong = document.getElementById('npSong');
const npToggle = document.getElementById('npToggle');

function unlockAudioContext(){
  if (Howler.ctx && Howler.ctx.state !== 'running') {
    Howler.ctx.resume();
  }
  audioUnlocked = true;
}

function setPlayingUI(idx, playing){
  document.querySelectorAll('.song-tag').forEach(t => t.classList.remove('playing'));
  document.querySelectorAll('.play-btn').forEach(b => { b.classList.remove('is-playing'); b.textContent = '►'; });

  if (idx === null) { nowPlaying.classList.remove('show', 'playing'); return; }

  const tag = document.querySelector(`.song-tag[data-index="${idx}"]`);
  const btn = document.querySelector(`.play-btn[data-index="${idx}"]`);
  if (playing) {
    tag && tag.classList.add('playing');
    if (btn) { btn.classList.add('is-playing'); btn.textContent = '❚❚'; }
  }

  const ch = CONFIG.chapters[idx];
  npChapter.textContent = ch.label;
  npSong.textContent = `${ch.songTitle} — ${ch.songArtist}`;
  nowPlaying.classList.add('show');
  nowPlaying.classList.toggle('playing', playing);
}

function fadeOutAndStop(idx){
  if (idx === null || idx === undefined) return;
  const h = howls[idx];
  h.fade(h.volume(), 0, 450);
  setTimeout(() => h.stop(), 460);
}

/* Reproduce el capítulo idx. Detiene (con fundido) cualquier otra
   canción que estuviera sonando, para que solo suene una a la vez. */
function playChapter(idx){
  unlockAudioContext();

  if (idx === activeIndex) {
    // Ya es la canción activa: si estaba en pausa, reanuda.
    const h = howls[idx];
    if (!h.playing()) {
      h.play();
      h.fade(0, 0.85, 400);
      setPlayingUI(idx, true);
    }
    return;
  }

  if (activeIndex !== null) fadeOutAndStop(activeIndex);

  const h = howls[idx];
  activeIndex = idx;
  setPlayingUI(idx, true);

  h.volume(0);
  // play() carga el archivo automáticamente si preload:false y aún no
  // se ha cargado (comportamiento nativo de Howler), y dispara 'play'
  // en cuanto el audio realmente arranca — ahí hacemos el fundido.
  h.play();
  h.once('play', () => {
    h.fade(0, 0.85, 600);
    const rect = nowPlaying.getBoundingClientRect();
    spawnHearts(rect.left + rect.width / 2, rect.top, 5, 70);
  });
}

function togglePause(idx){
  const h = howls[idx];
  if (idx !== activeIndex) { playChapter(idx); return; }
  if (h.playing()) {
    h.fade(h.volume(), 0, 300);
    setTimeout(() => h.pause(), 310);
    setPlayingUI(idx, false);
  } else {
    unlockAudioContext();
    h.play();
    h.fade(0, 0.85, 400);
    setPlayingUI(idx, true);
  }
}

document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const rect = btn.getBoundingClientRect();
    spawnHearts(rect.left + rect.width / 2, rect.top, 4, 50);
    togglePause(parseInt(btn.dataset.index, 10));
  });
});

npToggle.addEventListener('click', () => {
  if (activeIndex !== null) togglePause(activeIndex);
});

/* ==========================================================================
   7. ANIMACIONES DE SCROLL (GSAP) — revelado del marco + brillo de paso único
   (Esto es solo visual: ya no controla el audio en absoluto.)
   ========================================================================== */
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.chapter').forEach((sec, idx) => {
  const frame = document.getElementById(`frame-${idx}`);
  const sheen = document.getElementById(`sheen-${idx}`);

  gsap.fromTo(frame,
    { opacity: 0, y: 40, scale: 0.92 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 78%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.fromTo(sheen,
            { xPercent: -130 },
            { xPercent: 220, duration: 1.1, ease: "power2.inOut", delay: 0.15 }
          );
        }
      }
    }
  );

  gsap.from(sec.querySelector('.chapter-text'), {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: sec,
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  });
});

let outroHeartsFired = false;
const outroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !outroHeartsFired) {
      outroHeartsFired = true;
      const rect = entry.target.getBoundingClientRect();
      for (let i = 0; i < 5; i++){
        setTimeout(() => {
          spawnHearts(rect.left + Math.random() * rect.width, rect.bottom - 60, 4, 120);
        }, i * 220);
      }
    }
  });
}, { threshold: 0.4 });
outroObserver.observe(document.getElementById('outro'));

/* ==========================================================================
   8. BOTÓN "ABRIR LOS OJOS"
   ========================================================================== */
const btnOpen = document.getElementById('btnOpen');
const heroSub = document.getElementById('heroSub');

btnOpen.addEventListener('click', () => {
  unlockAudioContext();

  gsap.to(heroState, {
    open: 1,
    duration: 1.4,
    ease: "power2.out",
    onUpdate: renderHeroEye,
    onComplete: scheduleBlink
  });

  typewrite(heroSub, CONFIG.heroPhrase, 40);
  btnOpen.style.opacity = '0';
  btnOpen.style.pointerEvents = 'none';

  setTimeout(() => {
    document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' });
  }, 1600);
});

/* ==========================================================================
   9. REINICIAR
   ========================================================================== */
document.getElementById('btnReplay').addEventListener('click', () => {
  if (activeIndex !== null) fadeOutAndStop(activeIndex);
  activeIndex = null;
  setPlayingUI(null, false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});