
const fotoRandom = document.querySelector("#foto-random");
const btnRandom = document.querySelector("#btn-random");

const cards = ["./random/random.jpg", "./random/random2.jpg", "./random/random3.jpg", "./random/random4.jpg", "./random/random5.jpg", "./random/random6.jpg"]

btnRandom.addEventListener("click", ()=>{
        let randomCard = cards[Math.floor(Math.random()*cards.length)];
        fotoRandom.src = randomCard;
    })

    const button = document.querySelector('#btn-answer');
    
    const answersOne = document.querySelectorAll('.answerOne');
    const answersTwo = document.querySelectorAll('.answerTwo');
    const answersThree = document.querySelectorAll('.answerThree');
    const answersFour = document.querySelectorAll('.answerFour');
    const myAudio = document.querySelector(".myAudio")
    // const win = document.querySelector(".win")
    
    const firstButton = document.querySelector('#myButton');
            firstButton.addEventListener('click',function(){
                if(myAudio.paused ===true){
                    myAudio.play();
                }
                else {
                    myAudio.pause();
                }
            })
    
    button.addEventListener('click', result);
    
    function result(){
        // e.preventDefault();
        let points = 0;
        answersOne.forEach(answerOne =>{
            if(answerOne.checked){
            myAudio.src = "./melody/bumer.mp3";
            }
        }) 

        answersTwo.forEach(answerTwo =>{
            if(answerTwo.checked){
            myAudio.src = "./melody/love.mp3";
            }
        }) 
        answersThree.forEach(answerThree =>{
            if(answerThree.checked){
            myAudio.src = "./melody/polkka.mp3";
            }
        }) 
        answersFour.forEach(answerFour =>{
            if(answerFour.checked){
            myAudio.src = "./melody/bravo.mp3";
            }
        }) 
    }   


const buttonCalculator = document.querySelector('#btn-calculator');
buttonCalculator.addEventListener('click',calculatePrice);

const chooseGuide = document.querySelector('#chooseGuide');
chooseGuide.addEventListener('click',showGuide);


function showGuide(e){
    e.preventDefault();
    guide.style.display = 'block';
}


function calculatePrice(e){
    e.preventDefault();
    const people = document.querySelector('#adultsNumber').value;
    const kidsNumber = document.querySelector('#kidsNumber').value;
    let guide = document.querySelector('#guide').value;

    if(people ===" " || people <1 || kidsNumber <0 ){
        Swal.fire({
            icon: 'error',
            title: 'Упс!',
            text: 'Укажите реальное число посетителей!!'
    })
    }

    let amountAdult = (people*150);
    let amountKid = (kidsNumber*50);
    let adultAndKids = amountAdult+amountKid;
    let guideSum = adultAndKids+Number(guide);

    document.querySelector('#adultAndKids').textContent = adultAndKids;
    document.querySelector('#guideSum').textContent = guideSum;
}

calculatePrice();





