import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { personalInfo, editText, handlePersonalInfo } = this.props;
    return (
      <div className="personal-info">
        <h1
          className="name"
          onMouseEnter={(e) => editText(e)}
          onMouseLeave={(e) => {
            editText(e);
            handlePersonalInfo(e, 0);
          }}
        >
          {personalInfo[0]}
        </h1>
        <h2
          className="job-title"
          onMouseEnter={(e) => editText(e)}
          onMouseLeave={(e) => {
            editText(e);
            handlePersonalInfo(e, 1);
          }}
        >
          {personalInfo[1]}
        </h2>
        <div className="personal-info-group">
          <div className="address">
            <strong>Adress</strong>
            <p
              onMouseEnter={(e) => editText(e)}
              onMouseLeave={(e) => {
                editText(e);
                handlePersonalInfo(e, 2);
              }}
            >
              {personalInfo[2]}
            </p>
          </div>
          <div className="linkedin">
            <strong>LinkedIn</strong>
            <p>
              <a
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handlePersonalInfo(e, 3);
                }}
              >
                {personalInfo[3]}
              </a>
            </p>
          </div>
          <div className="phone">
            <strong>Phone</strong>
            <p
              onMouseEnter={(e) => editText(e)}
              onMouseLeave={(e) => {
                editText(e);
                handlePersonalInfo(e, 4);
              }}
            >
              {personalInfo[4]}
            </p>
          </div>
          <div className="email">
            <strong>E-mail</strong>
            <p
              onMouseEnter={(e) => editText(e)}
              onMouseLeave={(e) => {
                editText(e);
                handlePersonalInfo(e, 5);
              }}
            >
              {personalInfo[5]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
