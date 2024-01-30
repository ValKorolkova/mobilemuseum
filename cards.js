const fotoRandom = document.querySelector("#foto-random");
const btnRandom = document.querySelector("#btn-random");

const cards = ["./random/random.jpg", "./random/random2.jpg", "./random/random3.jpg", "./random/random4.jpg", "./random/random5.jpg", "./random/random6.jpg"]

btnRandom.addEventListener("click", ()=>{
        let randomCard = cards[Math.floor(Math.random()*cards.length)];
        fotoRandom.src = randomCard;
    })

const searchItem = document.querySelector('#input-line');
const cardBody = document.querySelectorAll('.card-main');

searchItem.addEventListener('keyup', function(event){
    const request = event.target.value.toLowerCase();
    cardBody.forEach( item =>{
        item.querySelector('.card-name').textContent.toLowerCase().includes(request) ?
        (item.style.display = 'block') : (item.style.display = 'none')
    })
})

// Timer 1

function outputCountdown(){
    const outputDate = new Date('September 01, 2000 00:00');
    const now = new Date();
    const diff = now - outputDate ;
    const todayDay = now.getDate();
    const todayMonth = now.getMonth();
    const todayYear = now.getFullYear();
    const todayDayOld = outputDate.getDate();
    const todayMonthOld = outputDate.getMonth();
    const todayYearOld = outputDate.getFullYear();

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    if(todayMonth >= todayMonthOld){
        let displayYear = Math.floor(todayYear - todayYearOld);
        document.querySelector('.years').textContent = displayYear;
    } else {
        let displayYearTwo = Math.floor(todayYear - todayYearOld -1);
        document.querySelector('.years').textContent = displayYearTwo;
    }

    if(todayDay >= todayDayOld && todayMonth >= todayMonthOld){
        let displayMonth = Math.floor(todayMonth - todayMonthOld);
        document.querySelector('.month').textContent = displayMonth;
    } else if(todayMonth >= todayMonthOld && todayDay < todayDayOld){
        let displayMonthTwo = Math.floor(todayMonth - todayMonthOld -1);
        document.querySelector('.month').textContent = displayMonthTwo;
    } else if(todayMonth < todayMonthOld && todayDay >= todayDayOld) {
        let displayMonthThree = Math.floor(12 + todayMonth - todayMonthOld);
        document.querySelector('.month').textContent = displayMonthThree;
    } else{
        let displayMonthFour = Math.floor(12 + todayMonth - todayMonthOld -1);
        document.querySelector('.month').textContent = displayMonthFour;
    }

    if(todayDay >= todayDayOld){
        let displayDay = todayDay - todayDayOld;
        document.querySelector('.days').textContent = displayDay;
    } else {
        let displayDayTwo = 31 + (todayDay - todayDayOld);
        document.querySelector('.days').textContent = displayDayTwo;
    }

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minuts').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;
}

setInterval(outputCountdown,1000);

// Timer 2

function outputCountdownTwo(){
    const outputDateTwo = new Date('December 01, 2004 00:00');
    const nowTwo = new Date();
    const diffTwo = nowTwo - outputDateTwo ;
    const todayDayTwo = nowTwo.getDate();
    const todayMonthTwo = nowTwo.getMonth();
    const todayYearTwo = nowTwo.getFullYear();
    const todayDayOldTwo = outputDateTwo.getDate();
    const todayMonthOldTwo = outputDateTwo.getMonth();
    const todayYearOldTwo = outputDateTwo.getFullYear();

    const msInSecondTwo = 1000;
    const msInMinuteTwo = 60*1000;
    const msInHourTwo = 60*60*1000;
    const msInDayTwo = 24*60*60*1000;

    if(todayMonthTwo >= todayMonthOldTwo){
        let displayTwoYear = Math.floor(todayYearTwo - todayYearOldTwo);
        document.querySelector('.yearsTwo').textContent = displayTwoYear;
    } else {
        let displayTwoYearTwo = Math.floor(todayYearTwo - todayYearOldTwo -1);
        document.querySelector('.yearsTwo').textContent = displayTwoYearTwo;
    }

    if(todayDayTwo >= todayDayOldTwo && todayMonthTwo >= todayMonthOldTwo){
        let displayTwoMonth = Math.floor(todayMonthTwo - todayMonthOldTwo);
        document.querySelector('.monthTwo').textContent = displayTwoMonth;
    } else if(todayMonthTwo >= todayMonthOldTwo && todayDayTwo < todayDayOldTwo){
        let displayTwoMonthTwo = Math.floor(todayMonthTwo - todayMonthOldTwo -1);
        document.querySelector('.monthTwo').textContent = displayTwoMonthTwo;
    } else if(todayMonthTwo < todayMonthOldTwo && todayDayTwo >= todayDayOldTwo) {
        let displayTwoMonthThree = Math.floor(12 + todayMonthTwo - todayMonthOldTwo);
        document.querySelector('.monthTwo').textContent = displayTwoMonthThree;
    } else{
        let displayTwoMonthFour = Math.floor(12 + todayMonthTwo - todayMonthOldTwo -1);
        document.querySelector('.monthTwo').textContent = displayTwoMonthFour;
    }

    if(todayDayTwo >= todayDayOldTwo){
        let displayTwoDay = todayDayTwo - todayDayOldTwo;
        document.querySelector('.daysTwo').textContent = displayTwoDay;
    } else {
        let displayTwoDayTwo = 31 + (todayDayTwo - todayDayOldTwo);
        document.querySelector('.daysTwo').textContent = displayTwoDayTwo;
    }

    const displayHourTwo = Math.floor((diffTwo%msInDayTwo)/msInHourTwo);
    document.querySelector('.hoursTwo').textContent = displayHourTwo;

    const displayMinuteTwo = Math.floor((diffTwo%msInHourTwo)/msInMinuteTwo);
    document.querySelector('.minutsTwo').textContent = displayMinuteTwo;

    const displaySecondTwo = Math.floor((diffTwo%msInMinuteTwo)/msInSecondTwo);
    document.querySelector('.secondsTwo').textContent = displaySecondTwo;
}

