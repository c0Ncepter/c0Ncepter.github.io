const getFoldersInfo = (authToken) =>{
let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${authToken}` )


let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
console.log("Folders Requested");
return fetch("https://mobile-1.moveitcloud.com/api/v1/users/self", requestOptions);

};

export { getFoldersInfo };