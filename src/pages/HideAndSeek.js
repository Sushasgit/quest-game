import React from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner/Banner';

const AdvantagesBox = styled.div`
  background-color: #242424;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
`;

const HideAndSeek = () => {
  return (
    <div className="wrap">
      <ScrollProvider>
        <Banner />
      </ScrollProvider>
      <AdvantagesBox className="bg bg--buildings">
      
      <section className="bg bg--buildings">
        Test
      </section>
    </AdvantagesBox>
    </div>
  );
};

export default HideAndSeek;
