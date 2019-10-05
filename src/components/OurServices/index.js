import React from 'react';
import styled from 'styled-components';
import Icon from '../ui/Icon';
import Title from '../ui/Title';
import Description from '../ui/Description';

import '../Advantages/advantages.scss';

const ListItem = styled.li`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  text-align: center;
  font-size: 16px;
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 80px 80px;
`;

const ListItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const ListItemIcon = styled(Icon)`
  max-width: 70px;
  color: ${data => (data.theme.themeType === 'light' ? data.theme.primaryBg : data.theme.titleColor)}
`;

const OurServices = ({ services }) => {
  return (
    <>
      <Title primary level={2}>
          Наши услуги
      </Title>
      <Description align="center">
        9 лет опыта в организации разных мероприятий, 6 лет из них по направлению «экстрим».
      </Description>
      <ul className="advantage__place">
        {
            services && services.map((item, index) => (
              <ListItem key={index}>
                <div className="advantage__icon">
                  <ListItemIcon name={item.iconName} />
                </div>
                <ListItemTitle>
                  <span>{item.title}</span>
                </ListItemTitle>
              </ListItem>
            ))
          }
      </ul>
    </>
  );
};

export default OurServices;
