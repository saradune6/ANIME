import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';



ReactDOM.render(
  <>
   <h1 className='heading_style'>List of Top ANIME Series</h1>
   {Sdata.map((val)=> {
    return (
      <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
      />
    );
    })}
  </>,
  document.getElementById('root')
);


