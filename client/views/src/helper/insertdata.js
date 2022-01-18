export const insertData = (user) => {
  return fetch(`http://localhost:5000/api/insert`, {
    method: "POST",
    body: user,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
