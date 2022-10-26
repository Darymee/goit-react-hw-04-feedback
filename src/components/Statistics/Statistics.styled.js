import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const StatisticsText = styled.p`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 22px;
  font-family: monospace;
  text-transform: uppercase;

  color: #dabdab;
  -webkit-text-stroke: 0.5px #000000;
`;

export const StatisticsValue = styled.span`
  font-weight: 600;
  font-size: 30px;
  font-family: monospace;
  color: #dabdab;
  -webkit-text-stroke: 0.5px #000000;
`;
