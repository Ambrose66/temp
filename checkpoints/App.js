import useFitText from "use-fit-text";
import Note from './components/midi_note'
import { useState } from 'react'
import findMinMax from './lib/min_max'
import scalePitch from './lib/scalePitch'
import note_data from './data/verse2.json'

function App() {
  var [min, max] = findMinMax(note_data['notes'])
  const [notes, setNotes] = useState(note_data['notes'])
  var yScale = 1200

  return (
    <div className='container'>
      {notes.map((note) => (<Note key={note.id} x={note.start} y={scalePitch(note.pitch, min, max, 1200)} length={note.duration} text={note.syllable} xScale={10} />))}
    </div>
  )
}

export default App
