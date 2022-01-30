import styled from 'styled-components';
import signInBackground from '../../assets/sign-in-background.png';
import { shade } from 'polished';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border:2px solid #232129;
      padding:16px;
      width: 100%;

      & + input {
        margin-top:16px;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border:0;
      padding:0 16px;
      width: 100%;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition:background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    > a {
      color:#f4ede8;
      display: block;
      margin-top:24px;
      text-decoration:none;
      transition:background-color 0.2s;
    
      &:hover {
        color:${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color:#ff9000;
    display: flex;
    align-items: center;
    margin-top:24px;
    text-decoration:none;
    transition:background-color 0.2s;

    svg {
      margin-right: 15px;
    }
    
      &:hover {
        color:${shade(0.2, '#ff9000')};
      }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`
