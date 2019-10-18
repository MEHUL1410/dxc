import React, { Component } from 'react';

class Edit extends Component {

    constructor(){
        super();
        this.state=({
            value:'',
            msg: '',
            name : 'add'
        })
            this.change = this.change.bind(this)
            this.add=this.add.bind(this)
           this.message=this.message.bind(this)
    }
    change(){
               
               if(this.state.value !== 0){
              
                   this.message();
                   this.setState({name : "edit"})
               }
               if(this.state.name === "edit"){
                    this.setState({name: "add"}) 
                   
                }
               }
               
    
    add(e){
        
        this.setState({value:e.target.value})
    }
     message(e){
      
        this.setState({
            msg : this.state.value
        })
       
       
    } 
    render() {
        return (
            
            <div>
                comment:<input type ="text" value={this.state.value}  onChange = {this.add}></input>
                <div><button onClick = {this.change}>{this.state.name}</button></div>
                {this.state.msg}
            </div>
        );
    }
}

export default Edit;