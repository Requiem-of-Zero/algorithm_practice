// ! Useful memoize function
// * Higher Order Function
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if(args.toString() in cache){
      return cache[args.toString()]
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  }
}