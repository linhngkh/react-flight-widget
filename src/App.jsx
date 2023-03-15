import Table from "./components/Table";
import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  border-radius: 18px;
  padding: 10px;
  box-shadow: 10px 5px 5px black;
`;
const Header = styled.header`
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <Header>DEPARTURES</Header>
      <Table />
    </Container>
  );
}

export default App;
