import styled from "styled-components";
import TableHead from "./TableHead";
import TableInfo from "./TableInfo";

const FlightTable = styled.table`
  background-color: rgb(46, 46, 46);
  text-align: left;
`;

const Table = () => {
  return (
    <FlightTable>
      <TableHead />
      <TableInfo />
    </FlightTable>
  );
};

export default Table;
