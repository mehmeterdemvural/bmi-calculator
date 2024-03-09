import React from "react";
import { Container, Row } from "reactstrap";

import { useSelector } from "react-redux";
import bmiStatus from "../data/bmiStatus";

function Result() {
  const bmi = useSelector((state) => state.bmi[state.bmi.length - 1]);
  let result;

  if (bmi?.score < 18.5) {
    result = bmiStatus[0];
  }
  if (bmi?.score >= 18.5 && bmi.score < 25) {
    result = bmiStatus[1];
  }
  if (bmi?.score >= 25 && bmi.score < 30) {
    result = bmiStatus[2];
  }
  if (bmi?.score >= 30 && bmi.score < 35) {
    result = bmiStatus[3];
  }
  if (bmi?.score >= 35 && bmi.score < 40) {
    result = bmiStatus[4];
  }
  if (bmi?.score >= 40) {
    result = bmiStatus[5];
  }

  return (
    <Container className="resultContainer">
      <h1>Result</h1>
      {result ? (
        <Row>
          <h2>Dear {bmi?.name},</h2>
          <p>
            <strong>BMI:</strong> {bmi?.score}
          </p>
          <p>
            <strong>Status:</strong> {result?.statu}
          </p>
          <p>
            <strong>Range:</strong> {result?.range}
          </p>
          <p>
            <strong>Advice:</strong> {result?.advice}
          </p>
          <p>
            <strong>Warning:</strong> {result?.warning}
          </p>
        </Row>
      ) : (
        <p>No data</p>
      )}
    </Container>
  );
}

export default Result;
