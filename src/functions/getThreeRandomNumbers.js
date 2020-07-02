export default (min, max) => {
  const numbers = [];
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * (max + 1) + min);
    numbers.indexOf(number) === -1 ? numbers.push(number) : i--;
  }
  return numbers;
};
