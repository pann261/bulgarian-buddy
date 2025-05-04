const vocabulary = [
  {
    id: "play",
    level: 0,
    parent: null,
    english: "Play",
    bulgarian: "Играй",
    image: "images/play.png",
    audio: "audio/Играй.mp3",
    hasChildren: true
  },
  {
    id: "toys",
    level: 1,
    parent: "play",
    english: "Toys",
    bulgarian: "Играчки",
    image: "images/toys.png",
    audio: "audio/Играчки.mp3",
    hasChildren: true
  },
  {
    id: "doll",
    level: 2,
    parent: "toys",
    english: "Doll",
    bulgarian: "Кукла",
    image: "images/doll.png",
    audio: "audio/Кукла.mp3",
    hasChildren: false
  }
];