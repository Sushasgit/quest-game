import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

import { CARDS_DATA } from '../../../utils/constants';

const HeadlineBlock = styled.div`
  background-color: ${data => (data.theme.calendar.hoverColor)};
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px 4px 0 0;
}`;

const Headline = styled.span`
  color: ${data => (data.theme.calendar.bgAvailable)};
  font-size:14px;
  margin-left:10px;
}`;

const TextFieldOnForm = styled.div`
  color: ${data => (data.theme.calendar.textColorOrderList)};
  font-size:16px;
  margin-top: 15px
  margin-top: 15px
  text-align: center;
  height: 26px;
}`;

const InfoOrder = styled.div`
  display: flex;
  margin: 15px auto; 
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${data => (data.theme.calendar.bgWeekDays)};
  color: ${data => (data.theme.calendar.textColorDayWeek)};
}`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  height:215px;
  justify-content:space-between;
  padding-top: 20px;
}`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}`;


class BookingTime extends Component {
kind = () => {
  let title;
  const game = this.props.kindEvent;
  switch (game) {
    case 'HideAndSeek': title = CARDS_DATA[0].title;
      break;
    case 'paintBall': title = CARDS_DATA[1].title;
      break;
    case 'quadro': title = CARDS_DATA[2].title;
      break;
    case 'strikeBall': title = CARDS_DATA[3].title;
      break;
    default: title = null;
  }
  return (title);
};

render() {
  let Booking = (
    <div className="booking_popup">
      <form className="booking_popup_form">
        <HeadlineBlock>
          <Headline>{this.kind()}</Headline>
          <button onClick={this.props.onClose} className="booking_popup_Button_close">Х</button>
        </HeadlineBlock>
        <div className="booking_popup_form_wrap">
          <TextFieldOnForm>
                Пожалуйста подтвердите Ваш заказ
          </TextFieldOnForm>
          <InfoOrder className="booking_popup_time">
            {`${this.props.day} в ${this.props.time}`}
          </InfoOrder>
          <TextFieldOnForm>
                Заполните данные
          </TextFieldOnForm>
          <InputBlock>
            <Input name="Name" />
            <Input name="Phone" />
            <Input name="Email" />
          </InputBlock>
          <ButtonBlock>
            <button type="button" className="booking_popup_button_submit">
                Зарезервировать
            </button>
            <button
              type="button"
              className="booking_popup_button_cancel"
              onClick={this.props.onClose}
            >
                Отменить
            </button>
          </ButtonBlock>
        </div>
      </form>
    </div>
  );

  if (!this.props.isOpen) {
    Booking = null;
  }

  return (
    <div>
      {Booking}
    </div>
  );
}
}
export default BookingTime;
