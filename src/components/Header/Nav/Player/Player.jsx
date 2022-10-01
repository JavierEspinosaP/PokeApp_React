import React from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import Button from '@mui/material/Button'
import Theme from '../../../../assets/pok_theme.mp3'
import Pause from '../../../../assets/pausa.png'
import Play from '../../../../assets/play.png'
import Stop from '../../../../assets/stop.png'

class Player extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      loop:true,
      volume: 0.5,
      isSeeking: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }
  componentDidMount () {
  setTimeout(() => {
    this.setState({
      playing: true
    })
  }, 500);    
  }
  componentWillUnmount () {

    this.clearRAF()
  }

  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleAutoPlay(){

  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
    this.renderSeekPos()
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    })
    this.renderSeekPos()
  }

  renderSeekPos () {
    if (!this.state.isSeeking) {
      this.setState({
        seek: this.player.seek()
      })
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }


  clearRAF () {
    raf.cancel(this._raf)
  }

  render () {
    return (
      <div className='player'>
        <ReactHowler
          src={Theme}
          playing={this.state.playing}
          loop={this.state.loop}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          volume={this.state.volume}
          ref={(ref) => (this.player = ref)}
        />

        <div className='volume'>
          <label>
            Volume:
            <span className='slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({ volume: parseFloat(e.target.value) })}
              />
            </span>
            {this.state.volume.toFixed(2)}
          </label>
        </div>

        <Button  onClick={this.handleToggle}>
          {(this.state.playing) ? <img className='buttonPlayer' src={Pause}></img> : <img className='buttonPlayer' src={Play}></img>}
        </Button>
        <Button  onClick={this.handleStop}>
        <img className='buttonPlayer' src={Stop}></img>
        </Button>
      </div>
    )
  }
}

export default Player
