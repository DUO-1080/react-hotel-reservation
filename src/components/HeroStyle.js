import styled from "styled-components";
import defaultImage from "../images/room-1.jpeg";

const HeroStyled = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.image ? props.image : defaultImage)}) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeroStyled;
