// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai'

function App() {

  const [clipName, setClipName] = useState("Copy to Clipboard");
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }

  const copy = () => {
    navigator.clipboard.writeText(transcript);
    setClipName("Copied To Clipboard !!");
    setTimeout(() => {
      setClipName("Copy to Clipboard");
    }, 2000);
  }

  return (
    <>
      <div className='container'>
        <div className='credits'><AiFillInfoCircle size={42} /></div>
        <div className='author'>
          Developed by <a href="https://saikrishna488.live" target="_blank" rel="noreferrer">saikrishna</a> To get source code visit <a href="https://github.com/saikrishna488/speech-to-text" target="_blank" rel="noreferrer">github repo</a>
        </div>

        <div className='main-box'>
          <div className='message-box'>
            <h4>Voice To Text converter</h4>
            {transcript}
          </div>
          <div className='buttons-box'>
            <button className='btn' onClick={copy}>{clipName}</button>
            <button className='btn' onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start listening</button>
            <button className='btn' onClick={SpeechRecognition.stopListening}>Stop listening</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
