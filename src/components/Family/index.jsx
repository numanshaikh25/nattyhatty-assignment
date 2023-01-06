import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import ToolbarContainer from "../common/ToolbarContainer";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import Card from "../common/Card";
import GroupIcon from "@mui/icons-material/Group";
import IconButton from "@mui/material/IconButton";
import { familyData } from "../../data/FamilyData";

function Family({ mobile = "" }) {
  return (
    <ToolbarContainer
      mobile={mobile}
      className="scrollable"
      title={"Family"}
      toolbar={
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <SearchIcon />
          <PrimaryButton text="Add New" color="#0b611a" />
        </Box>
      }
      children={
        <Box>
          {familyData.map((member, index) => {
            return (
              <Card
                key={index}
                image={member.image}
                centerElement={
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      textAlignLeft: "left",
                      ...(member.admin ? { color: "white" } : { color: "black" }),
                      textAlign: "left",
                    }}
                  >
                    {member.centerElement}
                  </Typography>
                }
                rightElement={
                  member.admin ? (
                    <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right", alignItems: "center" }}>
                      <PrimaryButton text="Admin" color="white" fcolor="black" />
                      <IconButton
                        variant="outlined"
                        sx={{
                          color: "black",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          height: "2.3rem",
                          boxShadow:
                            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                        }}
                      >
                        <GroupIcon />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
                      <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
                    </Box>
                  )
                }
                bgColor={member.bgColor}
              />
            );
          })}
        </Box>
      }
    />
  );
}

export default Family;
