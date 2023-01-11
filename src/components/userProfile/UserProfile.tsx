import "./UserProfileStyles.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserProfile = () => {
  return (
    <Card className="card">
      <Typography className="userProfile">User Profile</Typography>
      <CardContent className="cardContents">
        {/* {props.project.projectTitle} */}
        <Typography className="cardContentsFont">First Name: </Typography>
        <Typography className="cardContentsFont">Last Name: </Typography>
        <Typography className="cardContentsFont">Email: </Typography>
        <Typography className="cardContentsFont">Profession: </Typography>
        <Typography className="cardContentsFont">Date Created: </Typography>
        <Typography className="cardContentsFont">Country: </Typography>
        <Typography className="cardContentsFont">City: </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
