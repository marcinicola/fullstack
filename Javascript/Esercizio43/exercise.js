const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setLocal = (data) => {
  try {
   const userJson = JSON.stringify(data)
   localStorage.setItem("user",userJson)
  } catch (error) {
    console.error(error)
  }
}

setLocal(user);

/* const setLocal = () => {
  const userJson= JSON.stringify(user);
  localStorage.setItem("user",userJson)
}

setLocal(user) */