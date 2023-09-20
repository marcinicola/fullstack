const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setLocal = () => {
  const userJson= JSON.stringify(user);
  localStorage.setItem("user",userJson)
}

setLocal(user)