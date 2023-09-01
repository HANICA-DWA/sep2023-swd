function getFromDb() {
  return ["a", "b", "c"];
}

const [eerste, ...rest] = getFromDb();

console.log(eerste);
console.log(rest);
