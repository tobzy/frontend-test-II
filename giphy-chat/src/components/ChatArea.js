import React, {Component} from 'react';
import {connect} from 'react-redux';
import InfoBox from './sharedComponents/infoBox/index';
import {hideInfoBox} from './sharedComponents/infoBox/actions';
import {fetchGif} from '../actions/index';

import {PropagateLoader} from 'react-spinners';

import '../assets/css/styles.css';
import '../assets/css/mobile.css';

class ChatArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chatInput: ''
    }
  }

  componentDidUpdate(){
    document.getElementById("gifs-area").scrollTop = document.getElementById("gifs-area").scrollHeight
  }

  changeChatInput(e) {
    this.setState({
      chatInput: e.target.value
    })
  }

  fetchGif(e){
    e.preventDefault()
    this.props.fetchGif(this.state.chatInput)
    this.setState({
      chatInput:''
    })
  }

  render() {
    return (
      <div>
        <InfoBox show={this.props.infoBoxShow} boxType={this.props.infoBoxType} message={this.props.infoBoxMessage}
                 onClickHandler={this.props.hideInfoBox}/>
        <div className="chat-area">
          <header>
            <p>giphy chat</p>
          </header>
          <section id="gifs-area">
            {this.props.gifs.map((gif) => {
              return <div className="gif">
                <img src={gif.image.url}/>
                <a target="_blank" href={gif.url}>Go to image</a>
              </div>
            })}
          </section>

          <section className="input-area">
            <div className="loader">
              <PropagateLoader
                color={'rgb(54, 215, 183)'}
                loading={this.props.loadingGif}
              /></div>
            <form onSubmit={(e) => this.fetchGif(e)}>
              <input type="text" value={this.state.chatInput} onChange={this.changeChatInput.bind(this)}
                     placeholder="Enter giphy command"/>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    infoBoxShow: state.infoBox.show,
    infoBoxType: state.infoBox.boxType,
    infoBoxMessage: state.infoBox.message,
    loadingGif: state.loadingBar.loading,
    gifs:state.gifs.gifChats
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideInfoBox: () => dispatch(hideInfoBox()),
    fetchGif: (input) => dispatch(fetchGif(input))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
