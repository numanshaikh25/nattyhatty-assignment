import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "../common/Input";
function ProfileSettings() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 1 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <CameraAltIcon
                    sx={{
                      width: 22,
                      height: 22,
                      p: 1,
                      border: `2px solid grey`,
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></CameraAltIcon>
                }
              >
                <Avatar sx={{ width: 100, height: 100 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Badge>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 1,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ m: 0, textAlign: "left" }}>
                John Smith
              </Typography>
              <Typography variant="p" gutterBottom sx={{ textAlign: "left", fontSize: "0.9rem" }}>
                <LocationOnIcon sx={{ width: 15, height: 15, m: 0, p: 0 }} />
                Main St. Farmington, CA 123
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={8} lg={8} md={12} xs={12}>
          <Grid container>
            <Grid item xl={10} lg={10}>
              <Grid container>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    p: 0.7,
                  }}
                >
                 <Input id={"firstname"} label={"First Name"} value={"John"} />
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    p: 0.7,
                  }}
                >
                  <p>Phone:</p>
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="Phone"
                      fullWidth
                      sx={{
                        width: { sm: 120, md: 180 },
                        backgroundColor: "white",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                      required
                      variant="outlined"
                      value={"+1 (324) 234-2343"}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    p: 0.7,
                  }}
                >
                  <p>Last Name:</p>
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="Last Name"
                      fullWidth
                      sx={{
                        width: { sm: 120, md: 180 },
                        backgroundColor: "white",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                      required
                      variant="outlined"
                      value={"Smith"}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    p: 0.7,
                  }}
                >
                  <p>Graduation:</p>
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="First Name"
                      fullWidth
                      sx={{
                        width: { sm: 120, md: 180 },
                        backgroundColor: "white",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                      required
                      variant="outlined"
                      value={"1988"}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    p: 0.7,
                  }}
                >
                  <p> Email:</p>
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="First Name"
                      fullWidth
                      sx={{
                        width: { sm: 120, md: 180 },
                        backgroundColor: "white",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                      required
                      disabled
                      variant="outlined"
                      value={"johnsmith@yahoo.com"}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    p: 0.7,
                  }}
                >
                  <p>Date of Birth:</p>
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="First Name"
                      fullWidth
                      sx={{
                        width: { sm: 120, md: 180 },
                        backgroundColor: "white",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                      required
                      disabled
                      variant="outlined"
                      value={"08/03/1960"}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={2} lg={2} md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  alignContent: "space-around",
                  m: 0.5,
                }}
              >
                <Box sx={{ p: 0, margin: "0.5rem 0.2rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "600",
                      height: 50,
                      backgroundColor: "#0b611a",
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>
                <Box sx={{ p: 0, margin: "0.5rem 0.2rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "600",
                      height: 50,
                      backgroundColor: "#232e3e",
                    }}
                  >
                    Change Password
                  </Button>
                </Box>
                <Box sx={{ p: 0, margin: "0.5rem 0.2rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "600",
                      backgroundColor: "#ff3a3a",
                    }}
                  >
                    Leave Family
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileSettings;
