import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  padding: 15px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: ${props => props.theme.CARD_BG};
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  ${CardSection} + ${CardSection} {
    border-top: 1px solid ${props => props.theme.CARD_BORDER};
  }
`;

Card.defaultProps = {
  theme: {
    CARD_BG: "#283149",
    CARD_BORDER: "#404b69",
    BASE_BORDER_RADIUS: "3px"
  }
};
