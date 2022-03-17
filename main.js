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
    if (text.includes('Encender foco') || text.includes('encender foco'))
    sec1.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apagar foco') || text.includes('apagar foco'))
    sec1.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender segunda bombilla') || text.includes('encender segunda bombilla'))
    sec2.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apagar segunda bombilla') || text.includes('Apagar segunda bombilla'))
    sec2.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender tercer foco') || text.includes('Encender tercer foco'))
    sec3.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar tercer foco') || text.includes('Apagar tercer foco'))
    sec3.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender cuarta bombilla') || text.includes('encender cuarta bombilla'))
    sec4.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar cuarta bombilla') || text.includes('apagar cuarta bombilla'))
    sec4.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Encender quinta bombilla') || text.includes('encender quinta bombilla'))
    sec5.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apagar quinta bombilla') || text.includes('apagar quinta bombilla'))
    sec5.style.background = "url(bulb_off.jpg)";
} 
});

recognition.addEventListener('end', ()=>{
    recognition.start();
});

recognition.start();
  