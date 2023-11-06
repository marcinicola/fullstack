function printName() {
  let helloname = "Hello John";
  function inner() {
    setTimeout(function(){
      console.log(helloname);
    }, 1000);
  }
  return inner;
}
printName()();
