import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileSettings from "./grid components/ProfileSettings";

function DashboardGrid() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={8}
          xs={8}
          sx={{ backgroundColor: "#f5f6f8", p: 0 }}
        >
          <Box sx={{ m: 0 }}>
             
            <ProfileSettings />
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          md={4}
          xs={4}
          sx={{ backgroundColor: "#f5f6f8" }}
        >
          <Box>Family</Box>
        </Grid>
        <Grid
          item
          lg={6}
          xl={6}
          md={12}
          xs={12}
          sx={{ backgroundColor: "#f5f6f8" }}
        >
          <Box>Bank Account</Box>
        </Grid>
        <Grid
          item
          lg={3}
          xl={3}
          md={6}
          xs={6}
          sx={{ backgroundColor: "#f5f6f8" }}
        >
          <Box>Activities</Box>
        </Grid>
        <Grid
          item
          lg={3}
          xl={3}
          md={6}
          xs={6}
          sx={{ backgroundColor: "#f5f6f8" }}
        >
          <Box>Invitations</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardGrid;
