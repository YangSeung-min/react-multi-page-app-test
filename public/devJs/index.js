import React from 'react';
import ReactDom from 'react-dom';

class IndexPage extends React.Component {
  render() {
    return (
      <div className='blue_text'>
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}

ReactDom.render(
  <IndexPage />,
  document.getElementById('index')
);