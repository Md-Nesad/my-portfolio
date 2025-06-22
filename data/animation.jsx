export const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //each element will render after 03 sec.
    },
  },
}

export const textItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const TEXTS = [
  'W',
  'We',
  'Wel',
  'Welc',
  'Welco',
  'Welcom',
  'Welcome',
  'Welcome to',
  'Welcome to m',
  'Welcome to my',
  'Welcome to my p',
  'Welcome to my po',
  'Welcome to my por',
  'Welcome to my port',
  'Welcome to my portf',
  'Welcome to my portfo',
  'Welcome to my portfol',
  'Welcome to my portfolio',
  'Welcome to my portfolio.',
]
