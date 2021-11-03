const uploadFile = (authToken, fileData) => {
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${authToken}` )
  myHeaders.append("Content-Type", "multipart/form-data");
  
  let formdata = new FormData();
  formdata.append("file", fileData.files[0]);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch("https://mobile-1.moveitcloud.com/api/v1/folders/810860766/files", requestOptions);
};

export { uploadFile };
