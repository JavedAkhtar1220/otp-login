import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/AuthContext";
import { verifySchema } from "./schema";
import { UIButton, UIOTPInput } from "../../components";

import { VerifyFormContainer, VerifyWrapper } from "./ui";
import { Form, StyledHeading } from "../../styles";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifySchema),
    defaultValues: { otp: "" },
  });

  const { id } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    let code = data.otp;
    setDisabled(true);
    id?.confirm(code)
      .then((result) => {
        // User signed in successfully.
        alert("OTP Verified Successfully");
        setDisabled(false);
        navigate('/');
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
        setDisabled(false);
      });
  };

  return (
    <VerifyWrapper>
      <VerifyFormContainer>
        <StyledHeading>Verify OTP</StyledHeading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              mb: "1em",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <UIOTPInput control={control} name="otp" />
            {errors.otp && (
              <FormHelperText error>{errors.otp?.message}</FormHelperText>
            )}
          </Box>
          <UIButton
            type="submit"
            label="Verify"
            disabled={disabled}
            id="sign-in-button"
            fullWidth
          />
        </Form>
      </VerifyFormContainer>
    </VerifyWrapper>
  );
};

export default Verify;
