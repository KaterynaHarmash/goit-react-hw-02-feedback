import styled from 'styled-components';

export const HeadingTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #202020;
  text-transform: uppercase;
  word-spacing: 1px;
  letter-spacing: 2px;
`;
export const StyledSection = styled.section`
  font-size: 14px;
  text-align: center;
  width: 60%;
  border: 3px solid black;
  padding: 30px 20px;
  background-color: #fff;
  resize: both;
  background: linear-gradient(
    to top,
    rgba(#cffffe, 0.3),
    rgba(#f9f7d9, 0.3),
    rgba(#fce2ce, 0.3),
    rgba(#ffc1f3, 0.3)
  );
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cffffe' /%3E%3Cstop offset='25%25' stop-color='%23f9f7d9' /%3E%3Cstop offset='50%25' stop-color='%23fce2ce' /%3E%3Cstop offset='100%25' stop-color='%23ffc1f3' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3'/%3E %3C/svg%3E")
    1;
`;
