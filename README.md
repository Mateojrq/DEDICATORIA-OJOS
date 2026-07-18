# Seis miradas, seis canciones — dedicatoria web

Una página de una sola pieza: al hacer scroll se van "abriendo" seis ojos
(sus fotos), cada uno con su propia canción que suena sola mientras la miras,
con transición de fundido entre canciones. Al final hay un mensaje de cierre.

## 1. Estructura del proyecto

```
dedicatoria-ojos/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── 1.jpg   ← foto de sus ojos, capítulo 1
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── 5.jpg
│   │   └── 6.jpg
│   └── audio/
│       ├── 1.mp3   ← canción del capítulo 1 (misma pareja que 1.jpg)
│       ├── 2.mp3
│       ├── 3.mp3
│       ├── 4.mp3
│       ├── 5.mp3
│       └── 6.mp3
└── README.md
```

Ahora mismo `assets/images` tiene 6 imágenes de **muestra** (iris de colores
generados, solo para que abras la página y veas cómo funciona) y
`assets/audio` tiene 6 mp3 de **silencio** de 3 segundos, también de muestra.

### Para poner tus fotos y canciones reales
Solo reemplaza los archivos manteniendo **el mismo nombre**:
- Guarda su foto de ojos número 1 como `assets/images/1.jpg` (si tu foto es
  `.png` o `.jpeg`, cambia también la extensión en `js/script.js`, línea donde
  dice `assets/images/${ch.image}.jpg`).
- Guarda la canción 1 como `assets/audio/1.mp3`.
- Repite para 2, 3, 4, 5 y 6.

No hace falta tocar el HTML: las imágenes y audios se cargan automáticamente
por número.

## 2. Cómo abrirla en VS Code

1. Descomprime/copia esta carpeta completa a tu computadora.
2. Ábrela en VS Code (`Archivo > Abrir carpeta...`).
3. Instala la extensión **Live Server** (de Ritwick Dey) si no la tienes.
4. Click derecho sobre `index.html` → **"Open with Live Server"**.
   (Esto es importante: si abres el `index.html` con doble clic directamente
   desde el explorador de archivos, el navegador puede bloquear la carga de
   las imágenes y el audio por seguridad. Con Live Server no pasa eso.)
5. Necesitas conexión a internet la primera vez que se abre, porque las
   animaciones (GSAP), el audio (Howler.js), las partículas (tsParticles) y
   las tipografías se cargan desde internet (CDN). Una vez cargadas, no
   necesitas volver a instalar nada.

## 3. Cómo personalizar los textos

Abre `js/script.js` y edita el objeto `CONFIG` al principio del archivo.
Por cada capítulo puedes cambiar:

- `label`: el nombre del capítulo (ej. "Capítulo I — Mirada Ámbar").
- `title`: el título poético de esa foto.
- `text`: el párrafo de dedicatoria.
- `songTitle` / `songArtist`: el nombre de la canción y quién la canta.
- `accent`: el color que tiñe ese capítulo (dejé colores inspirados en
  tonos reales de ojos: ámbar, avellana, verde bosque, azul noche, gris
  tormenta y chocolate — puedes cambiarlos por cualquier color hexadecimal).
- `heroPhrase` (fuera de `chapters`): la frase que se escribe con efecto de
  máquina de escribir al abrir la página.

No necesitas saber programar para editar esto: son solo textos entre
comillas.

## 4. Detalles de la experiencia

- **Cursor propio**: una pupila que te sigue por la pantalla y se dilata
  al pasar sobre las fotos o los botones (en computadora; en celular se
  desactiva automáticamente).
- **El ojo que se abre**: cada foto está enmarcada con la forma de un ojo
  que se va abriendo con el scroll, como un párpado, hasta revelar la
  imagen completa.
- **La canción sigue tu mirada**: mientras haces scroll, la canción del
  capítulo que tienes en pantalla empieza a sonar sola, con un fundido
  suave, y la anterior se apaga. También puedes darle play/pausa manual
  con el botón redondo junto a cada canción.
- **Barra flotante**: abajo aparece una barra minimalista con el capítulo y
  canción que está sonando.
- **Fondo de constelación**: partículas suaves de fondo, como estrellas,
  que reaccionan un poco al mover el mouse.

## 5. Notas

- Los navegadores no permiten reproducir audio con sonido hasta que la
  persona hace un clic. Por eso la página empieza con el botón
  **"abrir los ojos"**: al presionarlo se desbloquea el audio y arranca
  la animación del ojo del hero.
- Si quieres cambiar el orden de los capítulos, simplemente reordena los
  bloques dentro de `chapters: [ ... ]` en `script.js` (no hace falta que
  el número de imagen/audio coincida con la posición en la lista, aunque
  para mantenerlo simple es más fácil si sí coincide).
