import React from "react";
import styled from "styled-components";
import { layout } from "styled-system";

export default function EmbededPlayer({ title, src }) {
  return <Player title={title} allowFullScreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src={src} height={["95vh", "70vh"]} width={1} />;
}

const Player = styled.iframe`
  border: none;
  ${layout}
`;
