import React from "react";
// import PrimaryButton from "../common/PrimaryButton";
import { Box, Typography } from "@mui/material";
import AvatarImg from "../images/Avatar.png";
import GroupIcon from "@mui/icons-material/Group";
import PrimaryButton from "../components/common/PrimaryButton";
export const familyData = [
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#F8991F",
    admin: true,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
  {
    image: AvatarImg,
    centerElement: "John Smith",
    bgColor: "#DEE8FF",
    admin: false,
  },
];
// export const familyData = [
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography
//         variant="h5"
//         sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left", color: "white", textAlign: "left" }}
//       >
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Admin" color="white" fcolor="black" />
//         <PrimaryButton text={<GroupIcon />} color="white" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#F8991F",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
//   {
//     image: AvatarImg,
//     centerElement: (
//       <Typography variant="h5" sx={{ fontSize: "1.1rem", fontWeight: "500", textAlignLeft: "left" }}>
//         John Smith
//       </Typography>
//     ),
//     rightElement: (
//       <Box sx={{ display: "flex", gap: "0.2rem", justifyContent: "right" }}>
//         <PrimaryButton text="Member" color="#CAD7F5" fcolor="black" />
//       </Box>
//     ),
//     bgColor: "#DEE8FF",
//   },
// ];
