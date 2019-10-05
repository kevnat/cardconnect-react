import React from 'react';

export const DisplayResponse = props =>
  <div 
    style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
        <strong>Response</strong> ={' '}
        {JSON.stringify(props,null, 2)}
    </pre>
  </div>;