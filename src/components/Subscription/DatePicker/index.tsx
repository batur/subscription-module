import React, { Component } from 'react';

import { Card, Col, Button } from 'react-bootstrap';
import DayPicker from 'react-day-picker';

import { date } from 'lib';

export default class DatePicker extends Component<{}, { selectedDay: any }> {
  constructor(props: any) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day: Date) {
    this.setState({
      selectedDay: day,
    });
  }

  render() {
    return (
      <Card className="shadow rounded-4">
        <Card.Body>
          <section className="ms-lg-5 my-3 text-center text-lg-start ">
            <div className="mb-4 text-brown">
              <h2 className="mb-3 d-none d-lg-block ">Change delivery date</h2>
              <p className="opacity-75">
                Change your prefered delivery date. We'll deliver on th same day in two months time
              </p>
            </div>
            <Col xs="12" lg="9">
              <DayPicker
                className="shadow-sm rounded-4 border border-light"
                firstDayOfWeek={1}
                disabledDays={{ daysOfWeek: [0] }}
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
              />
            </Col>
            <div className="mt-3 o-50">
              <p>Your next heavy flow will be delivered:</p>
              <p>
                {this.state.selectedDay &&
                  `${date.DateToStringWithFormat(
                    this.state.selectedDay,
                    'd'
                  )}st ${date.DateToStringWithFormat(this.state.selectedDay, 'MMMM')}`}
              </p>
            </div>
            <div className="d-grid d-lg-block mt-4">
              <Button variant="dark" size="lg" className=" block rounded-pill">
                <span>SAVE</span>
              </Button>
            </div>
          </section>
        </Card.Body>
      </Card>
    );
  }
}
