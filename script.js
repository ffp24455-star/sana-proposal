const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const result = document.getElementById("result");

// Yes Button
yesBtn.addEventListener("click", () => {

    result.innerHTML = `
    <h2>❤️ Thank You Sana ❤️</h2>
    <p>
    You just made this moment unforgettable.<br><br>

    I promise to always respect you,
    support you and stand beside you.<br><br>

    ❤️ Forever Yours,<br>
    <b>Subham</b>
    </p>
    `;

    launchHearts();

});

// Second Button
maybeBtn.addEventListener("click", () => {

    result.innerHTML = `
    <h2>🌹 Thank You 🌹</h2>
    <p>
    Thank you for reading everything till the end.<br><br>

    Take your time.<br>
    Your feelings and your decision matter.<br><br>

    ❤️ – Subham
    </p>
    `;

});

// Floating Hearts Animation
function launchHearts(){

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        heart.style.zIndex="9999";
        heart.style.transition="transform 4s linear, opacity 4s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}

// Typewriter Effect
const typing=document.querySelector(".typing");

const text=typing.innerHTML;

typing.innerHTML="";

let i=0;

function type(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,40);

    }

}

type();
