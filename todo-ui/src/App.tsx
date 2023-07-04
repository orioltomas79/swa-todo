import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
