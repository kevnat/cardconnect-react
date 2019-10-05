import React from 'react';

export const DisplayResponse = () =>
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
        {JSON.stringify("this.state")}
    </pre>
  </div>;