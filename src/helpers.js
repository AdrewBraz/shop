const formatPrice = (cents) => `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const rando = (arr) => arr[Math.floor(Math.random() * arr.length)];

const slugify = (text) => text.toString().toLowerCase()
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text

const getFunName = () => {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

  const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
};

const parseQuery = (name) => {
  const map = new Map([['catch of the day', 'fish'], ['beer card', 'beer'], ['king of the grill', 'meat']]);
  const q = map.get(name);
  return q;
};

const getList = (start, fn, end) => {
  const list = [];
  let interim = start;
  while (interim < end) {
    list.push(interim);
    interim = fn(interim, 1);
  }
  return list;
};

export {
  formatPrice, slugify, getFunName, parseQuery, rando, getList,
};
