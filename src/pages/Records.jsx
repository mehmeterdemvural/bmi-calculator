import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";

const Records = () => {
  const bmiRecords = useSelector((state) => state.bmi);

  return (
    <Container className="recordContainer">
      <h1>BMI Records</h1>
      <Row>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Weight</th>
              <th>Height</th>
              <th>BMI</th>
            </tr>
          </thead>
          <tbody>
            {bmiRecords.map((record, index) => (
              <tr key={record.id}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.weight}</td>
                <td>{record.height}</td>
                <td>{record.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default Records;
