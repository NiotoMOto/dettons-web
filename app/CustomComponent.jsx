import React from 'react';

export default class CustomComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  
  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  } 
  render() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        {this.state.isClicked &&
          <p> isClicked</p>
        } 
        <button type="button" onClick={::this.handleClick}> clic </button>
      </div>
    );
  }  
} 