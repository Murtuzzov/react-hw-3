import styled from "styled-components";

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darkblue;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;

export { ContainerForm, Input, Button };
