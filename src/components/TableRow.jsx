import React from "react";
import styled from "styled-components";
import TableCell from "./TableCell";

const TableRows = styled.tr``;
const DataCell = styled.td``;

const TableRow = ({ flight }) => {
  const changeWord = Object.values(flight);

  return (
    <TableRows>
      <DataCell>✈️</DataCell>
      {changeWord?.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </TableRows>
  );
};

export default TableRow;
