import React from 'react';
import styled from "styled-components";

const Week = (props) => {
  return (
      <div className="week">
        {props.children}
      </div>
    );
};

export default Week;
