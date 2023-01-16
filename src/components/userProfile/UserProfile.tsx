import "./UserProfileStyles.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type UserProfileProps = {
  user: any;
};

const UserProfile = (props: UserProfileProps) => {
  return (
    <Card className="card">
      <Typography className="userProfile">User Profile </Typography>
      <CardContent className="cardContents">
        {/* {props.project.projectTitle} */}
        <Typography className="cardContentsFont">
          First Name: {props.user.firstname}
        </Typography>
        <Typography className="cardContentsFont">
          Last Name: {props.user.lastname}{" "}
        </Typography>
        <Typography className="cardContentsFont">
          Email: {props.user.email}
        </Typography>
        <Typography className="cardContentsFont">
          Profession: {props.user.profession}{" "}
        </Typography>
        <Typography className="cardContentsFont">
          Date Created: {props.user.dateCreated}
        </Typography>
        <Typography className="cardContentsFont">
          Country: {props.user.country}{" "}
        </Typography>
        <Typography className="cardContentsFont">
          City: {props.user.city}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
