import React from "react";
import Button from "@mui/material/Button";

function PrimaryButton({ color = "blue", text = "", fcolor = "white", className = "" }) {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "capitalize",
        color: fcolor,
        fontWeight: "600",
        backgroundColor: color,
        marginTop: "0.3rem",
        marginBottom: "0.3rem",
        ...(className === "icon-button" && { padding: "0px" }),
        // paddingRight: "0.1rem",
        // pl: 0.1,
      }}
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
