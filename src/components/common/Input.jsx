import { FormControl, FormLabel, OutlinedInput, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function Input({
  id,
  label,
  labelSubtext,
  placeholder,
  value,
  onChange,
  billing = "false",
  bgcolor = "white",
  disabled = false,
}) {
  const theme = useTheme();
  return (
    <>
      <FormControl
        variant="standard"
        sx={{
          display: "flex",
          ...(billing === "false" && {
            [theme.breakpoints.up("lg")]: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            },
            [theme.breakpoints.up("md")]: {},
          }),
        }}
        // sx={{
        //     [theme.breakpoints.up("lg")]: {
        //       display: "flex",
        //       justifyContent: "space-between",
        //       gap: "1rem",
        //       width: "100%",
        //     },

        //   }}
        fullWidth
      >
        <FormLabel htmlFor={id} sx={{ whiteSpace: "nowrap" }}>
          {label}:{" "}
          {/* {hasAdornment ? (
					<Typography variant='subtitle2' color='GrayText'>
						{labelSubtext}
					</Typography>
				) : null} */}
        </FormLabel>
        <OutlinedInput
          id={id}
          size="small"
          placeholder={placeholder}
          name={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          sx={{
            // width: { sm: 120, md: 180 },
            backgroundColor: bgcolor,
            "& .MuiInputBase-root": {
              height: 35,
            },
          }}
        />
      </FormControl>
    </>
  );
}

export default Input;
