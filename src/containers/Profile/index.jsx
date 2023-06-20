import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import myPhoto from "./../../assets/images/myphoto.jpeg";

import { BackToHome, MyButton, MyTextField } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
import { showError, showSuccess, updateFormSchema } from "../../utils/helper";
import { api } from "../../api";
import { updateUser } from "../../redux/reducers/authSlice";
import { toggleTheme } from "../../redux/reducers/themeSlice";
export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const [updateState, setUpdateState] = useState(false);
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const theme = useTheme();
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <BackToHome />
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: theme.palette.primary.contrastText }}
      >
        Profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "50%",
          marginTop: 10,
        }}
      >
        <Box
          component="img"
          src={myPhoto}
          sx={{ height: 100, borderRadius: 50 }}
        />
        <Formik
          initialValues={{
            firstName: user.user.firstName,
            lastName: user.user.lastName,
          }}
          validationSchema={updateFormSchema}
          onSubmit={(values) =>
            api.auth
              .updateProfile({ token: user.token, ...values })
              .then((response) => {
                dispatch(
                  updateUser({
                    firstName: values.firstName,
                    lastName: values.lastName,
                  })
                );
                showSuccess(response.data.message);
              })
              .catch((error) => showError(error.message.message))
          }
          enableReinitialize={true}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  minHeight: "30vh",
                }}
              >
                {updateState ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <MyTextField
                      onChange={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      error={touched.firstName && errors.firstName}
                      value={values.firstName}
                    />
                    <MyTextField
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      error={touched.lastName && errors.lastName}
                      value={values.lastName}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        color: theme.palette.primary.contrastText,
                      }}
                    >
                      {user.user.firstName}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        color: theme.palette.primary.contrastText,
                      }}
                    >
                      {user.user.lastName}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => {
                  setUpdateState(!updateState);
                  updateState && handleSubmit();
                }}
              >
                {updateState ? "Save" : "Update Profile"}
              </Button>
            </>
          )}
        </Formik>
        <MyButton
          title="toggle theme"
          onClick={() => dispatch(toggleTheme(!isDark))}
        />
      </Box>
    </Container>
  );
}
