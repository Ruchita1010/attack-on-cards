import { v4 as uuidv4 } from 'uuid';
import shuffle from './shuffle';

const imgModules = import.meta.glob('../assets/characters/*.{jpg,png}', {
  eager: true,
  import: 'default',
});

const getCards = () => {
  const imgPaths = Object.values(imgModules);
  const cards = imgPaths.map((imgPath) => ({
    id: uuidv4(),
    imgPath,
    infoText: imgPath.split('/').pop().split('.')[0].replace('-', ' '),
  }));
  return shuffle(cards);
};

export default getCards;
