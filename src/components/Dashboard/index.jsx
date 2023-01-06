import React from "react";
import Header from "../Header";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Profile from "../Profile";
import { Grid } from "@mui/material";
import Family from "../Family";
import BankandBilling from "../Bank and Billing";
import Activities from "../Activities";
import Invitations from "../Invitations";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileDashboard from "./MobileDashboard";
import json2mq from "json2mq";

function Dashboard() {
  const mobile = useMediaQuery(
    json2mq({
      maxWidth: 768,
    })
  );
  const ipad = useMediaQuery(
    json2mq({
      maxWidth: 1024,
    })
  );
  if (mobile) return <MobileDashboard />;

  if (ipad)
    return (
      <Box
        sx={{
          pt: "1rem",
          px: "1.5rem",
          pb: "3rem",
        }}
      >
        <Header title="My Acccount" alert="This is a success alert — check it out!" buttonText="View Button" />
        <Grid container spacing={2} mt={2}>
          <Grid item lg={9} md={7} xs={9} sx={{ flexGrow: 0 }}>
            <Profile />
          </Grid>
          <Grid item lg={3} md={5} xs={3}>
            <Family />
          </Grid>
          <Grid item lg={5} md={12} sm={12}>
            <BankandBilling />
          </Grid>
          <Grid item lg={4} md={6} sm={6}>
            <Activities />
          </Grid>
          <Grid item lg={3} md={6} sm={6}>
            <Invitations />
          </Grid>
        </Grid>
      </Box>
    );

  return (
    <Box
      sx={{
        pt: "1rem",
        px: "1.5rem",
        pb: "3rem",
        height: "100vh",
      }}
    >
      <Header title="My Acccount" alert="This is a success alert — check it out!" buttonText="View Button" />
      <Grid container spacing={2} mt={2}>
        <Grid item lg={9} md={7} xs={9} spacing={1}>
          <Profile />
          <Box sx={{ display: "flex", gap: "1.25rem", mt: "1.25rem" }}>
            <BankandBilling />
            <Activities />
          </Box>
        </Grid>
        <Grid item lg={3} md={5} xs={3}>
          <Family />
          <Invitations />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
