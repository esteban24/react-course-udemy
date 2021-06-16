
const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman'
};

// const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

const useContext = ({name, age, key, zip = 1234543}) => {
  console.log(name, age, key, zip);
  return {
    keyName: key,
    years: age,
    latLng: {
      lat: 12.324512,
      lng: -3.4356
    }
  }
};

const {keyName, years, latLng:{lat, lng}} = useContext(person);

console.log(keyName, years, lat, lng);