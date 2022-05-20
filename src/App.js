import "./App.css";
import React, { Component, useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function AppHooks() {
  const [personalInfo, setPersonalInfo] = useState([
    "John Treso",
    "Film Editor",
    "Random polite address 12345",
    "linkedin.com/in/yahoo",
    "832 434 3305",
    "sampleexampler@sampler.com",
  ]);
  const [educationInfo1, setEducationInfo1] = useState([
    "1990 - 1996",
    "Master's in Film & Audio Cutting",
    "School of Central Orlando",
    "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  ]);
  const [educationInfo2, setEducationInfo2] = useState([
    "1986 - 1996",
    "Bachelor's in Video Manipulation",
    "School of Central Orlando",
    "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  ]);
  const [workInfo1, setWorkInfo1] = useState([
    "2006 - 2022",
    "Edit Old Hollywood Films",
    "Old Hollywood Studio",
    "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  ]);
  const [workInfo2, setWorkInfo2] = useState([
    "1996 - 2006",
    "Cut Blockbusters",
    "Hidden Gem Studios",
    "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  ]);

  function handlePersonalInfo(e, index) {
    let newText = e.target.textContent;
    let newArray = [...personalInfo];
    newArray[index] = newText;
    setPersonalInfo(newArray);
  }
  function handleEducationInfo1(e, index) {
    let newText = e.target.textContent;
    let newArray = [...educationInfo1];
    newArray[index] = newText;
    setEducationInfo1(newArray);
  }
  function handleEducationInfo2(e, index) {
    let newText = e.target.textContent;
    let newArray = [...educationInfo2];
    newArray[index] = newText;
    setEducationInfo2(newArray);
  }
  function handleWorkInfo1(e, index) {
    let newText = e.target.textContent;
    let newArray = [...workInfo1];
    newArray[index] = newText;
    setWorkInfo1(newArray);
  }
  function handleWorkInfo2(e, index) {
    let newText = e.target.textContent;
    let newArray = [...workInfo2];
    newArray[index] = newText;
    setWorkInfo2(newArray);
  }

  function editText(e) {
    let text = e.target;
    if (text["contentEditable"] == "true") {
      text["contentEditable"] = "false";
      text.classList.toggle("edit-mode");
    } else if (text["contentEditable"] != "true") {
      text["contentEditable"] = "true";
      text.classList.toggle("edit-mode");
    }
  }

  const pdfFromHtml = () => {
    let HTML_Width = 600;
    let HTML_Height = 999.4;
    let top_left_margin = 0;
    html2canvas(document.querySelector(".resume")).then(function (canvas) {
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF({
        orientation: "p",
        unit: "px",
        hotfixes: ["px_scaling"],
        format: [HTML_Width, HTML_Height],
      });
      pdf.addImage(
        imgData,
        "PNG",
        top_left_margin,
        top_left_margin,
        HTML_Width,
        HTML_Height
      );
      pdf.save("Your_PDF_Name.pdf");
    });
  };

  return (
    <div className="app">
      <div className="resume">
        <PersonalInfo
          personalInfo={personalInfo}
          editText={editText}
          handlePersonalInfo={handlePersonalInfo}
        />
        <EducationInfo
          educationInfo1={educationInfo1}
          educationInfo2={educationInfo2}
          editText={editText}
          handleEducationInfo1={handleEducationInfo1}
          handleEducationInfo2={handleEducationInfo2}
        />
        <WorkInfo
          workInfo1={workInfo1}
          workInfo2={workInfo2}
          editText={editText}
          handleWorkInfo1={handleWorkInfo1}
          handleWorkInfo2={handleWorkInfo2}
        />
      </div>
      <button className="screenshot" onClick={pdfFromHtml}>
        Save PDF
      </button>
    </div>
  );
}
export default AppHooks;

//class based

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       personalInfo: [
//         "John Treso",
//         "Film Editor",
//         "Random polite address 12345",
//         "linkedin.com/in/yahoo",
//         "832 434 3305",
//         "sampleexampler@sampler.com",
//       ],
//       educationInfo1: [
//         "1990 - 1996",
//         "Master's in Film & Audio Cutting",
//         "School of Central Orlando",
//         "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//       ],
//       educationInfo2: [
//         "1986 - 1996",
//         "Bachelor's in Video Manipulation",
//         "School of Central Orlando",
//         "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//       ],
//       workInfo1: [
//         "2006 - 2022",
//         "Edit Old Hollywood Films",
//         "Old Hollywood Studio",
//         "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//       ],
//       workInfo2: [
//         "1996 - 2006",
//         "Cut Blockbusters",
//         "Hidden Gem Studios",
//         "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//       ],
//       toInsert: { text: "" },
//     };
//     this.updateText = this.updateText.bind(this);
//     this.editText = this.editText.bind(this);
//     this.pdfFromHtml = this.pdfFromHtml.bind(this);
//   }

//   pdfFromHtml = () => {
//     let HTML_Width = 600;
//     let HTML_Height = 999.4;
//     let top_left_margin = 0;
//     html2canvas(document.querySelector(".resume")).then(function (canvas) {
//       let imgData = canvas.toDataURL("image/jpeg", 1.0);
//       let pdf = new jsPDF({
//         orientation: "p",
//         unit: "px",
//         hotfixes: ["px_scaling"],
//         format: [HTML_Width, HTML_Height],
//       });
//       pdf.addImage(
//         imgData,
//         "PNG",
//         top_left_margin,
//         top_left_margin,
//         HTML_Width,
//         HTML_Height
//       );
//       pdf.save("Your_PDF_Name.pdf");
//     });
//   };

//   updateText(area, index, newText) {
//     let newArray = [...this.state[area]];
//     newArray[index] = newText;
//     if (area == "personalInfo") {
//       this.setState({
//         personalInfo: newArray,
//       });
//     }
//     if (area == "educationInfo1") {
//       this.setState({
//         educationInfo1: newArray,
//       });
//     }
//     if (area == "educationInfo2") {
//       this.setState({
//         educationInfo2: newArray,
//       });
//     }
//     if (area == "workInfo1") {
//       this.setState({
//         workInfo1: newArray,
//       });
//     }
//     if (area == "workInfo2") {
//       this.setState({
//         workInfo2: newArray,
//       });
//     }
//   }

//   editText(e, area, index) {
//     let text = e.target;
//     let textContent = e.target.textContent;
//     if (text["contentEditable"] == "true") {
//       text["contentEditable"] = "false";
//       text.classList.toggle("edit-mode");
//       this.updateText(area, index, textContent);
//     } else if (text["contentEditable"] != "true") {
//       text["contentEditable"] = "true";
//       text.classList.toggle("edit-mode");
//     }
//   }

//   render() {
//     const {
//       toInsert,
//       personalInfo,
//       educationInfo1,
//       educationInfo2,
//       workInfo1,
//       workInfo2,
//     } = this.state;
//     const { editText, updateText, pdfFromHtml } = this;
//     return (
//       <div className="app">
//         <div className="resume">
//           <PersonalInfo
//             toInsert={toInsert}
//             personalInfo={personalInfo}
//             editText={editText}
//           />
//           <EducationInfo
//             toInsert={toInsert}
//             educationInfo1={educationInfo1}
//             educationInfo2={educationInfo2}
//             editText={editText}
//           />
//           <WorkInfo
//             toInsert={toInsert}
//             workInfo1={workInfo1}
//             workInfo2={workInfo2}
//             editText={editText}
//           />
//         </div>
//         <button className="screenshot" onClick={pdfFromHtml}>
//           Save PDF
//         </button>
//       </div>
//     );
//   }
// }
