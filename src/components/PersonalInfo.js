import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toInsert, personalInfo, editText } = this.props;
    return (
      <div className="personal-info">
        <h1
          className="name"
          onMouseEnter={(e) => editText(e, "personalInfo", 0)}
          onMouseLeave={(e) => editText(e, "personalInfo", 0)}
        >
          {personalInfo[0]}
        </h1>
        <h2
          className="job-title"
          onMouseEnter={(e) => editText(e, "personalInfo", 1)}
          onMouseLeave={(e) => editText(e, "personalInfo", 1)}
        >
          {personalInfo[1]}
        </h2>
        <div className="personal-info-group">
          <div className="address">
            <strong>Adress</strong>
            <p
              onMouseEnter={(e) => editText(e, "personalInfo", 2)}
              onMouseLeave={(e) => editText(e, "personalInfo", 2)}
            >
              {personalInfo[2]}
            </p>
          </div>
          <div className="linkedin">
            <strong>LinkedIn</strong>
            <p>
              <a
                onMouseEnter={(e) => editText(e, "personalInfo", 3)}
                onMouseLeave={(e) => editText(e, "personalInfo", 3)}
              >
                {personalInfo[3]}
              </a>
            </p>
          </div>
          <div className="phone">
            <strong>Phone</strong>
            <p
              onMouseEnter={(e) => editText(e, "personalInfo", 4)}
              onMouseLeave={(e) => editText(e, "personalInfo", 4)}
            >
              {personalInfo[4]}
            </p>
          </div>
          <div className="email">
            <strong>E-mail</strong>
            <p
              onMouseEnter={(e) => editText(e, "personalInfo", 5)}
              onMouseLeave={(e) => editText(e, "personalInfo", 5)}
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
