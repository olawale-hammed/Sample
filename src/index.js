import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component{
	constructor(){
		super();
		this.state={input: ''}
	}
	onButton = val =>{
		this.setState({input: this.state.input + val.target.value})
	}
	decimal = val =>{
		this.setState({input: this.state.input})
		if(this.state.input.indexOf('.') === -1){
			this.setState({input: this.state.input + val.target.value})
		}
		
	}
	clear = val =>{
			this.setState({input: ""})
		}
	delete = val =>{
			this.setState({input: this.state.input.slice(0,-1)})
		}
	equal = val =>{
		this.setState({input: eval(this.state.input).toString()});	
	}
	
	render(){
		return(
			<div>
			    <input value={this.state.input} />
			    <button value='CE' className='clear' onClick={this.clear}> CE </button>
	  		    <button value='C' className='clear' onClick={this.delete}> Del </button>
		  		<button value='9' onClick={this.onButton}> 9 </button>
		  		<button value='8' onClick={this.onButton}> 8 </button>
		  		<button value='7' onClick={this.onButton}> 7 </button>
		  		<button value='+' className='butt' onClick={this.onButton}> + </button>
		  		<button value='6' onClick={this.onButton}> 6 </button>
		  		<button value='5' onClick={this.onButton}> 5 </button>
		  		<button value='4' onClick={this.onButton}> 4 </button>
		  		<button value='-' className='butt' onClick={this.onButton}> - </button>
		  		<button value='3' onClick={this.onButton}> 3 </button>
		  		<button value='2' onClick={this.onButton}> 2 </button>
		  		<button value='1' onClick={this.onButton}> 1 </button>
		  		<button value='*' className='butt' onClick={this.onButton}> * </button>
		  		<button value='0' onClick={this.onButton}> 0 </button>
		  		<button value='.' onClick={this.decimal}> . </button>
		  		<button value='=' onClick={this.equal}> = </button>
		  		<button value='/' className='butt' onClick={this.onButton}> / </button>
		  	</div>
		);
  	}
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
