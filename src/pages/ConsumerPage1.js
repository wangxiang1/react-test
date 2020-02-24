import React, { Component } from "react";
import { ThemeConsumer } from "../themeContext";

class ConsumerPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeConsumer>
        {
          value => (
            <div className="bordered">
              <h3 style={{color: value.themeColor}}>Consumer Page1</h3>
            </div>
          )
        }
      </ThemeConsumer>
    );
  }
}

export default ConsumerPage1;
