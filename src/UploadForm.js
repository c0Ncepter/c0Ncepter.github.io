import React, { useState, useEffect } from "react";
import {uploadFile} from "./services/upload.js"

export default function UploadForm(authToken) {
  const [file, setFile] = useState("");

  const handleSelectFile = (ev) => {
    if (ev && ev.target && ev.target.files) {
      setFile(ev.target.files[0]);
    }
  
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    uploadFile({authToken, file})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select File:
        <input
          type="file"
          name="file"
          onChange={(ev) => handleSelectFile(ev.target.value)}
        />
      </label>
      <input type="submit" value="Upload" />
    </form>
  );
}
