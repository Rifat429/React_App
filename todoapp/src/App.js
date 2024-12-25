import React, { Component } from 'react';
import Completed from './completed_list.js';
import Form from './form.js';
import Pending from './pending_list.js';


class APP extends Component{

    state= {
        task:[]
        
    }
    handleclick(id,event){
        let alltask= this.state.task;
        console.log(id)
        let itemIndex;
        alltask.forEach(function(eachtask,index){
            if(eachtask.id=== id){
                    itemIndex=index
            }
        })
        alltask.splice(itemIndex,1);
        this.setState({task:alltask})
        // console.log(this.state.task)
        // event.preventDefault();



    }

    handlesubmit(event){
        let new_task = document.querySelector('#task').value;
        document.querySelector('#task').value='';
        let alltask = this.state.task;

        alltask.push({id:Date.now(), new:new_task,status:0})
        this.setState({task:alltask})
        console.log(this.state)
        event.preventDefault();

    }

    handlecheck(id){
        let alltask= this.state.task;
        let itemIndex;

        alltask.forEach(function(eachtask,index){
            if(eachtask.id=== id){
                    itemIndex=index
            }
        })
       alltask[itemIndex].status=1
       this.setState({task:alltask})
        // console.log(this.state.task)
    }

    render(){
        return(
            <div>
                <nav className="navbar bg-primary">
                    <h4 className="navbar-brand text-white"> Todo APP</h4>
                </nav>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <Form handlesubmit={this.handlesubmit.bind(this)}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6 bg-warning">
                            <h3 className="bg-light">Pending Task</h3>
                            <Pending item={this.state.task} handlecheck={this.handlecheck.bind(this)}/>
                        </div>
                        <div className="col-6">
                            <h3 className="bg-info">Completed Task</h3>
                            <Completed item= {this.state.task} handleclick={this.handleclick.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default APP;