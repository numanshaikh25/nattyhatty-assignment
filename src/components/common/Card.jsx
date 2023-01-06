import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ToolbarContainer from "../common/ToolbarContainer";
import { useTheme } from "@mui/material/styles";
function Card({
  image = "",
  centerElement = <></>,
  rightElement = "",
  bgColor = "",
  imageStyle = {},
  invitation = "false",
}) {
  const theme = useTheme();
  return (
    <Box
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: bgColor,
        borderRadius: "5px",
        marginBottom: "0.5rem",
        padding: "0.5rem 1.25rem",
      }}
    >
      {image && (
        <Box item sx={{ marginRight: "1.125rem" }}>
          <div style={imageStyle}>
            <img src={image} />
          </div>
        </Box>
      )}
      <Box item sx={{ flex: 1 }}>
        {centerElement}
      </Box>
      {rightElement && (
        <Box item sx={{}}>
          {rightElement}
        </Box>
      )}
    </Box>
  );
}

export default Card;
