import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../../ui/Input';
import Button from '../../ui/Button';


const HeadlineBlock = styled.div`
  background-color: ${data => (data.theme.calendar.hoverColor)};
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 3vw;
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
  height: 22vw;
  justify-content:space-between;
  padding-top: 3vw;
}`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}`;


class BookingTime extends Component {
  render() {
    let Booking = (
      <div className="booking_popup">
        <form className="booking_popup_form">
          <HeadlineBlock>
            <Headline>Подтверждение заказа</Headline>
            <button onClick={this.props.onClose} className="booking_popup_Button_close">Х</button>
          </HeadlineBlock>
          <div className="booking_popup_form_wrap">
            <TextFieldOnForm>
                Пожалуйста подтвердите Ваш заказ
            </TextFieldOnForm>
            <InfoOrder className="booking_popup_time">{`${this.props.day} в ${this.props.time}`}</InfoOrder>
            <TextFieldOnForm>
                Заполните данные
            </TextFieldOnForm>
            <InputBlock>
              <Input name="Name" />
              <Input name="Phone" />
              <Input name="Email" />
            </InputBlock>
            <ButtonBlock>
              <Button className="booking_popup_button_submit">Зарезервировать</Button>
              <Button className="booking_popup_button_cancel" onClick={this.props.onClose}>Отменить</Button>
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
