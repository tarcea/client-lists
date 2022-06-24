import React, {
  useEffect,
  useMemo,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllLists from './components/AllLists';
import List from './components/List';
import FourOFour from './components/FourOFour';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main className='app__body'>
        <Routes>
          <Route path='/' element={<AllLists />} />
          <Route path='/lists' element={<AllLists />} />
          <Route path='/lists/:listId' element={<List />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
