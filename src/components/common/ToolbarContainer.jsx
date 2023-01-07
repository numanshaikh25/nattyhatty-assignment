import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const ToolbarContainer = ({
  className = "",
  title = "",
  toolbar = <></>,
  children,
  mobile = "",
  activityMobile = "",
  invitationMobile = "",
}) => {
  const theme = useTheme();
  return (
    <Box
      className={`toolbarContainer ${className}`}
      sx={{
        ...(activityMobile === "mobile" ? { backgroundColor: "none" } : { backgroundColor: "#f5f6f8" }),
        ...(invitationMobile !== "" && { backgroundColor: "none" }),
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      {activityMobile !== "mobile" && (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {title && (
            <Typography variant="h2" sx={{ fontSize: "1.5rem", fontWeight: "500" }} className="title">
              {title}
            </Typography>
          )}
          {toolbar && <Box className="toolbar">{toolbar}</Box>}
        </Box>
      )}
      <Box
        className="children"
        sx={{
          marginTop: "0.5rem",
          ...(className === "scrollable" && { maxHeight: "20.5rem", overflowX: "auto" }),
          ...(mobile === "mobile" && { maxHeight: "15.25rem", overflowX: "auto" }),
          ...(title === "Activities" && {
            [theme.breakpoints.up("md")]: {
              maxHeight: "20.5rem",
              overflow: "hidden",
            },
            [theme.breakpoints.up("lg")]: {
              maxHeight: "56.5rem",
            },
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ToolbarContainer;
