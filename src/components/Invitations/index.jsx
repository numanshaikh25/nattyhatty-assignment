import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Card from "../common/Card";
import ToolbarContainer from "../common/ToolbarContainer";
import AvatarImg from "../../images/Avatar.png";
import PrimaryButton from "../common/PrimaryButton";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { sentData, receivedData } from "../../data/InvitationData";
import Tabs from "../Tabs/Tabs";
import { useState } from "react";
function Invitations({ invitationMobile = "" }) {
  const [show, setShow] = useState(true);

  return (
    <Box className="invitations-Container" sx={{ mt: "1.25rem" }}>
      <ToolbarContainer
        className="scrollable"
        invitationMobile={invitationMobile}
        title="Invitations"
        toolbar={<Tabs setShow={setShow} show={show} />}
        children={
          <>
            {show &&
              sentData.map((data, index) => {
                return (
                  <Card
                    key={index}
                    bgColor={"#DEE8FF"}
                    centerElement={
                      <Typography variant="h5" sx={{ fontSize: "0.875rem", fontWeight: "500", width: "100%%", p: 1 }}>
                        <span style={{ color: "#F8991F" }}>{data.yellowText}</span> {data.centerText}
                      </Typography>
                    }
                  />
                );
              })}
            {!show &&
              receivedData.map((data, index) => {
                return (
                  <Card
                    key={index}
                    image={data.image}
                    bgColor={"#DEE8FF"}
                    centerElement={
                      <Typography variant="h5" sx={{ fontSize: "0.875rem", fontWeight: "500", width: "100%%", p: 1 }}>
                        {data.centerText}
                      </Typography>
                    }
                    rightElement={
                      <Box sx={{ display: "flex", gap: "0.2rem" }}>
                        <IconButton
                          variant="outlined"
                          sx={{
                            color: "white",
                            backgroundColor: "#0C611A",
                            borderRadius: "5px",
                            height: "2.3rem",
                            boxShadow:
                              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                          }}
                        >
                          <DoneIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          sx={{
                            color: "white",
                            backgroundColor: "#FF3A3A",
                            borderRadius: "5px",
                            height: "2.3rem",
                            boxShadow:
                              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                        {/* <PrimaryButton text={} color={"#0C611A"} />
                        <PrimaryButton text={} color={"#FF3A3A"} /> */}
                      </Box>
                    }
                  />
                );
              })}
          </>
        }
      />
    </Box>
  );
}

export default Invitations;
