const questions = [
`1) Are u calling me VC now plssss ???? 🌙`,

`2) Tumhari khoobsurti chand se bhi aage nikal jaati hai,
Tumhari ek muskaan meri duniya saja jaati hai,
Chehra hi nahi, tumhara dil bhi noor hai,
Isi liye tum har roop mein sabse khoobsurat lag jaati ho ✨
              MY LOVE Honey 💖 `,

`3) Tum meri nazron ka nasha ho,
Har pal bas tumhare saath rehne ka man karta hai,
Aankhon se aankhon tak baatein ho jaayein,
Aur phir tumhe cheekh-cheekh ke apna bana loon 😘
                MY CHERRY 💖`,

`4) You’re the beat in my heart I didn’t know I needed,
Every glance from you stops time for me,
I catch myself dreaming of holding you close,
And maybe… never letting you go 😘✨
               MY CUTTIEE 💖`,

`5) Chand ki roshni bhi aaj feeki si lagti hai,
Tere bina har raat adhoori si lagti hai,
Log kehte hain chand poora hota hai hamesha,
Par meri zindagi teri kami se khaali lagti hai ✨
               MY MOON STONE 💖`,

`6) Your eyes are like galaxies I could get lost in forever,
Every glance pulls me deeper into your world,
They speak what words can never say,
And I find myself addicted to their magic 😍🌙
              OHH HONEY YOUR EYES 💖`,

`7) Mujhse hui galti ka ehsaas hai aaj mujhe,
Dil se maafi maangta hoon, samajh lo baat meri,
Naraazgi chhod do, muskura do ek baar,
Tumhari hasi ke bina adhoora hoon main har baar 💖
               HMKO MAAF KAR DO HONEY 💖`,

`8) Tum meri zindagi ka wo hissa ho jo kabhi replace nahi ho sakta,
Tumhari ek muskaan se mera har bura din bhi badal sakta,
Sab kuch ho sakta hai zaroori, par tum sabse zyada ho,
Meri har khushi, har dua, bas tumse hi shuru hoti hai ❤️
               MY SWEETYYY ❤️ `,

`9) I know I made a mistake, and I’m really sorry,
Every moment feels heavy without your smile,
Please forgive me, I never meant to hurt you,
You mean so much to me, more than words can say 💔✨`,

`10) I’ve been feeling really bad about what happened,
I feel like I failed to convince you, and I’m truly sorry.
I promise I won’t repeat this mistake again…
Please, can we have a VC call? I just want to talk & SEE to you 💔`
];

let index = 0;
let yesScale = 1;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
    index++;
    if (index < questions.length) {
        questionEl.innerText = questions[index];

        yesScale += 0.15;
        yesBtn.style.transform = `scale(${yesScale})`;

        const x = Math.random() * 100 - 50;
        const y = Math.random() * 50 - 25;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
        // Page 10 NO clicked → crying page
        document.body.innerHTML = `
            <div class="cry-container">
                <h1>😭😭😭😭😭</h1>
                <p>I’m really sad… Please don’t stay upset 💔</p>
            </div>
        `;
        // Add some simple CSS for crying page
        const style = document.createElement('style');
        style.innerHTML = `
            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(to bottom, #ff7e5f, #feb47b);
                font-family: 'Segoe UI', sans-serif;
                color: white;
                text-align: center;
            }
            .cry-container h1 {
                font-size: 100px;
                margin-bottom: 20px;
            }
            .cry-container p {
                font-size: 24px;
            }
        `;
        document.head.appendChild(style);
    }
});

yesBtn.addEventListener("click", () => {
    questionEl.innerHTML = "I LOVE YOU HONEY ❤️<br><br> YOU ARE ALL THE BEST  🌸<br><br> VC ME NOW 😁";
    document.querySelector(".buttons").style.display = "none";
});