setInterval(outputCountdownTwo,1000);


// Timer 3

function outputCountdownThree(){
    const outputDateThree = new Date('March 01, 2001 00:00');
    const nowThree = new Date();
    const diffThree = nowThree - outputDateThree ;
    const todayDayThree = nowThree.getDate();
    const todayMonthThree = nowThree.getMonth();
    const todayYearThree = nowThree.getFullYear();
    const todayDayOldThree = outputDateThree.getDate();
    const todayMonthOldThree = outputDateThree.getMonth();
    const todayYearOldThree = outputDateThree.getFullYear();

    const msInSecondThree = 1000;
    const msInMinuteThree = 60*1000;
    const msInHourThree = 60*60*1000;
    const msInDayThree = 24*60*60*1000;

    if(todayMonthThree >= todayMonthOldThree){
        let displayThreeYear = Math.floor(todayYearThree - todayYearOldThree);
        document.querySelector('.yearsThree').textContent = displayThreeYear;
    } else {
        let displayThreeYearTwo = Math.floor(todayYearThree - todayYearOldThree -1);
        document.querySelector('.yearsThree').textContent = displayThreeYearTwo;
    }

    if(todayDayThree >= todayDayOldThree && todayMonthThree >= todayMonthOldThree){
        let displayThreeMonth = Math.floor(todayMonthThree - todayMonthOldThree);
        document.querySelector('.monthThree').textContent = displayThreeMonth;
    } else if(todayMonthThree >= todayMonthOldThree && todayDayThree < todayDayOldThree){
        let displayThreeMonthTwo = Math.floor(todayMonthThree - todayMonthOldThree -1);
        document.querySelector('.monthThree').textContent = displayThreeMonthTwo;
    } else if(todayMonthThree < todayMonthOldThree && todayDayThree >= todayDayOldThree) {
        let displayThreeMonthThree = Math.floor(12 + todayMonthThree - todayMonthOldThree);
        document.querySelector('.monthThree').textContent = displayThreeMonthThree;
    } else{
        let displayThreeMonthFour = Math.floor(12 + todayMonthThree - todayMonthOldThree -1);
        document.querySelector('.monthThree').textContent = displayThreeMonthFour;
    }

    if(todayDayThree >= todayDayOldThree){
        let displayThreeDay = todayDayThree - todayDayOldThree;
        document.querySelector('.daysThree').textContent = displayThreeDay;
    } else {
        let displayThreeDayTwo = 31 + (todayDayThree - todayDayOldThree);
        document.querySelector('.daysThree').textContent = displayThreeDayTwo;
    }

    const displayHourThree = Math.floor((diffThree%msInDayThree)/msInHourThree);
    document.querySelector('.hoursThree').textContent = displayHourThree;

    const displayMinuteThree = Math.floor((diffThree%msInHourThree)/msInMinuteThree);
    document.querySelector('.minutsThree').textContent = displayMinuteThree;

    const displaySecondThree = Math.floor((diffThree%msInMinuteThree)/msInSecondThree);
    document.querySelector('.secondsThree').textContent = displaySecondThree;
}

