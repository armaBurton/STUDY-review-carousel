const userArray = [
    {
        name: `Steve Zissou`,
        occupation: `Captain of the Belafonte`,
        review: `No. The future, it's where you're going? Marty, this may seem a little foreward, but I was wondering if you would ask me to the Enchantment Under The Sea Dance on Saturday. 1955? You're my ma- you're my ma. C'mon.`,
        image: `url('../assets/images/zissou.png')`
    },
    {
        name: `Klaus Daimler`,
        occupation: `First-Mate of the Belafonte`,
        review: `I don't know, Doc, I guess she felt sorry for him cause her did hit him with the car, hit me with the car. Why am I always the last one to know about these things. Shut your filthy mouth, I'm not that kind of girl. Here you go, lady.`,
        image: `url('../assets/images/Klaus.png')`
    },
    {
        name: `Ned Plimpton`,
        occupation: `Pilot, Financier`,
        review: `Now, of course not, Biff, now, I wouldn't want that to happen. whoa, whoa Doc, stuck here, I can't be stuck here, I got a life in 1985. I got a girl. Maybe you were adopted. Doc, she didn't even look at him. Nah, I just don't think I'm cut out for music.`,
        image: `url('../assets/images/Kingsly.png')`
    }
]

let counter = 0;

let userName = userArray[counter].name;
let userOccupation = userArray[counter].occupation;
let userReview = userArray[counter].review;
let userImage = userArray[counter].image;

const nameID = document.getElementById(`name`);
const occupationID = document.getElementById(`occupation`);
const reviewTextID = document.getElementById(`review-text`);
const imageID = document.getElementById(`image-frame`);
const rightArrow = document.getElementById(`right-arrow`);
const leftArrow = document.getElementById(`left-arrow`);
const surpriseMe = document.getElementById(`surprise-me`);

window.onload = (e) => {
    populateReview();
}

function populateReview(){
    nameID.textContent = userName;
    occupationID.textContent = userOccupation;
    reviewTextID.textContent = userReview;
    imageID.style.backgroundImage = userImage;
}

function assingments(counter) {
    userName = userArray[counter].name;
    userOccupation = userArray[counter].occupation;
    userReview = userArray[counter].review;
    userImage = userArray[counter].image;
}

rightArrow.addEventListener(`click`, () =>{
    counter = (counter + 1) % userArray.length;

    assingments(counter);
    populateReview();
})

leftArrow.addEventListener(`click`, () =>{
    if (counter === 0) {
        counter = (userArray.length - 1) % userArray.length;
        assingments(counter);
        populateReview();
    } else {
        counter = (counter - 1) % userArray.length;
    }

    assingments(counter);
    populateReview();
})

surpriseMe.addEventListener(`click`, () =>{
    counter = Math.floor(Math.random() * userArray.length);

    assingments(counter);
    populateReview();
})