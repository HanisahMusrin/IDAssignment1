//music player elements
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

//music player interactability
icon.onclick = function()
{
    if(mySong.paused)
    {
        mySong.play();
        icon.src = "Design/cancelnote.png";
    }
    else
    {
        mySong.pause();
        icon.src = "Design/note.png";
    }
}

//trapizium pop-up interactability
var trapizium = document.getElementById("trapizium");
trapizium.onclick = function()
{
    document.querySelector(".signupform").classList.add("active");
}
var closebtn = document.querySelector(".signupform .close-btn")
closebtn.onclick = function()
{
    document.querySelector(".signupform").classList.remove("active");
}

//band member interactability
const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});