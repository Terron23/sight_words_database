import React , {Component} from 'react';
import * as actions from "./actions"
import { connect } from "react-redux";
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import SightWords from './Components/SightWords/sightwords'





  class App extends Component {
    render(){
  return (
    <div>
    <Nav />
    <Header />
    <SightWords/>
    </div>
  );
}
  }

export default connect(
  null,
  actions
)(App);
