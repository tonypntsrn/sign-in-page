import { CssBaseline, Box } from "@mui/material";
import { SignInPage } from "./pages";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Box height="100vh">
        <SignInPage />
      </Box>
    </>
  );
};

export default App;
