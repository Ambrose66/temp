import useFitText from "use-fit-text";
import { useState } from 'react'
import findMinMax from '../lib/min_max'
import scalePitch from '../lib/scalePitch'

const Notes = (note_data) => {

  const [notes, setNotes] = useState(note_data)
  var [min, max] = findMinMax(notes)
  var yScale = 1200
  var xScale = 10
  console.log(notes)
  const { fontSize, ref } = useFitText();

  const onClick = () => {
    console.log('object')
  }

  return (
    <div className='container'>
      {notes.map((note) => (
        <div
          key={note.id}
          draggable
          ref={ref}
          style={{
            fontSize,
            position: 'absolute',
            width: note.duration*xScale,
            height: 50,
            bottom:scalePitch(note.pitch, min, max, yScale),
            left:note.start*xScale,
            backgroundColor: 'blue',
            color: 'orange',
            cursor: 'grab'
          }}
          onClick={onClick}
        >
          {note.syllable}
        </div>
      ))}
    </div>
  )
}

export default Notes
