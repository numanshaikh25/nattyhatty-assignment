import React from "react";
import ToolbarContainer from "../common/ToolbarContainer";
import { Box } from "@mui/system";
import BankAccount from "../common/BankAccount";
import BankImg from "../../images/mastercard.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "../common/Input";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../common/PrimaryButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
function BankandBilling() {
  const theme = useTheme();

  return (
    <Box
      //   sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      sx={{
        display: "flex",
        gap: "1rem",
        [theme.breakpoints.up("lg")]: { flexDirection: "column" },
        [theme.breakpoints.up("md")]: { flexDirection: "row" },
        [theme.breakpoints.up("sm")]: { flexDirection: "row" },
      }}
    >
      <ToolbarContainer
        title="Bank Account"
        children={
          <Box
            sx={{
              display: "flex",
              gap: "0.7rem",
              flexWrap: "wrap",
              [theme.breakpoints.up("md")]: { minWidth: "27rem" },
            }}
          >
            <BankAccount image={BankImg} number={"**** **** **** 5967"} expiryDate={"Expires 09/27"} />
            <BankAccount image={BankImg} number={"**** **** **** 5967"} expiryDate={"Expires 09/27"} />
          </Box>
        }
      />
      <ToolbarContainer
        title="Billing Address"
        toolbar={
          <Box
            sx={{
              textAlign: "right",
              [theme.breakpoints.up("md")]: { display: "inline-block" },
              [theme.breakpoints.up("lg")]: { display: "none" },
            }}
          >
            <PrimaryButton text="Edit Details" color="#232e3e" />
          </Box>
        }
        children={
          <Box
            sx={{
              [theme.breakpoints.up("md")]: { marginBottom: "2.938rem" },
              [theme.breakpoints.up("lg")]: { marginBottom: "0.7rem" },
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#F8991F",
                      "&.Mui-checked": {
                        color: "#F8991F",
                      },
                    }}
                  />
                }
                label="Same as Home Address"
                sx={{ fontWeight: "600" }}
              />
              <Grid container spacing={1}>
                <Grid item lg={6} md={6}>
                  <Input
                    id={"firstname"}
                    placeholder={"firstname"}
                    label={"First Name"}
                    value={"John"}
                    billing={"true"}
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <Input
                    id={"lastname"}
                    placeholder={"lastname"}
                    label={"Last Name"}
                    value={"Smith"}
                    billing={"true"}
                  />
                </Grid>
                <Grid item lg={6} md={12}>
                  <Input
                    id={"address1"}
                    placeholder={"address1"}
                    label={"Address Line 1"}
                    value={"123 Fredline Street"}
                    billing={"true"}
                  />
                </Grid>
                <Grid item lg={6} md={12}>
                  <Input
                    id={"address2"}
                    placeholder={"address2"}
                    label={"Address Line 2"}
                    value={""}
                    billing={"true"}
                  />
                </Grid>
                <Grid item lg={3} md={3}>
                  <Input
                    id={"country"}
                    placeholder={"Country"}
                    label={"Country"}
                    value={"US"}
                    billing={"true"}
                    disabled={true}
                    bgcolor={"#f5f6f8"}
                  />
                </Grid>
                <Grid item lg={3} md={3}>
                  <FormControl
                    variant="standard"
                    sx={{
                      display: "flex",
                    }}
                    fullWidth
                  >
                    <FormLabel htmlFor={"state/province/region"} sx={{ whiteSpace: "nowrap" }}>
                      {"State/Province"}:{" "}
                    </FormLabel>
                    <Select
                      displayEmpty
                      value={"Select"}
                      //   onChange={handleChange}
                      input={
                        <OutlinedInput
                          id={"state/province/region"}
                          size="small"
                          placeholder={""}
                          name={"state/province/region"}
                          sx={{
                            // width: { sm: 120, md: 180 },
                            backgroundColor: "white",
                            "& .MuiInputBase-root": {
                              height: 35,
                            },
                          }}
                        />
                      }
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem disabled value="">
                        <em>Placeholder</em>
                      </MenuItem>
                      <MenuItem value={"Select"}>{"Select"}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={3} md={3}>
                  <Input id={"city"} placeholder={"Enter city name"} label={"City"} value={""} billing={"true"} />
                </Grid>
                <Grid item lg={3} md={3}>
                  <Input
                    id={"Zip code"}
                    placeholder={"Enter zip code"}
                    label={"Zip code"}
                    value={""}
                    billing={"true"}
                  />
                </Grid>
              </Grid>
            </FormGroup>
            <Box
              sx={{
                textAlign: "right",
                marginTop: "2rem",
                [theme.breakpoints.up("md")]: { display: "none" },
                [theme.breakpoints.up("lg")]: { display: "block" },
              }}
            >
              <PrimaryButton text="Edit Details" color="#232e3e" />
            </Box>
          </Box>
        }
      />
    </Box>
  );
}

export default BankandBilling;
