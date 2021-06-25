import Notes from './components/midi_note'
import note_data from './data/verse2.json'

function App() {
  
  return (
    <Notes note_data={note_data['notes']}/>
  )
}

export default App
