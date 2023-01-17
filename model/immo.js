import data from './data.json' assert { type: 'json' };
let immos = data;

const getImmos = ({ query }) => {
  let immobilien = immos;
  const { city, priceLT } = query;
  if (city) immobilien = immobilien.filter((el) => el.city === city);
  if (priceLT) immobilien = immobilien.filter((el) => el.price < priceLT);
  return immobilien;
  // console.log(immobilien);
};

const getImmo = (id) => immos.find((el) => el.id === id);

const delImmos = () => (immos = []);

const delImmo = (id) => {
  const immo = immos.find((el) => el.id === id);
  if (!immo) return false;
  immos = immos.filter((el) => el.id !== id);
  return true;
};

const addImmo = (immo) => {
  immo.id = immos.length + 1;
  immos.push(immo);
  return immo;
};

const updateImmo = (id, immo) => {
  const index = immos.findIndex((el) => el.id === id);
  if (index === -1) return false;
  immos[index] = { ...immos[index], ...immo };
  return immos[index];
}

export { getImmos, getImmo, delImmos, delImmo, addImmo, updateImmo };
