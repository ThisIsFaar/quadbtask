export const getData = () => {
  return fetch(`http://localhost:5000/api/details/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