setInterval(outputCountdownThree,1000);

// Timer 4

function outputCountdownFour(){
    const outputDateFour = new Date('June 01, 1999 00:00');
    const nowFour = new Date();
    const diffFour = nowFour - outputDateFour;
    const todayDayFour = nowFour.getDate();
    const todayMonthFour = nowFour.getMonth();
    const todayYearFour = nowFour.getFullYear();
    const todayDayOldFour = outputDateFour.getDate();
    const todayMonthOldFour = outputDateFour.getMonth();
    const todayYearOldFour = outputDateFour.getFullYear();

    const msInSecondFour = 1000;
    const msInMinuteFour = 60*1000;
    const msInHourFour = 60*60*1000;
    const msInDayFour = 24*60*60*1000;

    if(todayMonthFour >= todayMonthOldFour){
        let displayFourYear = Math.floor(todayYearFour - todayYearOldFour);
        document.querySelector('.yearsFour').textContent = displayFourYear;
    } else {
        let displayFourYearTwo = Math.floor(todayYearFour - todayYearOldFour -1);
        document.querySelector('.yearsFour').textContent = displayFourYearTwo;
    }

    if(todayDayFour >= todayDayOldFour && todayMonthFour >= todayMonthOldFour){
        let displayFourMonth = Math.floor(todayMonthFour - todayMonthOldFour);
        document.querySelector('.monthFour').textContent = displayFourMonth;
    } else if(todayMonthFour >= todayMonthOldFour && todayDayFour < todayDayOldFour){
        let displayFourMonthTwo = Math.floor(todayMonthFour - todayMonthOldFour -1);
        document.querySelector('.monthFour').textContent = displayFourMonthTwo;
    } else if(todayMonthFour < todayMonthOldFour && todayDayFour >= todayDayOldFour) {
        let displayFourMonthThree = Math.floor(12 + todayMonthFour - todayMonthOldFour);
        document.querySelector('.monthFour').textContent = displayFourMonthThree;
    } else{
        let displayFourMonthFour = Math.floor(12 + todayMonthFour - todayMonthOldFour -1);
        document.querySelector('.monthFour').textContent = displayFourMonthFour;
    }

    if(todayDayFour >= todayDayOldFour){
        let displayFourDay = todayDayFour - todayDayOldFour;
        document.querySelector('.daysFour').textContent = displayFourDay;
    } else {
        let displayFourDayTwo = 31 + (todayDayFour - todayDayOldFour);
        document.querySelector('.daysFour').textContent = displayFourDayTwo;
    }

    const displayHourFour = Math.floor((diffFour%msInDayFour)/msInHourFour);
    document.querySelector('.hoursFour').textContent = displayHourFour;

    const displayMinuteFour = Math.floor((diffFour%msInHourFour)/msInMinuteFour);
    document.querySelector('.minutsFour').textContent = displayMinuteFour;

    const displaySecondFour = Math.floor((diffFour%msInMinuteFour)/msInSecondFour);
    document.querySelector('.secondsFour').textContent = displaySecondFour;
}

setInterval(outputCountdownFour,1000);


// Timer 5

