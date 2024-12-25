import React, { Component } from 'react';
import './style.css';

class Pending extends Component{
    state={}

    render()
    { let item= this.props.item;
        // console.log(item.new)
   

        return(
      
        item.map( 
                (item,index)=>{ 

                if(item.status === 0){

                   return(
                    <div className="mt-5" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="bg-danger text-white"><input onChange={()=> this.props.handlecheck(item.id)}type="checkbox"/><span className="pl-3"> {item.new}</span></h3>
                            </div>
                        </div>
                    </div>
                        )
                }


        }
                    )
                );
    }
}

export default Pending;