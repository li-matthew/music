import React, { Component } from 'react';
import AudioSpectrum from 'react-audio-spectrum'
import song from '../media/01.mp3'
import App from '../App.js'

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioStatus: 'PAUSED',
    }
    this.audioElement = null
    this.playlist = [song]
  }
  componentDidMount() {
    this.audioElement = App.getElementById('audio')

    this.audioElement.oncanplay = (e) => {
      this.play()
    }
  }
  isSafari = () => {
    return window.navigator.userAgent.indexOf('Safari') > -1 && window.navigator.userAgent.indexOf('Chrome') === -1
  }
  pause = () => {
    this.audioEle.pause()
    this.setState({
      audioStatus: 'PAUSED'
    })
  }
  play = () => {
    this.audioEle.play()
    this.setState({
      audioStatus: 'PLAYING'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            {
              this.state.audioStatus === 'PAUSED' ? (
                <i onClick={this.play} className="iconfont icon-play"></i>
              ) : <i onClick={this.pause} className="iconfont icon-pause"></i>
            }<br/>
            <audio id="audio-element"
              preload="true"
              src={`${this.playlist[0]}`}
            >
            </audio>
            <AudioSpectrum
              id="audio-canvas"
              height={200}
              width={300}
              audioId={'audio-element'}
              capColor={'red'}
              capHeight={2}
              meterWidth={2}
              meterCount={512}
              meterColor={[
                {stop: 0, color: '#f00'},
                {stop: 0.5, color: '#0CD7FD'},
                {stop: 1, color: 'red'}
              ]}
              gap={4}
            />
            <p>meters with gradient colors</p>
          </div>
          <div className="card">
            {
              this.state.audioStatus1 === 'PAUSED' ? (
                <i onClick={this.play1} className="iconfont icon-play"></i>
              ) : <i onClick={this.pause1} className="iconfont icon-pause"></i>
            }<br/>
            <audio id="audio-element1"
              src={`${this.playlist[1]}`}
            >
            </audio>
            <AudioSpectrum
              height={200}
              width={300}
              audioId={'audio-element1'}
              capColor={'red'}
              capHeight={2}
              meterWidth={10}
              meterCount={512}
              meterColor={[
                {stop: 0, color: 'orange'},
                {stop: 0.5, color: 'red'},
                {stop: 1, color: '#FFF'}
              ]}
              gap={4}
            />
            <p>meterWidth: 10</p>
          </div>
          <div className="card">
            {
              this.state.audioStatus2 === 'PAUSED' ? (
                <i onClick={this.play2} className="iconfont icon-play"></i>
              ) : <i onClick={this.pause2} className="iconfont icon-pause"></i>
            }<br/>
            <audio id="audio-element2"
              preload="true"
              src={`${this.playlist[2]}`}
            >
            </audio>
            <AudioSpectrum
              height={200}
              width={300}
              audioId={'audio-element2'}
              capColor={'red'}
              capHeight={2}
              meterWidth={2}
              meterCount={512}
              meterColor={[
                {stop: 0, color: 'pink'},
                {stop: 1, color: 'red'}
              ]}
              gap={1}
            />
            <p>meterCount: 20<br/>gap: 1</p>
          </div>
          {
            !this.isSafari() && <div className="card">
              {
                this.state.audioStatus3 === 'PAUSED' ? (
                  <i onClick={this.play3} className="iconfont icon-play"></i>
                ) : <i onClick={this.pause3} className="iconfont icon-pause"></i>
              }<br/>
              <audio id="audio-element3"
                preload="true"
                src={`${this.playlist[3]}`}
              >
              </audio>
              <AudioSpectrum
                height={200}
                width={300}
                audioId={'audio-element3'}
                capColor={'#92BF3F'}
                capHeight={10}
                meterWidth={10}
                meterCount={20}
                meterColor={'#41BF3F'}
                gap={10}
              />
              <p>gap: 10<br/> capHeight:10 <br/> capColor: '#92BF3F <br/> meterColor: '#41BF3F'}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Media;



// WEBPACK FOOTER //
// ./src/App.js

// export default function Home(props) {
// 	return (
// 		<div className='title'>
// 			<h2>Media</h2>
// 			<audio id='audio' src='../media/01.mp3'></audio>
// 			<canvas id='canvas' width='300' height='200'></canvas>
// 		</div>
// 		)
// }