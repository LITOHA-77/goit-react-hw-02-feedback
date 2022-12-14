import React from 'react';

import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          type="button"
          value={option}
          onClick={handleFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
