function add(a, b = 3) {
  return a + b;
}
// const add = (a, b = 3) => a + b;

console.log("> add");
console.log(add(1, 2));
console.log(add(1));
console.log(add());

// ============================================

// function sum(...params) {
//   let result = 0;
//   // for (let i = 0; i < params.length; i++) {
//   //   result += params[i];
//   // }
//   for (const value of params) {
//     result += value;
//   }
//   //TODO: params.reduce() version
//   return result;
// }

// console.log("> sum");
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());
//
// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2]));
// console.log(sum([1]));
// console.log(sum([]));

// ============================================

// const list = [1, 2, 3];
// list = 10;
// list.push("hi");
// list[2] = 4;
// list = [5, 6];

// ============================================

// const html = {
//   name: "div",
//   attributes: {
//     className: "warning",
//     style: "border: 1px solid red"
//   },
//   content: "Hello from DWA"
// };

// function createTag(tagName, attributes, content) {
//   return { name: tagName, attributes, content };
// }

// const html = createTag(
//   "div",
//   {
//     className: "warning",
//     style: "border: 1px solid red"
//   },
//   "Hello from DWA"
// );
// console.log("> html");
// console.log(html);

// function showAttributes(tag) {
//   console.log(tag.attributes);
// }

// function showAttributes(tag) {
//   const attributes = tag.attributes;
//   console.log(attributes);
// }

// function showAttributes(tag) {
//   {attributes} = tag;
//   console.log(attributes);
// }

// function showAttributes({ attributes }) {
//   console.log(attributes);
// }

// function showAttributes({ name, attributes }) {
//   console.log(`attributes of ${name}: ${attributes}`);
// }

// console.log("> attributes");
// showAttributes(html);
