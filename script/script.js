const adviceId = document.getElementById("advice_id");
const advice = document.getElementById("advice");
const generatorBtn = document.getElementById("generatorBtn");

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        advice.innerHTML = `"${data.slip.advice}"`
        adviceId.innerHTML=`ADVICE #${data.slip.id} `
      } catch (error) {
        console.error('Erreur :', error);
      }
}
fetchAdvice()

generatorBtn.addEventListener('click',()=>{
    fetchAdvice()
} 
)