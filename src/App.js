import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffff;
`;

const Calculator = styled.div`
  background-color: #00a8ff;
  border: 10px solid #fa86c4;
  border-radius: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 350px;
  padding: 55px;
`;

const Display = styled.input`
  grid-column: span 4;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 6px;
  font-size: 24px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #00ffff;
  color: white;
  font-size: 20px;
  padding: 7px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }
`;

const CalculatorButton = styled(Button)`
  grid-column: span 1;
`;

const OperatorButton = styled(Button)`
  grid-column: span 1;
  background-color: #fa86c4;
  &:hover {
    background-color: #eee;
  }
`;

export default function App() {
  const [primeiroNum, setPrimeiroNum] = useState("");
  const [segundoNum, setSegundoNum] = useState("");
  const [operador, setOperador] = useState("");

  const valorButtonClick = (value) => {
    if (value === "=") {
      try {
        const num1 = parseFloat(primeiroNum);
        const num2 = parseFloat(segundoNum);

        if (operador === "+") {
          setPrimeiroNum((num1 + num2).toString());
        } else if (operador === "-") {
          setPrimeiroNum((num1 - num2).toString());
        } else if (operador === "*") {
          setPrimeiroNum((num1 * num2).toString());
        } else if (operador === "/") {
          setPrimeiroNum((num1 / num2).toString());
        }

        setSegundoNum("");
        setOperador("");
      } catch (error) {
        setPrimeiroNum("Erro :(");
      }
    } else if (value === "C") {
      setPrimeiroNum("");
      setSegundoNum("");
      setOperador("");
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperador(value);
      setSegundoNum(primeiroNum);
      setPrimeiroNum("");
    } else {
      setPrimeiroNum(primeiroNum + value);
    }
  };

  return (
    <Container>
      <Calculator>
        <Display type="text" value={primeiroNum} readOnly />
        <CalculatorButton onClick={() => valorButtonClick("7")}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("8")}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("9")}>
          9
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("/")}>/</OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick("4")}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("5")}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("6")}>
          6
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("*")}></OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick("1")}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("2")}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("3")}>
          3
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("+")}>+</OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick(".")}>
          .
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("0")}>
          0
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("=")}>=</OperatorButton>
        <OperatorButton onClick={() => valorButtonClick("C")}>C</OperatorButton>
      </Calculator>
    </Container>
  );
}
