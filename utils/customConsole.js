import util from "util";

console.dev = (...args) => {
  if (process.env.status === "dev") {
    console.log(util.format(...args));
  }
};
