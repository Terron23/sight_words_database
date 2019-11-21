
import React, { Component} from 'react';
import axios from 'axios'
 
export class Modal extends Component {

  handleSubmit=(e)=>{
    e.preventDefault();
    const words = e.target.words.value;
    axios.post('/api/add_words',{
      words
    }).then(function (response) {
      document.getElementById('words').value = ''
     window.location = '/'
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  render() {
    return (
      <div>
       

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

   
      <div className="modal-body">
      <form onSubmit={this.handleSubmit}>

  <div className="form-group">
    <label for="pwd">New Words:</label>
    <input type="text" className="form-control" id="words" name="words" autoComplete="off" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>


    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Modal;