import React, { useState, useEffect } from "react";

import styled from "styled-components";
import TableRow from "./TableRow";

const TableBody = styled.tbody``;

const TableInfo = () => {
  const [flights, setFlights] = useState(null);

  const getFlights = () => {
    fetch("http://localhost:5000/flights")
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFlights();
  }, []);
  return (
    <TableBody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </TableBody>
  );
};

export default TableInfo;