function outputCountdownFive(){
    const outputDateFive = new Date('January 03, 1996 00:00');
    const nowFive = new Date();
    const diffFive = nowFive - outputDateFive;
    const todayDayFive = nowFive.getDate();
    const todayMonthFive = nowFive.getMonth();
    const todayYearFive = nowFive.getFullYear();
    const todayDayOldFive = outputDateFive.getDate();
    const todayMonthOldFive = outputDateFive.getMonth();
    const todayYearOldFive = outputDateFive.getFullYear();

    const msInSecondFive = 1000;
    const msInMinuteFive = 60*1000;
    const msInHourFive = 60*60*1000;
    const msInDayFive= 24*60*60*1000;

    if(todayMonthFive >= todayMonthOldFive){
        let displayFiveYear = Math.floor(todayYearFive - todayYearOldFive);
        document.querySelector('.yearsFive').textContent = displayFiveYear;
    } else {
        let displayFiveYearTwo = Math.floor(todayYearFive - todayYearOldFive -1);
        document.querySelector('.yearsFive').textContent = displayFiveYearTwo;
    }

    if(todayDayFive >= todayDayOldFive && todayMonthFive >= todayMonthOldFive){
        let displayFiveMonth = Math.floor(todayMonthFive - todayMonthOldFive);
        document.querySelector('.monthFive').textContent = displayFiveMonth;
    } else if(todayMonthFive >= todayMonthOldFive && todayDayFive < todayDayOldFive){
        let displayFiveMonthTwo = Math.floor(todayMonthFive - todayMonthOldFive -1);
        document.querySelector('.monthFive').textContent = displayFiveMonthTwo;
    } else if(todayMonthFive < todayMonthOldFive && todayDayFive >= todayDayOldFive) {
        let displayFiveMonthThree = Math.floor(12 + todayMonthFive - todayMonthOldFive);
        document.querySelector('.monthFive').textContent = displayFiveMonthThree;
    } else{
        let displayFiveMonthFour = Math.floor(12 + todayMonthFive - todayMonthOldFive -1);
        document.querySelector('.monthFive').textContent = displayFiveMonthFour;
    }

    if(todayDayFive >= todayDayOldFive){
        let displayFiveDay = todayDayFive - todayDayOldFive;
        document.querySelector('.daysFive').textContent = displayFiveDay;
    } else {
        let displayFiveDayTwo = 31 + (todayDayFive - todayDayOldFive);
        document.querySelector('.daysFive').textContent = displayFiveDayTwo;
    }

    const displayHourFive = Math.floor((diffFive%msInDayFive)/msInHourFive);
    document.querySelector('.hoursFive').textContent = displayHourFive;

    const displayMinuteFive = Math.floor((diffFive%msInHourFive)/msInMinuteFive);
    document.querySelector('.minutsFive').textContent = displayMinuteFive;

    const displaySecondFive = Math.floor((diffFive%msInMinuteFive)/msInSecondFive);
    document.querySelector('.secondsFive').textContent = displaySecondFive;
}

setInterval(outputCountdownFive,1000);

// Timer 6

function outputCountdownSix(){
    const outputDateSix = new Date('October 01, 1995 00:00');
    const nowSix = new Date();
    const diffSix = nowSix - outputDateSix;
    const todayDaySix = nowSix.getDate();
    const todayMonthSix = nowSix.getMonth();
    const todayYearSix = nowSix.getFullYear();
    const todayDayOldSix = outputDateSix.getDate();
    const todayMonthOldSix = outputDateSix.getMonth();
    const todayYearOldSix = outputDateSix.getFullYear();

    const msInSecondSix = 1000;
    const msInMinuteSix = 60*1000;
    const msInHourSix = 60*60*1000;
    const msInDaySix= 24*60*60*1000;

    if(todayMonthSix >= todayMonthOldSix){
        let displaySixYear = Math.floor(todayYearSix - todayYearOldSix);
        document.querySelector('.yearsSix').textContent = displaySixYear;
    } else {
        let displaySixYearTwo = Math.floor(todayYearSix - todayYearOldSix -1);
        document.querySelector('.yearsSix').textContent = displaySixYearTwo;
    }

    if(todayDaySix >= todayDayOldSix&& todayMonthSix >= todayMonthOldSix){
        let displaySixMonth = Math.floor(todayMonthSix - todayMonthOldSix);
        document.querySelector('.monthSix').textContent = displaySixMonth;
    } else if(todayMonthSix >= todayMonthOldSix && todayDaySix < todayDayOldSix){
        let displaySixMonthTwo = Math.floor(todayMonthSix - todayMonthOldSix -1);
        document.querySelector('.monthSix').textContent = displaySixMonthTwo;
    } else if(todayMonthSix < todayMonthOldSix && todayDaySix >= todayDayOldSix) {
        let displaySixMonthThree = Math.floor(12 + todayMonthSix - todayMonthOldSix);
        document.querySelector('.monthSix').textContent = displaySixMonthThree;
    } else{
        let displaySixMonthFour = Math.floor(12 + todayMonthSix - todayMonthOldSix -1);
        document.querySelector('.monthSix').textContent = displaySixMonthFour;
    }

    if(todayDaySix >= todayDayOldSix){
        let displaySixDay = todayDaySix - todayDayOldSix;
        document.querySelector('.daysSix').textContent = displaySixDay;
    } else {
        let displaySixDayTwo = 31 + (todayDaySix - todayDayOldSix);
        document.querySelector('.daysSix').textContent = displaySixDayTwo;
    }

    const displayHourSix = Math.floor((diffSix%msInDaySix)/msInHourSix);
    document.querySelector('.hoursSix').textContent = displayHourSix;

    const displayMinuteSix = Math.floor((diffSix%msInHourSix)/msInMinuteSix);
    document.querySelector('.minutsSix').textContent = displayMinuteSix;

    const displaySecondSix = Math.floor((diffSix%msInMinuteSix)/msInSecondSix);
    document.querySelector('.secondsSix').textContent = displaySecondSix;
}

setInterval(outputCountdownSix,1000);
