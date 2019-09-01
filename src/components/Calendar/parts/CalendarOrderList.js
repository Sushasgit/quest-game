import React from 'react';
import styled, { withTheme } from 'styled-components';
import {CALENDAR_ORDER_LIST} from "../../../utils/constants";
import Button from "../../ui/Button";
import {LargeAndUp} from "../../../utils/break-points";
const List = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  color: ${data => (data.theme.Calendar.textColorOrderList)};
`;

const CalendarOrderList = () =>{
  let OrderList =
      <List>
      <LargeAndUp>
      <h2 className="calendar_order_list_headline">
          Доступные места
          {' '}
          {this.props.day}
      </h2>
      <ul className="calendar_order_list_ul">

          {
              CALENDAR_ORDER_LIST.map((item, i) => (
                  <li className="li_item_time">
                      <span className="item_time">{item.timeNight}</span>
                      {item.available
                          ? (

                              <div className="book_item_time">
                                  <span className="available_item_time">доступно для резервирования</span>
                                  <Button
                                      onClick={e => this.setState({ isOpenBookingTime: true, checkTime: item.timeNight })}
                                  >
                                      Зарезервировать
                                  </Button>
                              </div>
                          )
                          : (
                              <div className="book_item_time">
                                  <span className="available_item_time">уже зарезервировано</span>
                                  <Button
                                      onClick={() => { console.log(item.time); }}
                                  >
                                      Недоступно
                                  </Button>
                              </div>
                          )}
                  </li>
              ))
          }
      </ul>
  </LargeAndUp>
      </List>
  return (OrderList)
};

export default withTheme (CalendarOrderList);