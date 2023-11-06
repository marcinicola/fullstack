const isLogged = true;
const newPromise = () => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("Utente non online"));
    }
  });
};

const userData = (number)=>{
    return new Promise((resolve,reject)=>{
        if(number > 0.5){
            resolve({nome:" John ", età: 24})
        }else{
            reject(new Error("Error 404"))
        }
    })

};

newPromise()
.then((val)=> userData(val))
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
