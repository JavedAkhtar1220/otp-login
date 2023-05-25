import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./ui";

const UIButton = ({ label, disabled, ...rest }) => {
  return (
    <StyledButton variant="contained" disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};

UIButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default UIButton;
