
import React, { Component} from 'react';
import { ReactMic } from 'react-mic';
 
export class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
 
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        {/* <button onTouchTap={this.stopRecording} type="button">Stop</button> */}
        <a target="_blank" href="blob:https://hackingbeauty.github.io/59378f64-25ed-4a9e-9941-faeaf193aab0">Sound</a>
        <audio controls src="blob:https://hackingbeauty.github.io/59378f64-25ed-4a9e-9941-faeaf193aab0"></audio>
      </div>
    );
  }
}

export default Record;