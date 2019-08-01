import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLabel = styled.label`
    display: inline-block;
    position: absolute;
    left: 15px;
    top: 5px;
    transition: all 150ms ease-in;
    font-size: 0.8em;
    color: #fff;

    transform: ${props => (props.active ? 'translateY(-35px)' : 'none')};
    text-shadow: ${props => (props.active ? '-2px -1px 5px rgba(255,220,38,0.79)' : 'none')};
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border: 1px solid #FFDC26;
`;

const InputBox = styled.div`
    position: relative;
`;

class Input extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      fieldActivate: false,
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.activateField = this.activateField.bind(this);
    this.disableFocus = this.disableFocus.bind(this);
  }

  activateField() {
    this.setState({
      fieldActivate: true,
    });
  }

  disableFocus() {
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({
        fieldActivate: false,
      });
    }
  }


  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
    this.activateField(e);
    e.preventDefault();
  }

  render() {
    const { fieldActivate, inputValue } = this.state;
    const { name } = this.props;
    return (
      <InputBox>
        <StyledLabel active={fieldActivate} htmlFor={name} className={fieldActivate ? 'field-active' : ''}>
          {name}
        </StyledLabel>
        <StyledInput
          id={name}
          type="text"
          value={inputValue}
          onFocus={this.activateField}
          onBlur={this.disableFocus}
          onChange={this.updateInputValue}
        />
      </InputBox>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
