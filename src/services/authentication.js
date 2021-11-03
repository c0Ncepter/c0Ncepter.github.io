const getAuthToken = ({ username, password }) => {
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "password");
  urlencoded.append("username", username);
  urlencoded.append("password", password);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  console.log("Auth Requested");
  return fetch("https://mobile-1.moveitcloud.com/api/v1/token", requestOptions);
};

export { getAuthToken };
