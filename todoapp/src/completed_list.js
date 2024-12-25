import React, { Component } from 'react';
import './style.css';

class Completed extends Component{
    state={}

    render()
    { let item=this.props.item
        return(
         
        item.map((item,index)=>{
            if(item.status === 1){
                return(
                    <div className="mt-5" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="bg-success"><span>{index+1}. {item.new}</span><span className="float-right"><a href="#" onClick={()=>this.props.handleclick(item.id)}>   X</a></span></h3>
                            </div>
                        </div>
                    </div>
            )}
            

        })

        );
    }
}

export default Completed;