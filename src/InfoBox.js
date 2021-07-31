import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="" infoBox>
      <CardContent>
        {/* Title: Corona virus cases */}

        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* +150k cases */}
        <h2 className="infoBo__cases">{cases}</h2>
        {/* +2M total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
