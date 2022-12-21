import React, { useState } from 'react';

import Test from './Test';
import cs from './App.module.css';

import data_nn from './resources/data.json';


export default function App() {
  const [data, setData] = useState('');

  return (
    <>
      {
        data !== ''
          ? <Test data={data}></Test>
          : <div className={cs.containerCourses}>
            <div className={cs.course} onClick={() => setData(data_nn)}>Интеллекутальная собственность</div>
            </div>
      }
    </>
  );
}
