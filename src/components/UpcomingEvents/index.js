import React from 'react';
import styled, { withTheme } from 'styled-components';

import './events.scss';
import Icon from '../ui/Icon';
import Title from '../ui/Title';
import Description from '../ui/Description';
import Button from '../ui/Button';

const Events = styled.div`
    color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    & svg {
        max-width: 500px; 
        margin: 0 auto;  
    }

  & > * {
      width: 50%;
  }
}
`;

const UpcomingEvents = () => {
  return (
    <Events className="wrapper events">
      <div className="events__info">
        <Title level={2}>
          Не получается собрать компанию чтобы поиграть?
        </Title>
        <Description>
          Не беда! Приходите к нам на сборную игру!
          Сборная игра отличная возможность поиграть в большой команде,
          пообщаться с новыми людьми, завести новые знакомства, набраться положительных эмоций
          и впечатлений на длительное время!
        </Description>
        <Button to="/events">Подробнее</Button>
      </div>
      <Icon name="events" />
    </Events>
  );
};

export default withTheme(UpcomingEvents);
