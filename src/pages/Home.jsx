import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addData } from "../redux/bmiSlice";

function Home() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const calculate = () => {
    if (height === 0 || weight === 0 || name === "") {
      return alert("Please fill in all fields");
    }

    dispatch(addData(name, height, weight));
    navigation("/result");
  };

  return (
    <Container className="homeContainer">
      <h1>Calculate</h1>
      <Row>
        <p>
          This is a simple BMI (Body Mass Index) calculator. It is designed to
          help you calculate your BMI and determine if you are underweight,
          normal weight, overweight, or obese.
        </p>
        <p>
          To use the calculator, simply enter your weight and height, then click
          the "Calculate" button. Your BMI will appear below the button.
        </p>
      </Row>
      <Row>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <label htmlFor="weight" className="form-label">
          Weight
        </label>
        <input
          className="form-control"
          type="number"
          id="weight"
          autoComplete="off"
          min={0}
          max={400}
          placeholder="Weight (kg)"
          onChange={(e) => {
            e.preventDefault();
            setWeight(e.target.value);
          }}
        />
        <label htmlFor="height" className="form-label">
          Height
        </label>
        <input
          type="number"
          id="height"
          autoComplete="off"
          min={0}
          max={300}
          placeholder="Height (cm)"
          onChange={(e) => {
            e.preventDefault();
            setHeight(e.target.value);
          }}
        />
      </Row>
      <button onClick={calculate}>Calculate</button>
    </Container>
  );
}

export default Home;
