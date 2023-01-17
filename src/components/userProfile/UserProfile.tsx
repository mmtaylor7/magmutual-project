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
        <div className="cardContentsFont">
          <Typography className="boldedText">
            First Name:&nbsp;&nbsp;
          </Typography>{" "}
          {props.user.firstname}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">Last Name:&nbsp;&nbsp;</Typography>{" "}
          {props.user.lastname}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">Email:&nbsp;&nbsp;</Typography>{" "}
          {props.user.email}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">
            Profession:&nbsp;&nbsp;
          </Typography>{" "}
          {props.user.profession}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">
            Date Created:&nbsp;&nbsp;
          </Typography>{" "}
          {props.user.dateCreated}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">Country:&nbsp;&nbsp;</Typography>{" "}
          {props.user.country}
        </div>
        <div className="cardContentsFont">
          <Typography className="boldedText">City:&nbsp;&nbsp;</Typography>{" "}
          {props.user.city}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
