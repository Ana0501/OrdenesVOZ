const text= document.querySelector('.texts');
const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{ 
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
console.log(text);
if(e.results[0].isFinal){
    if (text.includes('Encender foco uno') || text.includes('encender foco uno'))
    sec1.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apagar foco uno') || text.includes('apagar foco uno'))
    sec1.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender foco dos') || text.includes('encender foco dos'))
    sec2.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apagar foco dos') || text.includes('apagar foco dos'))
    sec2.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender foco tres') || text.includes('encender foco tres'))
    sec3.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar foco tres') || text.includes('apagar foco tres'))
    sec3.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender foco cuatro') || text.includes('encender foco cuatro'))
    sec4.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar foco cuatro') || text.includes('apagar foco cuatro'))
    sec4.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender foco cinco') || text.includes('encender foco cicnco'))
    sec5.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar foco cinco') || text.includes('apagar foco cinco'))
    sec5.style.background = "url(bulb_off.jpg)";
} 
});

recognition.addEventListener('end', ()=>{
    recognition.start();
});

recognition.start();
  