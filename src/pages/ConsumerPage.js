import React, { Component, Fragment } from "react";
import { ThemeConsumer } from "../themeContext";
import ConsumerPage1 from "./ConsumerPage1";

class ConsumerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeConsumer>
        {value => (
          <div className="bordered">
            <h2 style={{ color: value.themeColor }}>Consumer Page</h2>
            <ConsumerPage1 />
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default ConsumerPage;
