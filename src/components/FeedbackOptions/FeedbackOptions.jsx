import PropTypes from 'prop-types';

import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import {
  FeedbackBtnList,
  FeedbackBtnItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnList>
      {options.map(option => (
        <FeedbackBtnItem key={option}>
          <FeedbackBtn
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option === 'good' && <BsEmojiSmile />}
            {option === 'neutral' && <BsEmojiNeutral />}
            {option === 'bad' && <BsEmojiFrown />}
            {option}
          </FeedbackBtn>
        </FeedbackBtnItem>
      ))}
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
