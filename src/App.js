import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ userId: '', title: '', body: '' });

  const { userId, title, body } = data;

  const handleChanges = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = axios.post('https://jsonplaceholder.typicode.com/posts', data);
    console.log(res);
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 mx-5'>
          <label for='UserId' className='form-label'>
            User Id
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            name='userId'
            value={userId}
            onChange={handleChanges}
          />
        </div>
        <div className='mb-3 mx-5'>
          <label for='Title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            name='title'
            value={title}
            onChange={handleChanges}
          />
        </div>
        <div className='mb-3 mx-5'>
          <label for='Body' className='form-label'>
            Body
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            name='body'
            value={body}
            onChange={handleChanges}
          />
        </div>

        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
