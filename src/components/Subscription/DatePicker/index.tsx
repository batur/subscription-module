import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
export default class DatePicker extends Component<{}, { selectedDay: any }> {
  constructor(props: any) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day: any) {
    console.log(day);

    this.setState({
      selectedDay: day,
    });
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <section className="ms-lg-5 my-3 text-center text-lg-start ">
            <div className="mb-4">
              <h2>Change delivery date</h2>
            </div>
            <div className="w-75">
              <DayPicker
                className="shadow"
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
              />
            </div>
          </section>
        </Card.Body>
      </Card>
    );
  }
}
