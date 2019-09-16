import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  background: ${props => props.theme.LIST_ITEM_BG};
  &:hover {
    background: ${props => props.theme.LIST_ITEM_HOVER_BG};
  }
`;

ListItem.defaultProps = {
  theme: {
    LIST_ITEM_BG: "#283149",
    LIST_ITEM_HOVER_BG: "#242c42",
    BASE_BORDER_RADIUS: "3px"
  }
};

export const List = styled.ul`
  width: 100%;
  margin: 0 -5px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;
