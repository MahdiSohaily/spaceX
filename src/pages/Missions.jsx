import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Missions() {
  return(
    <div className="wrapper">
      <table className='table'>
        <thead>
          <tr>
            <th className='mission'>Mission</th>
            <th className='description'>Description</th>
            <th className='status'>Status</th>
            <th className='join'>.</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
