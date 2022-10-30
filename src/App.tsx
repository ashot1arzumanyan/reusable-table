import * as React from "react";
import styled from "styled-components";

import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Table from "./components/Table";

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Search />
      <Table />
      <Pagination />
    </Container>
  );
};

export default App;
