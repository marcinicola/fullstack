const number = 15;
const newPromise = () => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(number);
    } else {
      reject(new Error("number minore di 10"));
    }
  });
};

newPromise()
.then((val) => console.log(val))
.catch((err)=> console.log(err))
