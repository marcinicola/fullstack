const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getUser(data){
    const savedUser = JSON.parse(localStorage.getItem(data))
    console.log("Saved User",savedUser);
} 
getUser("user");


/* const setLocal = () => {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
};

const setStorage = () => {
  const response = JSON.parse(user);
  localStorage.getItem("response");
};
setLocal(user);
setStorage(user);
 */

/* const getData = () => {
  const userJSON = localStorage.getItem("user");
  if (userJSON) {
    const data = JSON.parse(userJSON);
    return data;
  } else {
    return "no local storage";
  }
}; */
