import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <Box>
      <main>
        <Header />
        <Outlet />
      </main>
    </Box>
  );
}
