import React from 'react';
import ReactDOM from 'react-dom';
import BubbleSort from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BubbleSort />, div);
  
});
