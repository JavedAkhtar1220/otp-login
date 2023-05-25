import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Box } from "@mui/material";

import { loginSchema } from "./schema";
import { UIButton, UIPhoneInput } from "../../components";
import { auth, } from "../../config/firebase";

import { LoginFormContainer, LoginWrapper } from "./ui";
import { Form, StyledHeading } from "../../styles";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { name: "", phone: "", visit_date: "", purpose: "" },
  });
  const {updateId} = useContext(AuthContext)
  const navigate = useNavigate();

  const [disabled,setDisabled] = useState(false);


  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log('response', response);
      }
    }, auth);
  }

  const onSubmit = (data) => {

    let phoneNo = `+${data.phone}`
    
    setDisabled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNo, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Save the verification ID.
      
      alert("OTP sent successfully"); 
      window.confirmationResult= confirmationResult;
      updateId(confirmationResult)
      navigate('/verify');
    setDisabled(false);

    })
    .catch((error) => {
      setDisabled(false);
      alert(error);
    });
  }

  return (
    <LoginWrapper>
      <LoginFormContainer>
        <StyledHeading>OTP Login</StyledHeading>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mb: "1em" }}>
          <UIPhoneInput
            control={control}
            name="phone"
            sx={{ mb: "1em" }}
            label="Phone Number"
            errorMessage={errors.phone?.message}
            fullWidth
          />
        </Box>
        <UIButton disabled={disabled} type="submit" label="Send OTP" id="sign-in-button" fullWidth />
        </Form>
      </LoginFormContainer>
    </LoginWrapper>
  );
};

export default Login;
