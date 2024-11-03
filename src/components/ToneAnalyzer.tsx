import { useRef, useState } from "react"
import { getMessage } from "../utils/groqChat"
import "./ToneAnalyzer.css"
export default function ToneAnalyzer() {
  const [message, setMessage] = useState<string | null>()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const analyzeTone = async (): Promise<void> => {
    if(inputRef.current?.value){
      setIsDisabled(true)
      await getMessage(inputRef.current.value).then(message=> {
        setMessage(message.message)
      })
      setIsDisabled(false)
    }
  }

  return (
    <div className="tone-analyzer">
      <h1>Tone Analyzer</h1>
      <div className="input-container">
        <textarea
          ref={inputRef}
          placeholder="Enter your text here..."
        />
        <div className="button-container">
        <button onClick={analyzeTone} disabled={isDisabled} className="check-btn">
          {isDisabled ? 'Analyzing...' : 'Check'}
        </button>
        </div>
      </div>
      {message && (
        <div className="result">
          <h2>Analysis Result</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  )
}