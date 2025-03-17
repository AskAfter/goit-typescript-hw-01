type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    ...top,
    ...bottom,
  };
}

const top = { name: 'Petro', color: 'white' };
const bottom = { position: 20, weight: 99 };

const result = compare(top, bottom);
console.log(result);
