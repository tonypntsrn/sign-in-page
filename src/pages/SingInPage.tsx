import { useFormik } from "formik";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { PasswordField, ValidationMessage } from "../components";
import {
  singInValidationSchema,
  passwordFeedbackValidation,
} from "../utils/validation";
import backgroung from "../assets/background.svg?url";

const SIGN_UP = "Sign up";

export const SignInPage = () => {
  const { values, touched, handleChange, handleSubmit, errors, handleBlur } =
    useFormik({
      validationSchema: singInValidationSchema,
      onSubmit: (values) => alert(JSON.stringify(values)),
      initialValues: { email: "", password: "" },
    });

  const getHasError = (field: "email" | "password") =>
    touched[field] && Boolean(errors[field]);

  const getValidationSuccessColor = (field: "email" | "password") =>
    touched[field] && !Boolean(errors[field]) ? "success" : undefined;

  const renderPasswordFeeback = () =>
    passwordFeedbackValidation.map(({ message, getMessageStatus }) => (
      <ValidationMessage
        key={message}
        massage={message}
        status={getMessageStatus(values.password, getHasError("password"))}
      />
    ));

  return (
    <Stack
      px={7.5}
      height="100%"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `no-repeat url("${backgroung}"), linear-gradient(167.96deg, #F4F9FF 0%, #E0EDFB 100%)`,
        backgroundSize: "cover",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Stack gap={10} alignItems="center" justifyContent="center">
          <Typography variant="h5">{SIGN_UP}</Typography>
          <Stack gap={5} sx={{ width: { xs: "100%", lg: "30%" } }}>
            <TextField
              name="email"
              placeholder="Email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              error={getHasError("email")}
              color={getValidationSuccessColor("email")}
              helperText={touched.email && errors.email}
            />
            <PasswordField
              name="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              error={getHasError("password")}
              placeholder="Create your password"
              color={getValidationSuccessColor("password")}
              success={Boolean(getValidationSuccessColor("password"))}
            />
            <Stack pl={5}>{renderPasswordFeeback()}</Stack>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 240,
              borderRadius: 3,
              background:
                "linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)",
            }}
          >
            {SIGN_UP}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
