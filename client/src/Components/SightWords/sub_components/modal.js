
import React, { Component} from 'react';
import axios from 'axios'
 
export class Modal extends Component {

  handleSubmit=(e)=>{
    e.preventDefault();
    const words = e.target.words.value;
    axios.post('/api/add_words',{
      words
    }).then(function (response) {
      let temp = document.getElementById('words').value
      document.getElementById('words').value = ''
     window.location = `/#${temp}`
     window.location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  render() {
    return (
      <div>
       

{/* <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

   
      <div className="modal-body"> */}
      <form onSubmit={this.handleSubmit} className="form" style={{"padding":"20px"}} id="wordForm">
      <label for="pwd">Add New Words:</label>
  <div className="input-group col-md-6 col-sm-12">
    <input type="text" className="form-control" id="words" name="words" autoComplete="off" required/>

    <div class="input-group-append">
    <button type="submit" className="btn btn-primary form-group">Submit</button>
  </div>
  </div>

</form>

      </div>


//     </div>
//   </div>
// </div>
//       </div>
    );
  }
}

export default Modal;