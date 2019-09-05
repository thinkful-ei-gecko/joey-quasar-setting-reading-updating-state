import React from 'react';


class Bomb extends React.Component{


    state = {
        count: 0
    }

componentDidMount(){
    this.interval = setInterval(()=> {
        console.log(this.state.count);
        this.setState({ count: this.state.count+1})
    }, 1000)
}
componentWillUnmount(){
    clearInterval(this.interval)
}
    render(){
        let word = ''
        if( this.state.count % 2 === 0){
            word ='tick'
        }
        if( this.state.count % 2 !== 0){
            word = 'tock'
        }
        if(this.state.count >= 8){
            word = 'BOOM!!!!';
            clearInterval(this.interval)
        }
        
    return(<div>
        <p>
            {word}
        </p>
      
        

    </div>)
}
}
export default Bomb;