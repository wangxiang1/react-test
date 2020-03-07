import React, { Component } from "react";
import { RouterConsumer, RouterProvider } from "./RouterContext";
// import matchPath from './matchPath';

export default class Route extends Component {
  render() {
    return (
      <RouterConsumer>
        {context => {
          const { path, component, children, render } = this.props;
          const location = this.props.location || context.location;
          const match = path === context.location.pathname;

          const props = {
            ...context,
            location,
            match
          };
          // match 渲染顺序 children > component > render
          // no match 渲染children或者null
          return (
            <RouterProvider value={props}>
              {
                match
                  ? ( children
                      ? typeof children === "function"
                        ? children(this.props)
                        : children
                      : component
                      ? React.createElement(component, this.props)
                      : render
                      ? render(this.props)
                      : null
                  ) : (
                    typeof children === "function" ? children(this.props) : null
                  )
              }
            </RouterProvider>
          )
        }}
      </RouterConsumer>
    );
  }
}
