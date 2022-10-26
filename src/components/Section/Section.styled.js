import styled from 'styled-components';

export const FeedbackSection = styled.section`
  padding-bottom: 60px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;

  align-items: center;

  &:not(:last-child) {
    padding-bottom: 0px;
  }
`;

export const Title = styled.h2`
  text-align: center;

  margin-bottom: 35px;

  font-weight: 800;
  font-family: monospace;
  font-size: 40px;
  text-transform: uppercase;

  color: #dabdab;
  -webkit-text-stroke: 0.5px #000000;
`;
