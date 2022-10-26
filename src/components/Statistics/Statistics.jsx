import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsListItem,
  StatisticsText,
  StatisticsValue,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsText>Good:</StatisticsText>
          <StatisticsValue>{good}</StatisticsValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Neutral:</StatisticsText>
          <StatisticsValue>{neutral}</StatisticsValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText> Bad:</StatisticsText>
          <StatisticsValue>{bad}</StatisticsValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Total:</StatisticsText>
          <StatisticsValue>{total}</StatisticsValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Positive feedback:</StatisticsText>
          <StatisticsValue>{positivePercentage}%</StatisticsValue>
        </StatisticsListItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
