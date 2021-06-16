// const characters = ['Goku', 'Vegeta', 'Trunks'];
// const [ , , p3 ] = characters
// console.log( p3 );

const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();

console.log(letters, numbers)

const useState = (value) => {
  return [value, (name) => {console.log(`Hello ${name}`)}];
}

const [name, setName] = useState('Goku');

console.log(name);
setName(name);
