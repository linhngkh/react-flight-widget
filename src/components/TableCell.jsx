import styled from "styled-components";

const DataCell = styled.td``;

const TableCell = ({ word }) => {
  return <DataCell>{word}</DataCell>;
};

export default TableCell;
