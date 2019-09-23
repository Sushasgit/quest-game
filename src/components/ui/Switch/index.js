import React from 'react';

import './switch.scss';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultValue ? props.defaultValue : false
    };
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = (evt) => {
    evt.preventDefault();
    const { checked } = this.state;
    const { onChange } = this.props;
    const new_state = !checked;
    this.setState({
      checked: new_state,
    });
    if (typeof onChange === 'function') {
      onChange(new_state);
    }
  }

  render() {
    const { className } = this.props;
    const { checked } = this.state;
    const class_name = className || 'toggle';
    let wrapper_class = class_name
    if (checked) {
      wrapper_class += ` ${class_name}--checked`;
    }
    return (
      <div className={wrapper_class}>
        <div className={class_name + '__left'} />
        <div
          className={class_name + '__center'}
          onClick={this.handleClick.bind(this)}
          onTouchEnd={this.handleClick.bind(this)}
        />
        <div className={class_name + '__right'} />
      </div>
    )
  }
}

export default Switch;
