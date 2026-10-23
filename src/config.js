// Everything personal lives here. Edit freely.
//
// Photos live in /public/photos. Each caption is engraved on the card's bottom
// plate, so keep it short (about 20 letters). Add `focus: [x, y]` (0–1) to a
// photo if the crop cuts off a face; the default is [0.5, 0.42].

export const config = {
  name: 'Chutki Di',
  subtitle: 'Happy Birthday · With Love',

  // Shown when the card is flipped (double-click or press F).
  message: [
    'Happy happy birthday!',
    'Wishing you a year full of laughter, good food, lazy mornings and everything your heart has been quietly hoping for.',
    'Stay exactly as wonderful as you are.',
  ],

  // Optional: put an mp3 at /public/song.mp3 and it plays after the first tap.
  song: '/song.mp3',

  photos: [
    { src: '/photos/1.jpg', caption: 'Happy Birthday' },
    { src: '/photos/2.jpg', caption: 'Forever Favourite' },
    { src: '/photos/3.jpg', caption: 'Keep Smiling' },
    { src: '/photos/4.jpg', caption: 'Our Brightest Flame' },
    { src: '/photos/5.jpg', caption: 'Lucky To Have You' },
    { src: '/photos/6.jpg', caption: 'Many More To Come' },
  ],
}
