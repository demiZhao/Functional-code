import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

const withCounter = (fn) => {
  let counter = 0;
  return (...args) => {
    console.log(`it is called ${++counter}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const hocAdd = withCounter(add);
console.log(hocAdd(1, 2));
console.log(hocAdd(4, 5));
