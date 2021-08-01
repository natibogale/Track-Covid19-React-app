import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="InfoBox" >
      <CardContent>
        {/* Title: Corona virus cases */}

        <Typography className="InfoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* +150k cases */}
        <h2 className="infoBo__cases">{cases}</h2>
        {/* +2M total */}
        <Typography className="InfoBox__total" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
