import styled from "styled-components";
import { typography, space, color } from "styled-system";

const Text = styled.span(typography, space, color);

Text.defaultProps = {
  fontFamily: "base",
};
export default Text;
