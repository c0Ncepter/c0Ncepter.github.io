import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getAuthToken } from "./services/authentication";
import { getFoldersInfo } from "./services/foldersInfo"
import UploadForm from "./UploadForm";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState(null);
  const [folderID, setFolderID] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Get the authentication token for given Username and Passowrd

    getAuthToken({ username, password })
      .then((response) => response.json())
      .then((data) => {
        const token = data.access_token;
        setAuthToken(token);
        console.log("Token", token);
      })
      .catch(() => {});
  };

  const handleFolders = (ev) => {
    ev.preventDefault();

    // Get the Root folder ID with given authentication key
    getFoldersInfo({ authToken})
      .then((response) => response.json())
      .then((data) => {
        const folder = data.homeFolderID;
        setFolderID(folder);
        console.log("Folder ID", folder);
      })
      .catch(() => {});
  };

  

  return (
    <>
      {!authToken && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="name"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="name"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      )}
      {authToken && (
      <form onSubmit={handleFolders}>
        <label>
          Folder info
        </label>
        <input type="submit" value="Folder Info" />
      </form> 
)}
      {authToken && <UploadForm authToken={token}  />}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
