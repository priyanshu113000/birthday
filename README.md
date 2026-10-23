# Happy Birthday, Chutki Di

ThreeUI's `DarkSoulsHoloCard` (The Ashen One) remade as a birthday card: her photos sit in the card's arched window, her name and a caption are engraved on the gold plates, and the wish appears when the card is flipped.

## Run it

```bash
npm install
npm run dev
```

## Make changes

- Text and captions: `src/config.js`. Captions are engraved on the bottom plate, so keep them short.
- Photos: `public/photos/1.jpg` … `6.jpg`.
- Music (optional): `public/song.mp3`, starts after the first tap.

## How it fits together

- `src/shaders/dark-souls-holo-card/DarkSoulsHoloCard.tsx` is ThreeUI's component. It loads the scene in an iframe.
- `public/landing-pages/birthday-card.html` is ThreeUI's scene document with the birthday changes (search for `Birthday edition`).
- `public/landing-pages/dark-souls-holo-card.html` is the original download, kept for reference.

The scene loads three.js from jsDelivr and its models, textures and fonts from ThreeUI's storage, so it needs an internet connection.
