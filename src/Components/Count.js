import React from 'react';

class Count extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
componentDidMount(){
    var count = setInterval(
        () => this.tick(),
        1000
      );
      this.setState  ({
          count : count,
      })
}

// componentWillUnmount(){
//     clearInterval(this.count);
// }

tick() {
    this.setState({
      count: this.state.count + 1,
    });
    
  }
    render() {
        const displayTime = () => {
            if(this.state.count < 60) {
                return this.state.count + "second";
            }
            const SS = (this.state.count % 60);
            const MM = Math.floor((this.state.count / 60) % (60));
            const HH = Math.floor(this.state.count /(60*60));
            return `${HH}h:${MM}m:${SS}s`;
        }
        return(
            <div>
                <h2>{displayTime()}</h2>
            </div>
        )
    }
}



export default Count;