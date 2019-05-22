import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const sounds = [
  {
   soundId:'Horn',
   key:'Q',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674689/sample-swap/horn/horn-section-godown.mp3',
   keyCode:81
  },
  {
   soundId:'Flute',
   key:'W',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674456/sample-swap/flute/192_flute-madness.mp3',
   keyCode:87
  },
  {
   soundId:'Church-Organ',
   key:'E',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674666/sample-swap/piano/almost-the-doors-organ.mp3',
   keyCode:69
  },
  {
   soundId:'Saxophone',
   key:'A',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532675116/sample-swap/sax/sax-squeal-tore-my-brains-out.mp3',
   keyCode:65
  },
  {
   soundId:'Acoustic-Guitar',
   key:'S',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674083/sample-swap/guitar/120_acoustic-guitar-picking1.mp3',
   keyCode:83
  },
  {
   soundId:'Piano',
   key:'D',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674667/sample-swap/piano/096_salsa-piano-1.mp3',
   keyCode:68
  },
  {
   soundId:'Violin',
   key:'Z',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674483/sample-swap/violin/violin-loop-2.mp3',
   keyCode:90
  },
  {
   soundId:'Choir',
   key:'X',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674510/sample-swap/choir/Slavic-Choir_Eb_Aah.mp3',
   keyCode:88
  },
  {
   soundId:'Voice',
   key:'C',
   src:'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674533/sample-swap/voice/voice_woo.mp3',
   keyCode:67
  }
];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: "Waiting for input..."
    }
    this.playAudio = this.playAudio.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  playAudio = (sound, index) => {
    sound.currentTime = 0
    sound.play()
    this.setState({
      display: sounds[index].soundId
    })
  }

  handleClick = e => {
    for (let i = 0; i < sounds.length; i++) {
      if (e.target.id === sounds[i].soundId) {
        let sound = document.getElementById(sounds[i].key)
        this.playAudio(sound, i)
      }
    }
  }

  handleKeyPress = e => {
    for (let i = 0; i < sounds.length; i++) {
      if (e.keyCode === sounds[i].keyCode) {
        let sound = document.getElementById(sounds[i].key)
        this.playAudio(sound, i)
      }
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress)
  }

  render() {
    return (
      <div id="drum-machine">

        <div className="two-halfs">
          <p><strong><em>YAMAHA RY30</em></strong></p>
          <div id="container">
            {sounds.map((d) => {
              return <button className="drum-pad" id={d.soundId} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>{d.key}<audio src={d.src} className="clip" id={d.key} type="audio/mpeg" /></button>
            })}
          </div>
        </div>

        <div className="two-halfs">
          <p>Powered On</p>
          <p id="display">{this.state.display}</p>
        </div>

      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
