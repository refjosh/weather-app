import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherBadge from "../weather-badge/weather-badge.component";

const WeatherDetails = ({ details }) => {
  return (
    <Row>
      <Col>
        <h1>More Details</h1>
      </Col>
      <WeatherBadge />
      <Col>
        <h1>Date</h1>
      </Col>
    </Row>
  );
};

export default WeatherDetails;
