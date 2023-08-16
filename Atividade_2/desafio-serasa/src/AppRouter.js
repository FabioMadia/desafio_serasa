import React from 'react';
import EvaluationForm from './EvaluationForm';
import List from './List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EvaluationForm />} />
        <Route exact path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
