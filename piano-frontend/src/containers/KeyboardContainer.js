import React from 'react';
import PianoKey from '../components/PianoKey';
import keys from '../data/keys_data.js'

const Keyboard = () => {
    return (
      <div id="keyboard">
          { keys.map((k, idx) => <PianoKey key={idx} color={k.color} note={k.note} />)}
      </div>
    )
}
export default Keyboard;