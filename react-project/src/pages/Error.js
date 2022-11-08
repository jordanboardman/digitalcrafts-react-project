import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent sx={{ display: "flex", justifyContent: "center" }}>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Uh Oh!
      </Typography> */}
      <Typography variant="h5" component="div">
        Oops! Time to call it a night, my dude. Cheers!
      </Typography>

      {/* <Typography variant="body2">
        I hope you've found some cool drinks to make, though.
      </Typography> */}
    </CardContent>
    <CardActions sx={{ display: "flex", justifyContent: "center" }}>
      <Link to="/" underline="none">
        <Button size="small" variant="contained">
          Back to Home
        </Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function Error() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

// <Link href="#" underline="none">
// {'underline="none"'}
// </Link>
