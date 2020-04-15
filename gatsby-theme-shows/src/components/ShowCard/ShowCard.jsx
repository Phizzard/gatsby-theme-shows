import React from "react";
import { Link } from "gatsby";

import { ImageAlt } from "../ImageAlt";
import { Card } from "../Card";

export default function ShowCard({ title, children, to, ...props }) {
  return (
    <Card p={0} {...props}>
      <Link to={to}>
        <ImageAlt title={title} height={300} width={1} />
        {children}
      </Link>
    </Card>
  );
}
