import { Box, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "./PrimaryButton";

function BankAccount({ image = "", number = "", expiryDate = "", mobile = "" }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        ...(mobile === "mobile" ? { backgroundColor: "#F5F6F8" } : { backgroundColor: "white" }),
        p: 1,
        gap: "1rem",
      }}
    >
      <Box sx={{ ...(mobile === "mobile" && { marginLeft: "0.875rem" }) }}>
        <img src={image} alt="" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.2rem", ...(mobile === "mobile" && { flex: 1 }) }}>
        <Typography variant="h5" sx={{ fontSize: "1.1rem", m: 0, fontWeight: "500" }}>
          {number}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "0.8rem", color: "grey", fontWeight: "500" }}>
          {expiryDate}
        </Typography>
      </Box>
      {mobile === "mobile" && (
        <Box sx={{ marginRight: "0.875rem" }}>
          <PrimaryButton color={"#0C611A"} text={"Edit"} />{" "}
        </Box>
      )}
    </Box>
  );
}

export default BankAccount;
