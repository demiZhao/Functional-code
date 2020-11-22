import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello world!</h1>
`;
//HOC
const withCounter = (fn) => {
  let counter = 0;
  return (...args) => {
    //console.log(`it is called ${++counter}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const hocAdd = withCounter(add);
//console.log(hocAdd(1, 2));
//console.log(hocAdd(4, 5));

//Immutable
const push = (value) => (arr) => [...arr, value];
const arr = [1, 2, 3];
const arr1 = push(4)(arr);
// console.log(arr1);
// console.log(arr);
// console.log(arr === arr1);

//Curry
const curryAdd = (x) => (y) => x + y;
//console.log(curryAdd(3)(6));
//console.log(curryAdd(3)(10));

//Partial application
const fetchData = (url) => (cb) => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => cb(data));
};

fetchData(`https://swapi.dev/api/people/`)((data) => {
  // data.results.map((item) => console.log(item.name));
});

//Composition || Pipe
const scream = (str) => str.toUpperCase();
const exclaim = (str) => `${str} !`;
const repeat = (str) => `${str} ${str}`;

const pipe = (...fns) => (x) => {
  return fns.reduce((acc, fn) => fn(acc), x);
};
const compose = pipe(scream, exclaim, repeat);
//console.log(pipe(scream, exclaim, repeat)("hello world"));

const map1 = (cb) => (arr) => arr.map(cb);

const data = ["hello world", "Make america great", "covid-19 cure"];

console.log(map1(compose)(data));
