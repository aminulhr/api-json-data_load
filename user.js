console.log("loading");
const loadUser = () => {
  fetch("https://jsonplaceholder.org/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
