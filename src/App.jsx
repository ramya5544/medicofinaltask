import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Medico from './Medico';
import SearchBar from './SearchBar';
import SalesInformation from './SalesInformation';
import HeaderTags from './HeaderTags';
import ListItems from './ListItems';
import TableData from './TableData';

function App(props) {
  return (
    <div>
      <Medico/>
      <SearchBar/>
      <SalesInformation/>
      <HeaderTags/>
      <ListItems/>
      <TableData/>
    </div>
  );
}

export default App;