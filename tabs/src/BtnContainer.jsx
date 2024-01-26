import React from 'react';

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            key={item.id}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
