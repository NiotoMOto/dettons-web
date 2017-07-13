import React from 'react';
import CustomComponent from './CustomComponent';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Dettons apps</h1>
        <CustomComponent title="Au revoir" />
      </div>
    );
  }
}
