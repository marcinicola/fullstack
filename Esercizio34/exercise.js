function PrintAsyncName(callback, name) {
  const id = setInterval(() => {
    callback();
    clearInterval(id);
  }, 1000);
  setTimeout(() => {
    console.log(name);
  },2000);
}

function callback(){
    console.log("Hello");
}

PrintAsyncName(callback,"Name");