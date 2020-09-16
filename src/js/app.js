import "regenerator-runtime";
// import "core-js";
import("js/sub");
setTimeout(() => {
  import("@scss/app");
}, 2000);

//import jQuery from "jquery";

const init = async () => {
  console.log("this is main");
  await asyncFc();
  jQuery();
  utils.log("hello from app.js");
};
async function asyncFc() {
  console.log([1, 2, 3].includes(0));
}
init();
