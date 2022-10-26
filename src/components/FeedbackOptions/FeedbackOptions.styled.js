import styled from 'styled-components';

export const FeedbackBtnList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FeedbackBtnItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;
  border: 1px solid #79553d;

  width: 120px;
  padding: 12px 0;

  text-transform: capitalize;

  font-weight: 500;
  font-size: 18px;
  background-color: #fdd9b5;
  transition: box-shadow 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    box-shadow: 1px 13px 48px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.1);
    background-color: ${p => {
      if (p.name === 'good') {
        return '#08a610';
      } else if (p.name === 'neutral') {
        return '#ffe608';
      } else {
        return '#ff0808';
      }
    }};
  }
  & > svg {
    margin-right: 10px;
  }
`;

export const BtnIcon = styled.svg``;
