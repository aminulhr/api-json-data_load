console.log("loading");
const loadUser = () => {
  fetch("https://jsonplaceholder.org/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const loadUser2 = async () => {
  const user = await fetch("https://jsonplaceholder.org/users");
  const data = await user.json();
  console.log(data);
};
