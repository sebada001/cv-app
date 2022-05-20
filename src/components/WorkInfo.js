import React, { Component } from "react";
import work from "../img/briefcase.png";

class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleWorkInfo1, handleWorkInfo2, workInfo1, workInfo2, editText } =
      this.props;
    return (
      <div className="work-info">
        <div className="work-title-area">
          <img src={work} alt="wk"></img>
          <h2>Work Experience</h2>
        </div>
        <div className="work-content">
          <div className="work-1">
            <div
              className="work-year-column"
              onMouseEnter={(e) => editText(e)}
              onMouseLeave={(e) => {
                editText(e);
                handleWorkInfo1(e, 0);
              }}
            >
              {workInfo1[0]}
            </div>
            <div className="work-info-column">
              <h4
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo1(e, 1);
                }}
              >
                {workInfo1[1]}
              </h4>
              <p
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo1(e, 2);
                }}
              >
                {workInfo1[2]}
              </p>
              <p
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo1(e, 3);
                }}
              >
                {workInfo1[3]}
              </p>
            </div>
          </div>
          <div className="work-2">
            <div
              className="work-year-column"
              onMouseEnter={(e) => editText(e)}
              onMouseLeave={(e) => {
                editText(e);
                handleWorkInfo2(e, 0);
              }}
            >
              {workInfo2[0]}
            </div>
            <div className="work-info-column">
              <h4
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo2(e, 1);
                }}
              >
                {workInfo2[1]}
              </h4>
              <p
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo2(e, 2);
                }}
              >
                {workInfo2[2]}
              </p>
              <p
                onMouseEnter={(e) => editText(e)}
                onMouseLeave={(e) => {
                  editText(e);
                  handleWorkInfo2(e, 3);
                }}
              >
                {workInfo2[3]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkInfo;
