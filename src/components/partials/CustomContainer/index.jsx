import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./styles.scss";

const CustomContainer = (props) => {
  var stylers = classNames({
    "custom-container": true,
    "horizontal-padding": props.horizontalPadding,
    "vertical-padding": props.verticalPadding,
  });
  return (
    <div className={stylers}>
      {props.children}

      {/* MY_TODO: Something*/}
    </div>
  );
};
CustomContainer.defaultProps = {
  verticalPadding: true,
  horizontalPadding: true,
};

CustomContainer.propTypes = {
  verticalPadding: PropTypes.bool,
  horizontalPadding: PropTypes.bool,
};
export default CustomContainer;
