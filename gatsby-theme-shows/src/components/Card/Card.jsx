import styled from "styled-components";
import { shadow } from "styled-system";

import { Box } from "../Box";

const Card = styled(Box)(shadow);

Card.defaultProps = {
  p: 2,
  bg: "white",
  boxShadow: "base",
};

export default Card;
