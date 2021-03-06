import React, { useState, useEffect } from "react";
import * as xlsx from "xlsx";
import "./UploadCourse.css";
import { TextField } from "@mui/material";
import db from "../../Config/Firebase";
import {replaceSpecialCharecters} from '../../commonFunctions/idGenerate'
import { setDoc, doc ,getDoc} from "firebase/firestore";

function UploadCourse() {
  const [jsonFile, setJsonFile] = useState([]);
  const [load, setLoad] = useState({ upload: false, course: true });
  const [fileMessage, setFileMessage] = useState({
    message: "Select a file or drag here",
    color: "black",
  });
  const [btnBlock, setBtnBlock] = useState(true);
  const [course, setCourse] = useState("");
  const [fileName, setFileName] = useState("")
  const readUploadFile = (e) => {
    e.preventDefault();
    var x=e.target.value.replace(/^.*[\\\/]/, '')
    var allowedExtensions = /(\.xlsx|\.xls)$/i;
    if (!allowedExtensions.exec(e.target.value) && course == "") {
      e.target.value = "";
      return false;
    } else {
      setBtnBlock(false);
    }
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setJsonFile(json);
        if (
          json[0] &&
          json[0].hasOwnProperty("code") &&
          json[0].hasOwnProperty("course") &&
          json[0].hasOwnProperty("subject") &&
          json[0].hasOwnProperty("offeredBy")) {
          setFileName(x)
          setBtnBlock(false);
        } else {
          setBtnBlock(true);
          setFileMessage({
            message: "select xlsx file with column names code, offeredBy, subject,course",
            color: "red",
          });
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  const onHandleUpload = async () => {
    setBtnBlock(true)
    await setDoc(doc(db, "CoursesFor", replaceSpecialCharecters(course)), {
      courseName:course,
      arr:jsonFile
    }).then(()=>{
      alert("inserted");
      setBtnBlock(false)
    });
  };
  return (
    <div className="uploadContainer">
      <h2>Upload Course Details</h2>
      <p className="lead">
        Insert file in <span>Excel Format</span>
      </p>
      <div className="uploadBox">
        <TextField
          className="input-field form-control"
          id="outlined-basic"
          label="Course Name"
          variant="outlined"
          value={course}
          onChange={(e)=>{
            setCourse(e.target.value.toUpperCase())
          }}
        />
        <form id="file-upload-form" className="uploader">
          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" src="#" alt="Preview" className="hidden" />
            <div id="start">
              <i className="fa fa-download" aria-hidden="true"></i>
              <div style={{ color: fileMessage.color, fontWeight: 600 }}>
                {fileMessage.message}
              </div>
              <div style={{ color: "green", fontWeight: 600 }}>
                {fileName}
              </div>
              <span id="file-upload-btn" className="btn btn-primary">
                Select a file
              </span>
            </div>
            <div id="response" className="hidden">
              <div id="messages"></div>
              <progress className="progress" id="file-progress" value="0">
                <span>0</span>%
              </progress>
            </div>
          </label>
        </form>
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          accept=".xlsx,.xls"
          onChange={readUploadFile}
        />
        <button
          className="uploadBtn"
          onClick={onHandleUpload}
          disabled={btnBlock || course===""}
        >
          {load.upload ? "Loading..." : "Upload"}
        </button>
      </div>
    </div>
  );
}

export default UploadCourse;
