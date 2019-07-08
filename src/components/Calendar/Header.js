import React from 'react';

export default class Header extends React.PureComponent {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const action = event.target.id;
        const currentMonth = this.props.currentMonth;
        if (action === 'previous') {
            currentMonth.subtract(1, 'months');
        }
        if (action === 'next') {
            currentMonth.add(1, 'months');
        }
        this.props.onHeaderChange(currentMonth);
    }

    render() {
        return <div className="calendar__header">
                    <button className="button is-light" id='previous' onClick={this.onChange}>
                        Previous
                    </button>
                    <div className="calendar__month-name">{this.props.currentMonth.format('MMMM - YYYY')}</div>

                    <button id='next' onClick={this.onChange}>
                        Next
                    </button>
            </div>;

    }
}