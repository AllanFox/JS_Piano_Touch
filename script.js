const synth = new Tone.PolySynth().toDestination();
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

let  html = "";

for(let octave=0; octave<4; octave++){
    notes.forEach(x => {
        let sharp = true;

        if(x == "E" || x == "B") sharp = false;

        html += `<div class="whiteKey" onmousedown="notePress(this, false)" data-note="${x+(octave+4)}">`
        
        if(sharp) html += `<div class="blackKey" onmousedown="notePress(this, true)" data-note="${x+"#"+(octave+4)}"></div>`
    
        html += `</div>`;
    })
}

document.getElementById("piano").innerHTML = html;

function notePress(e) {
    let note = e.dataset.note;
    synth.triggerAttackRelease(note, "16n");
    event.stopPropagation();
}