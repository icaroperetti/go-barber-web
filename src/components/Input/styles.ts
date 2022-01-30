import styled from "styled-components";

export const Container = styled.div`
  color: #f4ede8;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
