const audioClips=[
{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}   ,
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }
]
function App(){
    const [display, setDisplay]=React.useState("");
    return (
<div id="drum-machine">
    <h2>Drum Machine</h2>
    <h3 id="display">{display}</h3>
        <div  className="pad">
                {audioClips.map(clip=>( 
                    <Pad key={clip.id} clip={clip} setDisplay={setDisplay}/>
            ) )}
    </div>
</div>
    )
}

function Pad({clip, setDisplay}){
    const [active, setActive]= React.useState(false);

    React.useEffect(()=> { 
        document.addEventListener("keydown",handleKeyPress);
        return ()=> {
            document.removeEventListener("keydown",handleKeyPress);

        }
    },[])
    const handleKeyPress= (e)=>{
        if (e.keyCode === clip.keyCode){
            playSound()
        }

    }
    const playSound = () => {
        const audioTag = document.getElementById(clip.keyTrigger)
        audioTag.currentTime = 0;
        audioTag.play();
        setDisplay(prev => clip.id)
    }
    return(
<div onClick={playSound} className="drum-pad"  id={clip.id}>
    <button className="drum-pad-button">
    <audio className="clip" id={clip.keyTrigger} src={clip.url} />{clip.keyTrigger}
    </button>
    
</div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
