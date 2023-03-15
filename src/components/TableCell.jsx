import styled from "styled-components";
import TableLetter from "./TableLetter";

const DataCell = styled.td``;

const TableCell = ({ word }) => {
  return (
    <DataCell>
      {Array.from(word).map((letter, index) => (
        <TableLetter letter={letter} key={index} index={index} />
      ))}
    </DataCell>
  );
};

export default TableCell;
