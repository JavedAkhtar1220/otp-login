import React from "react";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { StyledInput } from "./ui";

const OTPInput = ({ name, control }) => {
  const { control: fallbackControl } = useForm();

  return (
    <Controller
      name={name}
      control={control == null ? fallbackControl : control}
      render={({ field }) => (
        <OtpInput
          {...field}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <StyledInput {...props} />}
        />
      )}
    />
  );
};

OTPInput.propTypes = {
    name: PropTypes.string,
    control: PropTypes.object,
  };

export default OTPInput;
