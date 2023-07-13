import React from 'react';

const ProuctSpec = ({ heading, p, ref }) => {
  return (
    <>
      <div useRef={ref}>
        <h3 className="medium-sub-heading">{heading}</h3>
        <p>{p}</p>
      </div>
    </>
  );
};

export default ProuctSpec;
