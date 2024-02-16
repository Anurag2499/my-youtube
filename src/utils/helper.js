var nameList = [
  'Time',
  'Past',
  'Future',
  'Dev',
  'Fly',
  'Flying',
  'Soar',
  'Soaring',
  'Power',
  'Falling',
  'Fall',
  'Jump',
  'Cliff',
  'Mountain',
  'Rend',
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Gold',
  'Demon',
  'Demonic',
  'Panda',
  'Cat',
  'Kitty',
  'Kitten',
  'Zero',
  'Memory',
  'Trooper',
  'XX',
  'Bandit',
  'Fear',
  'Light',
  'Glow',
  'Tread',
  'Deep',
  'Deeper',
  'Deepest',
  'Mine',
  'Your',
  'Worst',
  'Enemy',
  'Hostile',
  'Force',
  'Video',
  'Game',
  'Donkey',
  'Mule',
  'Colt',
  'Cult',
  'Cultist',
  'Magnum',
  'Gun',
  'Assault',
  'Recon',
  'Trap',
  'Trapper',
  'Redeem',
  'Code',
  'Script',
  'Writer',
  'Near',
  'Close',
  'Open',
  'Cube',
  'Circle',
  'Geo',
  'Genome',
  'Germ',
  'Spaz',
  'Shot',
  'Echo',
  'Beta',
  'Alpha',
  'Gamma',
  'Omega',
  'Seal',
  'Squid',
  'Money',
  'Cash',
  'Lord',
  'King',
  'Duke',
  'Rest',
  'Fire',
  'Flame',
  'Morrow',
  'Break',
  'Breaker',
  'Numb',
  'Ice',
  'Cold',
  'Rotten',
  'Sick',
  'Sickly',
  'Janitor',
  'Camel',
  'Rooster',
  'Sand',
  'Desert',
  'Dessert',
  'Hurdle',
  'Racer',
  'Eraser',
  'Erase',
  'Big',
  'Small',
  'Short',
  'Tall',
  'Sith',
  'Bounty',
  'Hunter',
  'Cracked',
  'Broken',
  'Sad',
  'Happy',
  'Joy',
  'Joyful',
  'Crimson',
  'Destiny',
  'Deceit',
  'Lies',
  'Lie',
  'Honest',
  'Destined',
  'Bloxxer',
  'Hawk',
  'Eagle',
  'Hawker',
  'Walker',
  'Zombie',
  'Sarge',
  'Capt',
  'Captain',
  'Punch',
  'One',
  'Two',
  'Uno',
  'Slice',
  'Slash',
  'Melt',
  'Melted',
  'Melting',
  'Fell',
  'Wolf',
  'Hound',
  'Legacy',
  'Sharp',
  'Dead',
  'Mew',
  'Chuckle',
  'Bubba',
  'Bubble',
  'Sandwich',
  'Smasher',
  'Extreme',
  'Multi',
  'Universe',
  'Ultimate',
  'Death',
  'Ready',
  'Monkey',
  'Elevator',
  'Wrench',
  'Grease',
  'Head',
  'Theme',
  'Grand',
  'Cool',
  'Kid',
  'Boy',
  'Girl',
  'Vortex',
  'Paradox',
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomString(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const generateCount = (num) => {
  let mappings = {
    K: [1000, 999999],
    M: [1000000, 999999999],
    B: [1000000000, 999999999999],
    T: [1000000000000, 999999999999999],
  };

  let abs = Math.abs(num);

  for (var abbr in mappings) {
    if (abs >= mappings[abbr][0] && abs <= mappings[abbr][1]) {
      return Math.round(num / mappings[abbr][0]) + abbr;
    }
  }

  return num;
};

export const calculateDiff = (date1) => {
  const date = new Date();
  const dateTimeString = date.toISOString();
  const currentDate = new Date(dateTimeString);
  const publishDate = new Date(date1);

  const diffMilliseconds = Math.abs(currentDate - publishDate);
  const diffSeconds = diffMilliseconds / 1000;
  const diffMinutes = diffSeconds / 60;
  const diffHours = diffMinutes / 60;
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  let result;
  if (diffYears > 0) {
    result = `${diffYears} ${diffYears === 1 ? 'year' : 'years'}`;
  } else if (diffMonths > 0) {
    result = `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'}`;
  } else if (diffDays > 0) {
    result = `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
  } else if (diffHours > 0) {
    result = `${Math.floor(diffHours)} hours`;
  } else {
    result = `${Math.floor(diffMinutes)}) minutes`;
  }
  return result;
};
