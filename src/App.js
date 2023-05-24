import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({ name: '', rollNo: '' });
  
  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value }); // IT WILL SAVE OLD VALUE AND ANOTHER VALUE...
    console.log(e.target.name, ' : ', e.target.value);
  }
  let { name, rollNo } = inputdata;
  function onchange() {
    setInputarr([...inputarr, { name, rollNo }]);

    console.log(inputdata, 'input data what we enter');
    setInputdata({ name: '', rollNo: '' });
  }
  function changehandle2() {
    console.log('object store in array', inputarr);
  }
  return (
    <div className="App">
      <input
        type="text"
        autocomplete="off"
        name="name"
        value={inputdata.name}
        onChange={changehandle}
        placeholder="enterName"
      />{' '}
      <input
        type="text"
        autocomplete="off"
        name="rollNo"
        value={inputdata.rollNo}
        onChange={changehandle}
        placeholder="enterRollnumber"
      />{' '}
      <button onClick={onchange}>Add it</button>
      <button onClick={changehandle2}>check array in console</button>
      <table border={1} width="30%" cellPadding={10}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Roll No</td>
          </tr>
          {inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
