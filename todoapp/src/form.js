import React, { Component } from 'react';

class Form extends Component {
   state = {};

   render() {
       return (
           <form className="form" onSubmit={this.props.handlesubmit}>
               <label>Add Task</label>
               <input type="text" id="task" className="form-control" /><br />
               <input type="submit" className="btn btn-primary" />
           </form>
       );
   }
}

export default Form;
