import React, { Component} from 'react';
import Speech from 'react-speech';
import Modal from './sub_components/modal'
import {connect} from 'react-redux';
import { fetchWords } from '../../actions';
import axios from 'axios'

class SightWords extends Component{
  constructor(){
    super();
    this.state={
      answer:"d-none",
      sightwords: []
    }
  }
 
componentDidMount(){
  axios.get('/api/sight_words').then(response=> {
    this.setState({sightwords:response.data})
  }).catch(err=> this.setState({sightwords:"Error"}))


}

handleVoices=()=>{
    if(typeof speechSynthesis === 'undefined') {
        console.log("No voices");
      }
    var voices = speechSynthesis.getVoices();
  
    for(let i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
      console.log(document.getElementById("voiceSelect").appendChild(option))
    }
  

}


handleWords =()=> {
  
    // let arr = ["i", "a", "in", "be", "no", "he", "do", "go", "an", "is", "see", "can", "my", "to", "we", "and", 
    // "the", "like", "she", "but", "play", "said", "get", "big", "our"];

    let obj = this.state.sightwords

    return obj.map(words=>{
      let word = words.word
        return (<div className="tcol col-md-3 tdiv">
        <Speech 
        styles={styles} 
        text={`${word}`} 
        pitch={1.4}
        lang="en-US" 
        rate="0.5"
        voice="Fred" 
        textAsButton={true}
        />
        <canva  style={{"fontSize":"20px"}}>
      <button onClick={()=>this.handleReveal(`${word}_id`)} className="btn btn-primary">Spell</button>
     

<div style={{"display":"none"}}  id={`${word}_id`}>
<hr style={{"padding":"7px"}}/>
 
      <i id={`${word}_answer`}></i>

      <input id={word} type="text" name={word} defaultValue="" /> 
     
      <button onClick={() =>this.handleSpelling(word, document.getElementById(word).value)}
       className="btn btn-primary">Submit</button>
       </div>
      </canva>
        </div>)
    })
}



handleReveal =(id)=>{
if(document.getElementById(id).style.display !== "none"){
  document.getElementById(id).style.display = "none";

}
else{
  document.getElementById(id).style.display = "block";
}
}

handleSpelling =(spell, word)=>{
  let id = spell+"_answer";
if(word === spell){
document.getElementById(id).innerHTML = "&#10004";
document.getElementById(id).style.color = "green";
}
else{
  document.getElementById(id).innerHTML = "x";
  document.getElementById(id).style.color = "red";
 
}

}

 render(){
   if(this.state.sightwords < 1){
     return 'Loading'
   }
  return (
<div className="container">

<a   className="btn btn-primary btn-xl rounded-pill mt-5"
        data-toggle="modal" data-target="#myModal">
           Add New Sight Words +
        </a>
  <hr />
  {/* <Record /> */}
<div className="row text-center">

    {this.handleWords()}
    {this.handleVoices}
</div>
<Modal />
</div>
  );
}
}


const styles =  {
    container: {
    width: '100%'
  },
  text: {
    width: '100%',
    display: ''
  },
  play: {
    hover: {
      backgroundColor: 'purple'
    },
    button: {
      width: '34',
      height: '34',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  stop: {
    hover: {
      backgroundColor: 'GhostWhite'
    },
    button: {
      width: '34',
      height: '34',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  pause: {
    hover: {
      backgroundColor: 'purple'
    },
    button: {
      width: '34',
      height: '10',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  resume: {
    hover: {
      backgroundColor: 'GhostWhite'
    },
    button: {
      width: '34',
      height: '15',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  }
};


function mapStateToProps({sight}){
  //State from reducers/index.js file  gets passed to header component as props
  return {sight}
}

export default connect(mapStateToProps, {fetchWords})(SightWords);

