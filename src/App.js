import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentList from './components/DocumentList';
import DocumentDetail from './components/DocumentDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={DocumentList} />
        <Route path="/documents/:id" component={DocumentDetail} />
      </Routes>
    </Router>
  );
};

export default App;
