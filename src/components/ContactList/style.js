import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  margin-top: -60px;
  padding: 20px;
  border-radius: 12px;
  max-height: 300px;
  overflow-y: scroll;

  &:hover {
    border: 1px solid lightgrey;
    transition: 0.3s;
  }
`;

const ListBtn = styled.button`
  background-color: blue;
  color: white;
  border-radius: 3px;
  border: none;
  width: 70px;
  height: 20px;

  &:hover {
    background-color: darkblue;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;

const ListItem = styled.li`
  width: 260px;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: 0.3s;
  }
`;

const NumberParagraph = styled.p`
  margin-bottom: 8px;
`;

const NameParagraph = styled.p`
  margin: 0px;
  font-weight: bold;
  color: darkblue;
`;

export { List, ListBtn, ListItem, NumberParagraph, NameParagraph };
