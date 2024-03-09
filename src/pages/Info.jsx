import React from "react";

import { Container, Row } from "reactstrap";

function Info() {
  return (
    <Container className="infoContainer">
      <h1>Body Mass Index (BMI) Information</h1>
      <Row>
        <h2>What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a measure used to estimate body fat based on
          a person's height and weight. BMI is calculated by dividing weight in
          kilograms by height in meters squared.
        </p>
      </Row>
      <Row>
        <h2>BMI Calculation</h2>

        <p>BMI = Weight in kilograms / (Height in meters * Height in meters)</p>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li>Weight: 70 kg</li>
          <li>Height: 1.70 m</li>
        </ul>

        <p>BMI = 70 / (1.70 * 1.70) = 24.22</p>
      </Row>

      <Row>
        <h2>BMI Classification</h2>
        <table>
          <thead>
            <tr>
              <th>BMI Value</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Under 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Obese Class 1</td>
            </tr>
            <tr>
              <td>35.0 - 39.9</td>
              <td>Obese Class 2</td>
            </tr>
            <tr>
              <td>40.0 and above</td>
              <td>Obese Class 3</td>
            </tr>
          </tbody>
        </table>
      </Row>

      <Row>
        <h2>BMI Advice</h2>

        <ul>
          <li>
            BMI is not a sufficient measure for a general health assessment on
            its own. Muscle mass, fat distribution, and age should also be
            considered.
          </li>
          <li>
            If your BMI is over 25, it is recommended that you consult your
            doctor and create a weight loss plan.
          </li>
          <li>
            Healthy eating and regular exercise are important for weight loss.
          </li>
          <li>
            Avoid quick weight loss methods and focus on losing weight in a
            healthy way.
          </li>
          <li>
            You can get support from your doctor and dietitian for weight loss
            and maintenance.
          </li>
        </ul>
      </Row>
      <Row>
        <h2>Limitations of BMI</h2>

        <ul>
          <li>
            BMI can give inaccurate results for people with high muscle mass.
          </li>
          <li>
            BMI may also not be accurate for the elderly and pregnant women.
          </li>
          <li>BMI should only be used as a general assessment tool.</li>
        </ul>
      </Row>
      <Row>
        <h2>Further Information</h2>

        <ul>
          <li>
            <a href="URL Ministry of Health BMI">
              Ministry of Health - Body Mass Index
            </a>
          </li>
          <li>
            <a href="URL Healthy Weight Guide">
              T.C. Ministry of Health - Healthy Weight Guide
            </a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Info;
