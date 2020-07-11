import React from 'react';
import './App.css';
import Movies from './components/PhoneBook';

import { Button } from 'antd';

const friends =[
  {
  'id' : 1,
  'img' : 'https;//placeimg.com/64/64/1',
  'name' : '안보현',
  'phone' : '010-123-1234',
  'address' : 'Seoul'
},
{
  'id' : 2,
  'img' : 'https;//placeimg.com/64/64/2',
  'name' : '강동원',
  'phone' : '010-234-3456',
  'address' : 'Canada'
},
{
  'id' : 3,
  'img' : 'https;//placeimg.com/64/64/3',
  'name' : '김수현',
  'phone' : '010-345-4567',
  'address' : 'Bejing'
}
]

function App() {
  return (
    <div>
      {
        friends.map( m =>{
          return(
            <Movies
            key={m.id}
            id={m.id}
            name = {m.name}
            img = {m.img}
            phone = {m.phone}
            address = {m.address}
            />
          );
        })
      }
    </div>
  );
}

export default App;
