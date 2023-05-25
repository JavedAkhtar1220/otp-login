import React from "react";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import PhoneInput from "react-phone-input-2";

import { CountryListWrapper } from "./ui";

const ReactPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

const CountryListInput = ({ label, name, control, errorMessage, ...rest }) => {
  const { control: fallbackControl } = useForm();

  return (
    <CountryListWrapper error={errorMessage}>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({ field: { ref, ...field } }) => (
          <ReactPhoneInput
            {...field}
            country={"pk"}
            inputProps={{
              ref,
            }}
            enableSearch={true}
            specialLabel={label}
            {...rest}
          />
        )}
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </CountryListWrapper>
  );
};

CountryListInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  control: PropTypes.object,
  errorMessage: PropTypes.string,
};

export default CountryListInput;
