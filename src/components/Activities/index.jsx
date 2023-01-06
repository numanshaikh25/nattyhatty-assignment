import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../common/Card";
import PrimaryButton from "../common/PrimaryButton";
import ToolbarContainer from "../common/ToolbarContainer";
import ActivityImg from "../../images/Icon awesome-users-cog.png";
import Divider from "@mui/material/Divider";
import { activityData } from "../../data/ActivityData";

function Activities({ activityMobile = "" }) {
  const imgstyle = {
    backgroundColor: "#DEE8FF",
    borderRadius: "25px",
    padding: "0.5rem",
    width: "20px",
    textAlign: "center",
  };
  return (
    <Box /*  sx={{ minWidth: "32rem" }} */>
      <ToolbarContainer
        activityMobile={activityMobile}
        title={"Activities"}
        toolbar={<PrimaryButton text="View All" color="#0C611A" />}
        children={
          <Box>
            {activityData.map((activity, index) => {
              return (
                <>
                  <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        background: "#DEE8FF",
                        borderRadius: "100%",
                        width: "2.125rem",
                        height: "2.125rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: "1.438rem",
                      }}
                    >
                      <img src={activity.image} alt="" />
                    </Box>

                    <Box sx={{ whiteSpace: "nowrap", ...(activityMobile !== "mobile" && { paddingRight: "4rem" }) }}>
                      <Typography
                        data-text="Account Type"
                        variant="h5"
                        sx={{ fontSize: "0.875rem", fontWeight: "500" }}
                      >
                        {activity.text} <span style={{ color: "#F8991F" }}>{activity.yellowText}</span>
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: "0.75rem", color: "#C7C7C7" }}>
                        {activity.timeStamp}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderLeft: "1px solid #E3E3E3",
                      height: "18px",
                      ...(activityMobile === "mobile" ? { width: "90%" } : { width: "92%" }),
                      margin: "auto",
                      "&:last-child": {
                        border: "0",
                      },
                    }}
                  ></Box>
                </>
              );
            })}
          </Box>
        }
      />
    </Box>
  );
}

export default Activities;
