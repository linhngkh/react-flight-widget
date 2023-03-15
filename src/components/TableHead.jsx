import React from "react";
import styled from "styled-components";

const TableHeading = styled.thead``;
const TableRow = styled.tr``;
const EmptyHeader = styled.th`
  
`;
const Time = styled.th`
  width: 160px;
`;
const Destination = styled.th`
  width: 789px;
`;

const Flight = styled.th`
  width: 205px;
`;
const Gate = styled.th`
  width: 135px;
`;

const Remarks = styled.th`
  width: 260px;
`;
const TableHead = () => {
  return (
    <TableHeading>
      <TableRow>
        <EmptyHeader></EmptyHeader>
        <Time>TIME</Time>
        <Destination>DESTINATION</Destination>
        <Flight>FLIGHT</Flight>
        <Gate>GATE</Gate>
        <Remarks>REMARKS</Remarks>
      </TableRow>
    </TableHeading>
  );
};

export default TableHead;
