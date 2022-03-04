import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const HomeTitle = styled.h1`
  font-weight: bold;
  font-size: 50px;
  line-height: 150%;
  text-align: center;
  color: #3A7859;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #354153;
  margin: 146px 0 36px;
`;

const ButtonWrapper = styled.section`
  margin-top: 99px;
`;

const pulse = keyframes`
  0% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }
  
  100% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
`;

const StartBtn = styled.button`
  bottom: 15vh;
  width: 150px;
  height: 50px;
  font-weight: bold;
  background-color: #3A7859;
  border-radius: 8px;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  ${props => props.isActive && css`
  cursor: no-drop;
 `}
`;

const TableContainer = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 90%;
 max-height: 90vh;
 overflow-y: auto;
 background-color: #fff;
`;


export const S = { HomeWrapper, HomeTitle, Label, ButtonWrapper, TableContainer, StartBtn };