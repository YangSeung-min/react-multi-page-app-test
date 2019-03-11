import React from 'react';
import ReactDom from 'react-dom';

class SubPage extends React.Component {
  render() {
    return (
      <div className='blue_text'>
        React Multi Page Test SUB PAGE.ddd
      </div>
    );
  }
}

ReactDom.render(
  <SubPage />,
  document.getElementById('sub')
);