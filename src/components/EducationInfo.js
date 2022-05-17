import React, { Component } from "react";
import school from "../img/school.png";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toInsert, educationInfo1, educationInfo2, editText } = this.props;
    return (
      <div className="education-info">
        <div className="education-title-area">
          <img src={school} alt="ed"></img>
          <h2>Education</h2>
        </div>
        <div className="education-content">
          <div className="education-1">
            <div
              className="education-year-column"
              onMouseEnter={(e) => editText(e, "educationInfo1", 0)}
              onMouseLeave={(e) => editText(e, "educationInfo1", 0)}
            >
              {educationInfo1[0]}
            </div>
            <div className="education-info-column">
              <h4
                onMouseEnter={(e) => editText(e, "educationInfo1", 1)}
                onMouseLeave={(e) => editText(e, "educationInfo1", 1)}
              >
                {educationInfo1[1]}
              </h4>
              <p
                onMouseEnter={(e) => editText(e, "educationInfo1", 2)}
                onMouseLeave={(e) => editText(e, "educationInfo1", 2)}
              >
                {educationInfo1[2]}
              </p>
              <p
                onMouseEnter={(e) => editText(e, "educationInfo1", 3)}
                onMouseLeave={(e) => editText(e, "educationInfo1", 3)}
              >
                {educationInfo1[3]}
              </p>
            </div>
          </div>
          <div className="education-2">
            <div
              className="education-year-column"
              onMouseEnter={(e) => editText(e, "educationInfo2", 0)}
              onMouseLeave={(e) => editText(e, "educationInfo2", 0)}
            >
              {educationInfo2[0]}
            </div>
            <div className="education-info-column">
              <h4
                onMouseEnter={(e) => editText(e, "educationInfo2", 1)}
                onMouseLeave={(e) => editText(e, "educationInfo2", 1)}
              >
                {educationInfo2[1]}
              </h4>
              <p
                onMouseEnter={(e) => editText(e, "educationInfo2", 2)}
                onMouseLeave={(e) => editText(e, "educationInfo2", 2)}
              >
                {educationInfo2[2]}
              </p>
              <p
                onMouseEnter={(e) => editText(e, "educationInfo2", 3)}
                onMouseLeave={(e) => editText(e, "educationInfo2", 3)}
              >
                {educationInfo2[3]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
