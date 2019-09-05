import React from 'react';

class RouletteGun extends React.Component {

  // constructor(prop) {
  //   super(prop)
  // }

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  pullTrigger = (e) => {
    this.setState( { spinningTheChamber: true })
    let timeout = setTimeout(() => {
      this.setState({ 
        chamber: Math.ceil(Math.random() * 8), 
        spinningTheChamber: false});
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  };

  render() {

    let text = '';
    if (this.state.spinningTheChamber) {
      text = 'spinning the chamber and pulling the trigger!...'
    } else if (this.state.chamber !== this.props.bulletInChamber) {
      text = `you're safe!!`
      
    } else {
      text ='BANG!!!!'
    }

    return (
      <div className="roulette-gun">
        <button onClick={ () => this.pullTrigger()}>Pull the trigger!</button>
        <p> {text}
        </p>
      </div>
    )
  }
}

export default RouletteGun;