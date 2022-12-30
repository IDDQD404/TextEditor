import React, { useState, useEffect } from "react";
import "./App.css";
import Icon from "./components/icon/Icon";
// import TextField from "./components/textfield/TextField";
import "./components/textfield/TextField.scss";

const serverAddress = `http://localhost:4000`;

function CreateNewOne() {
  document.getElementById("areatext").value = "";
}

function SelectDocument() {
  document.getElementById("file-input").click();
}

function UploadDocument(params) {
  const file = document.getElementById("file-input").files[0];
  const formData = new FormData();
  formData.append("text", file);

  fetch(serverAddress, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("areatext").value = data.Text;
      // console.log(data.Text);
    })
    .catch((error) => {
      console.error(error);
    });
}

function DownloadDocument(data) {
  fetch(serverAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  fetch(serverAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.blob())
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([data.text]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + ".txt"
      );
      document.body.appendChild(link);
      link.click();
      document.getElementById("areatext").value = "";
    });
}

function App() {
  //
  const [FontSize, setFontSize] = useState(20);
  useEffect(() => {
    document.documentElement.style.setProperty("--font", `${FontSize}px`);
  }, [FontSize]);
  //
  return (
    <div className="App">
      <div className="IconsList">
        <div onClick={CreateNewOne}>
          <Icon type={"newOne"} />
        </div>

        <div
          onClick={() => {
            SelectDocument();
          }}
        >
          <Icon type={"uploadOne"} />
        </div>

        <div
          onClick={() => {
            DownloadDocument({
              text: document.getElementById("areatext").value,
            });
          }}
        >
          <Icon type={"downloadOne"} />
        </div>
        {/* Can use css processor and create zoom text */}

        {/* className="A"
        onClick={() => {
          document.documentElement.style.setProperty(
            "--font",
            Math.floor(Math.random() * 10)
          );
        }} */}

        <div
          onClick={() => {
            if (FontSize < 50) setFontSize(FontSize + 5);
          }}
        >
          <Icon type={"textZoomIn"} />
        </div>

        <div
          onClick={() => {
            if (FontSize > 5) setFontSize(FontSize - 5);
          }}
        >
          <Icon type={"textZoomOut"} />
        </div>

        {FontSize}
      </div>

      {/* <TextField /> */}
      <div className="TextField">
        <textarea
          id="areatext"
          type={"text"}
          placeholder={"Write here any text..."}
        ></textarea>
      </div>
      <input
        type="file"
        id="file-input"
        accept="text/*"
        style={{ display: "none" }}
        onChange={() => {
          UploadDocument();
        }}
      ></input>
    </div>
  );
}

export default App;
