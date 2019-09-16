import styled from "styled-components";

export const Label = styled.label`
  font-weight: 900;
  color: #dbedf3;
`;

export const Title = styled.h2`
    display: flex;
    justify-content: space-between
    color: ${props => props.theme.TITLE_TEXT_COLOR};
`;

Title.defaultProps = {
  theme: {
    TITLE_TEXT_COLOR: "#329bff"
  }
};

export const SmallInfo = styled.small`
  color: ${props => props.theme.SMALL_TEXT_COLOR};
  font-size: 0.8rem;
  font-weight: normal;
`;

SmallInfo.defaultProps = {
  theme: {
    SMALL_TEXT_COLOR: "#ccc"
  }
};
