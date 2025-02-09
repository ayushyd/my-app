import React, { Component } from "react";

export default class About extends Component {
  render() {
    // Define different styles based on the content type
    let textAnalysisStyle = {
      color: this.props.mode === "dark" ? "white" : "red",
      backgroundColor: this.props.mode === "dark" ? "#333" : "#ffe6e6",
      border: "2px solid red",
    };

    let freeToUseStyle = {
      color: this.props.mode === "dark" ? "white" : "green",
      backgroundColor: this.props.mode === "dark" ? "#222" : "#e6ffe6",
      border: "2px solid green",
    };

    let compatibilityStyle = {
      color: this.props.mode === "dark" ? "white" : "blue",
      backgroundColor: this.props.mode === "dark" ? "#111" : "#e6e6ff",
      border: "2px solid blue",
    };

    return (
      <div className="container">
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={textAnalysisStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={textAnalysisStyle}>
                This project is designed to analyze text efficiently. It
                provides various features like word count, character count, and
                text transformations to help users process their text easily.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={freeToUseStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={freeToUseStyle}>
                Built using modern technologies like React, this project is
                completely free to use and provides a simple, user-friendly
                interface for text analysis.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={compatibilityStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatibility
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={compatibilityStyle}>
                This project is designed to work smoothly across all modern web
                browsers, ensuring accessibility and usability for all users.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
