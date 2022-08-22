import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  > button {
    width: 50px;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Test</p>
        <Container className="button_container">
          <button>+</button>
          <button>-</button>
        </Container>
      </header>
    </div>
  );
}

export default App;
