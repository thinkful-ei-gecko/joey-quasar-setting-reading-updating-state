import React from 'react';


class HelloWorld extends React.Component {

  state = {
    who: 'world'
  }

  changeState = (e) => {
    this.setState( { who : e })
  }

  render() {

    return (
      <div >
        <button onClick={ () => this.changeState('World')} >World</button>
        <button onClick={ () => this.changeState('Friend')} >Friend</button>
        <button onClick={ () => this.changeState('React')} >React</button>
        <p>Hello, {this.state.who}</p>
      </div>
    )
  };

}

export default HelloWorld;