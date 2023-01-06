import React from "react";
import { Box } from "@mui/system";
import PrimaryButton from "./common/PrimaryButton";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Header({ title = "", alert = "", buttonText = "", className = "" }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
            {title}
          </Typography>
        </Box>
        {alert && (
          <Box>
            <Alert onClose={() => {}}>{alert}</Alert>
          </Box>
        )}
        {buttonText && (
          <Box>
            <PrimaryButton color={"#232e3e"} text={buttonText}></PrimaryButton>
          </Box>
        )}
        {className == "mobile" && (
          <Box>
            <MoreHorizIcon />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Header;
