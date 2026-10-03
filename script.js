const nameInput = document.getElementById("name");

const genderButtons = document.querySelectorAll(".gender-btn");

const revealBtn = document.getElementById("revealBtn");

const messageScreen = document.getElementById("messageScreen");

const dearText = document.getElementById("dearText");

const messageText = document.getElementById("messageText");
const mediaContainer = document.getElementById("mediaContainer");

const againBtn = document.getElementById("againBtn");


let selectedGender = "";


/* =================================
   GENDER SELECTION
================================= */

genderButtons.forEach(button => {

    button.addEventListener("click", () => {

        genderButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedGender = button.dataset.gender;

    });

});


/* =================================
   MESSAGE DATABASE
================================= */

const messages = [
{

id:1,
type: "motivation",
gender: "both",

text: `Bhai, zindagi mein kuch karna hai na?

Apne Aai-Baba ko ek accha kal dena hai.

Toh rukna mat.

Aaj sangharsh hai,
kal kahani hogi. 🔥

 Bhai He Tere Liye ! `,

mediaType: "video",
media: "media/videos/emotional-01.mp4"
},



    {
        id:101,
        type: "motivation",
        gender: "both",
        text: `Bhai, zindagi mein kuch karna hai na?

Apne Aai-Baba ko ek accha kal dena hai.

Toh rukna mat.

Aaj sangharsh hai,
kal kahani hogi. 🔥`
    },

   {
    id: 2,
    type: "love",
    gender: "man",

    text: `Bhai, mujhe pata hai...
tum us ladki ko pasand karte ho. ❤️

Ab itna zyada sochna band kar.

Ek baar himmat karke bol de—
I LOVE YOU ? 😎`,

    mediaType: "image",
    media: "media/images/shayri-01.jpg"
},
    {
        id: 3,
        type: "emotional",
        gender: "both",
        text: `Attendance ke liye nahi, bas Uski ek jhalak ke liye 
        college aana bhi worth it hai Na Bhai ❤️.

kya bhai sach kha na hai...

BEST OF LUCK BHAI. 😂`
    },

    {
        id: 4,
        type: "emotional",
        gender: "both",
        text: `Ek din Aai-Baba ko bina kuch bataye
sirf tere upar garv mehsoos karwana.

Us din samajh aayega...

ki asli safalta kya hoti hai Aapke Liye , Bas Unko Naraj Mat Krna . ❤️`
    },

    {
        id: 5,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishya Vani:

Aane wale waqt mein
ek achanak wala mauka tumhare saamne aayega.

Us waqt darna mat.

Ho sakta hai wahi pal
tumhari kahani ka mod ho. ✨
  
  Meri taraf se tumhe best of luck bhai. 
`
    },

    {
        id: 6,
        type: "shayari",
        gender: "both",
        text: `Chalo aaj phir muskuraya jaaye,

jo beet gaya use bhulaya jaaye,

zindagi mili hai ek hi baar,

toh kyun na ise dil se jiya jaaye. ❤️
Khud par vishwas rakho bhai, sab theek hoga. 🔥
`
    },

    {
        id: 7,
        type: "study",
        gender: "both",
        text: `Marks kam aaye?

 Koi baat nahi. ❤️
 Mere bhi AAte He Sab ki aate he. 🔥

Ek exam tumhari haisiyat nahi,
tumhari kshamata tay nahi karta.

Phirse koshish kar.

DOBARA KOSHISH KAR. 🔥`
    },

    {
        id: 8,
        type: "roast",
        gender: "both",
        text: `Bhai talent toh tere andar bahut hai...

Bas dikkat ye hai ki
tu use istemal karne ka irada
kal se banata rehta hai. 😂💀
  trust me bro, you are capable of doing anything you want to do in life, just believe in yourself and keep trying.

`
    },

    {
        id: 9,
        type: "life",
        gender: "both",
        text: `Ek baat yaad rakh:

Har kisi ka waqt alag hota hai.

Kisi aur ki 20 saal ki safalta dekhkar
apne 20 saal ke safar ko nakami mat samajh. ❤️

 Tera Bhi Waqt Aayega Bhai, Bas Mehnat Karte Raho. 🔥
`
    },

    {
        id: 10,
        type: "funny",
        gender: "both",
        text: `AI ne tumhara bhavishya jaanch liya...

Natija:

Safalta — HAAN ✅

Paisa — HAAN 💰

Pyaar — Shayad ❤️

Anushasan — ERROR 404 😂
 Maf kar bhai, ye AI bhi kabhi-kabhi galat andaza laga deta hai.
  Sorry  Yrr Love Nhi Hai tere Life Me AAj hi Pat chala
  Naraj mat ho yrr, ye AI bhi kabhi-kabhi galat andaza laga deta hai.

`
    },

    {
        id: 11,
        type: "motivation",
        gender: "both",
        text: `Thak gaya hai na koi bat nhi ?

Aaram kar.

Lekin haar mat maan.

Kyunki kabhi-kabhi
manzil bas ek aur koshish door hoti hai. 🔥`
    },

    {
        id: 12,
        type: "love",
        gender: "lady",
        text: `Shayad tum kisi ko chupke se pasand karti ho... ❤️

Aur shayad woh bhi
tumhare sandesh ka intezaar kar raha ho.

Kabhi-kabhi pehla kadam
utna daraawna nahi hota jitna hum sochte hain.
khud pr vishwas rakho, sab theek hoga. 🔥
All the best bhai, meri taraf se best of luck.`
    },

    {
        id: 13,
        type: "funny",
        gender: "both",
        text: `Tumhari zindagi mein ek bada badlaav aane wala hai...

Tum Somvaar se
waqt par uthogi.

Oops...

AI bhi kabhi-kabhi galat andaza laga deta hai. 😂`
    },

    {
        id: 14,
        type: "success",
        gender: "both",
        text: `Safalta ka matlab sirf paisa nahi hota.

Kabhi-kabhi safalta ye bhi hoti hai
ki tum apne purane roop se
behtar ban jao. ❤️`
    },

    {
        id: 15,
        type: "shayari",
        gender: "both",
        text: `Safar mushkil zaroor hai,

par kahani khoobsurat ho sakti hai.

Bas kadam rukne nahi chahiye. ✨
or . 🔥`
    },

    {
        id: 16,
        type: "roast",
        gender: "both",
        text: `Bhai, tu samajhdaar hai...

Saboot?

Tu ye sandesh padh raha hai
jabki tujhe kaam karna chahiye tha. 😂
 Aapke pass time kam he kisi ko to jvab dena he na`
    },

    {
        id: 17,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishya se sanket:

Ek din tum apni aaj ki pareshaniyon ko
yaad karke hansoge.

Bas tab tak
thoda dhairya rakho. ❤️
Or
Zindagi mein sab kuch wapas mil sakta hai... bas guzra hua waqt nahi. he smjo 

`
    },

    {
        id: 18,
        type: "emotional",
        gender: "both",
        text: `Kabhi-kabhi tumhe lagta hai
ki koi tumhari mehnat dekh nahi raha.

Yakeen karo...

Tumhari kahani ka sabse accha hissa
abhi likha jaana baaki hai. ❤️`
    },

    {
        id: 19,
        type: "Best",
        gender: "both",
        text: `Khul jayenge sab raste tu rukavto se lad to shi..
        sab hoga hasil tu apni jid pr ad to shi !..🔥
        `
    },

    {
        id: 20,
        type: "dialogue",
        gender: "both",
        text: `I ACCEPTED:

"Tere Liye"

Maine kaha:

"har din harna pdta hai, ek din jitne ke liye." 🔥`
    },

    {
        id: 21,
        type: "motivation",
        gender: "both",
        text: `Bhai, kisi ko dikhane ke liye
kamyaab mat ban.

Apne Aai-Baba ki aankhon mein
woh muskaan dekhne ke liye ban
jo kisi keemat se nahi milti. ❤️`
    },

    {
        id: 22,
        type: "funny",
        gender: "both",
        text: `Aaj ka andaza:

Tumhe ek bahut zaroori sandesh milega...

Aur tum uska screenshot lekar
apne dost ko bhejoge:

"Bhai dekh, AI mujhe jaanta hai." 😂`
    },

    {
        id: 23,
        type: "love",
        gender: "both",
        text: `Dil ki baat kitni bhi chupa lo...

Aankhein kabhi-kabhi
sab bata deti hain.  Truth ❤️`
    },

    {
        id: 24,
        type: "healing",
        gender: "both",
        text: `Jo insaan tumhe dukh dekar chala gaya,
uske peeche apni poori zindagi mat roko.

Kuch log sabak hote hain,
manzil nahi. ❤️‍🩹`
    },

    {
        id: 25,
        type: "roast",
        gender: "both",
        text: `Tumhara aatmvishwas dekhkar
AI prabhavit hai.

Tumhari asli taiyari dekhkar
AI thoda chintit hai. 😂💀`
    },

    {
        id: 26,
        type: "song",
        gender: "both",
        text: `🎵 Tumhare liye  ek song:

"Ilahi"

Aaj kisi ko samjhao mat
ki tum kya mehsoos kar rahe ho.

Bas earphone lagao
aur thoda zindagi ko mehsoos karo. ❤️`
    },

    {
        id: 27,
        type: "motivation",
        gender: "both",
        text: `Dheemi pragati bhi pragati hai.

Aaj ek kadam.

Kal ek aur.

Bas rukna mat.

Ek din peeche mudkar dekhoge
toh doori khud samajh aa jayegi. 🔥`
    },

    {
        id: 28,
        type: "funny",
        gender: "both",
        text: `Tumhare bhavishya mein paisa hai. 💰

Lekin ek chhota sa khalnayak bhi hai...

ONLINE SHOPPING. i am Correct na😂`
    },

    {
        id: 29,
        type: "shayari",
        gender: "both",
        text: `Kuch khwaab waqt maangte hain,

kuch hausla...

Aur kuch bas ek baar
"main kar sakta hoon"
sunna chahte hain. ❤️`
    },

    {
        id: 30,
        type: "future",
        gender: "both",
        text: `🔮 Ek din tumhare paas
woh zindagi hogi jiske liye
aaj tum sangharsh kar rahe ho.

Bas aaj wali mehnat ko
kal tak lekar chalte rehna. ✨`
    },

    {
        id: 31,
        type: "funny",
        gender: "both",
        text: `🚨 Taaza Khabar 🚨

Tumhari zindagi mein safalta
aane wali hai.

Sthaan:

"Bas thodi aur mehnat karo." 😂`
    },

    {
        id: 32,
        type: "life",
        gender: "both",
        text: `Har cheez ka jawaab
aaj milna zaroori nahi.

Kabhi-kabhi waqt
woh jawaab deta hai
jo hum khud nahi de paate. 🌙`
    },
    
    {
    id: 74,
    type: "love",
    gender: "both",
    text: `Kabhi notice kiya?

    Jis insaan se
    baat karne ke liye
    reason chahiye...

    uske baare mein
    sochne ke liye
    koi reason nahi chahiye. ❤️`
},

    {
        id: 33,
        type: "love",
        gender: "man",
        text: `Bhai...

Agar woh tumhari muskaan ki wajah hai,
toh ek baar usse bata toh sahi. ❤️

Sabse bura kya hoga?

Ek kahani milegi.

Sabse accha kya hoga?

Ek rishta. 😎`
    },

    {
        id: 34,
        type: "roast",
        gender: "both",
        text: `AI ka andaza:

Tum bahut mehnati ho sakte ho.

Bas tumhara "YouTube pe ek video dekh leta hoon"
wala irada thoda khatarnaak hai. 😂`
    },

    {
        id: 35,
        type: "emotional",
        gender: "both",
        text: `Kabhi apne Aai-Baba ko
sirf ek baar gale lagakar bolna:

"Main koshish kar raha hoon."

Unhe shayad tumhari poori safalta nahi,
tumhari mehnat chahiye. ❤️`
    },

    {
        id: 36,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishya ka sandesh:

Tumhari zindagi mein ek daur aayega
jahan tumhe chunna padega:

Aaram ya Tarakki?

Us din Tarakki chunna.

Tumhara aane waala khud
tumhara shukriya ada karega. 🔥`
    },

    {
        id: 37,
        type: "funny",
        gender: "both",
        text: `Aaj ka bhagyashaali ank:

7 🍀

Bhagyashaali kaam:

Mehnat karna.

Badkismat kaam:

Kaam ko kal par taalna. 😂`
    },

    {
        id: 38,
        type: "shayari",
        gender: "both",
        text: `Raat kitni bhi lambi ho,

subah zaroor aati hai.

Bas umeed ko
zinda rakhna. 🌅`
    },

    {
        id: 39,
        type: "success",
        gender: "both",
        text: `Ek din tumhare paas
apni safalta ki kahani hogi.

Aur sabse mazedaar baat?

Jo log aaj shak kar rahe hain,
wahi kal salaah maangenge. 😎🔥`
    },

    {
        id: 40,
        type: "random",
        gender: "both",
        text: `Ek achanak yaad dilana:

Tum jitna sochte ho
usse zyada kaabil ho.

Bas kabhi-kabhi
tumhara zyada-sochna wala vibhaag
overtime kar raha hota hai. 😂❤️`
    },

    {
        id: 41,
        type: "motivation",
        gender: "both",
        text: `Kisi aur ki raftaar mat dekh.

Apna raasta dekh.

Tum daud mein kisi aur ke khilaaf nahi,
apne kal wale roop ke khilaaf ho. 🔥`
    },

    {
        id: 42,
        type: "funny",
        gender: "both",
        text: `Tumhara swabhaav:

50% sapne ✨
20% aatmvishwas 😎
30% "kal se pakka shuru karunga." 😂`
    },

    {
        id: 43,
        type: "love",
        gender: "lady",
        text: `Kabhi-kabhi jo insaan
tumhe sabse zyada hansaata hai...

shayad wahi tumhare dil ke
sabse kareeb hota hai. ❤️`
    },

    {
        id: 44,
        type: "healing",
        gender: "both",
        text: `Tumhe har kisi ko samjhane ki
zaroorat nahi hai.

Jo tumhe samajhna chahta hai,
woh tumhari khamoshi bhi samjhega. ❤️‍🩹`
    },

    {
        id: 45,
        type: "funny",
        gender: "both",
        text: `AI ne bhavishya dekha...

Tum kamyaab ho.

Tum mashhoor ho.

Tum ameer ho.

Phir AI ne poocha:

"Assignment poora kiya?"

Dimaag hang ho gaya. 💀😂`
    },

    {
        id: 46,
        type: "dialogue",
        gender: "both",
        text: `Zindagi ka scene seedha hai:

Girna manzoor hai.

Rukna manzoor nahi. 🔥`
    },

    {
        id: 47,
        type: "song",
        gender: "both",
        text: `🎵 Aaj ka mood:

"Safarnama"

Kabhi manzil ke peeche
itna mat bhaago
ki safar jeena bhool jao. ❤️`
    },

    {
        id: 48,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishyavani:

Aane wale waqt mein
tumhare paas ek faisla aayega
jo pehli nazar mein jokhim bhara lagega.

Apne lakshya ko yaad rakhna.

Har jokhim galat nahi hota. ✨`
    },

    {
        id: 49,
        type: "roast",
        gender: "both",
        text: `Bhai, tera hunar
NASA tak ja sakta hai...

Bas bistar se uthne ka
guruttvakarshan thoda kam karna padega. 😂🚀`
    },

    {
        id: 50,
        type: "emotional",
        gender: "both",
        text: `Agar aaj sab kuch sahi nahi hai,
toh koi baat nahi.

Tum abhi safar mein ho.

Sundar ant se pehle
uljhe hue adhyay zaroor aate hain. ❤️`
    },

    {
        id: 51,
        type: "funny",
        gender: "both",
        text: `Tumhara hone waala saathi
bahut khushnaseeb hoga.

Kyunki use tumhari
"main 5 minute mein aa raha hoon"
wali 45-minute wali kahani sununi padegi. 😂`
    },

    {
        id: 52,
        type: "motivation",
        gender: "both",
        text: `Ek din tum apne chhote wale khud ko
dekhkar kahoge:

"Shabaash yaar,
tu ruka nahi." ❤️🔥`
    },

    {
        id: 53,
        type: "life",
        gender: "both",
        text: `Kabhi-kabhi zindagi tumhari yojana ko
tod deti hai...

kyunki uske paas
tumhare liye behtar yojana hoti hai.

Safar par bharosa rakho. 🌱`
    },

    {
        id: 54,
        type: "shayari",
        gender: "both",
        text: `Muskurahat chhoti si cheez hai,

par kisi ka poora din
badal sakti hai.

Toh aaj...

ek baar dil se muskura dena. 😊`
    },

    {
        id: 55,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishya se sanket:

Ek achanak wala sandesh
tumhari muskaan ki wajah ban sakta hai.

Phone khaamosh par mat rakhna...
mazak kar raha tha. 😂❤️`
    },

    {
        id: 56,
        type: "roast",
        gender: "both",
        text: `Tumhara sabse bada dushman
koi aur nahi hai.

Woh tum khud ho...

khaaskar jab tum kehte ho:
"Bas 10 minute Instagram." 💀😂`
    },

    {
        id: 57,
        type: "success",
        gender: "both",
        text: `Safalta dheere dheere bantee hai.

Ek hunar.

Ek aadat.

Ek faisla.

Roz thoda-thoda.

Banate raho. 🚀`
    },

    {
        id: 58,
        type: "love",
        gender: "both",
        text: `Jo naam bina wajah
baar-baar dil-dimaag mein aa raha hai...

shayad uske peeche
koi wajah hai. ❤️`
    },

    {
        id: 59,
        type: "funny",
        gender: "both",
        text: `Aaj ka andaza:

Tum kuch kaam ka karoge.

Sambhavna:

37%.

Baaki 63%?

Phone tay karega. 😂`
    },

    {
        id: 60,
        type: "emotional",
        gender: "both",
        text: `Aaj agar tum thode uljhe hue ho,
toh chinta mat karo.

Har mazboot insaan ki kahani mein
ek adhyay hota hai
jahan usse kuch samajh nahi aata. ❤️`
    },

    {
        id: 61,
        type: "dialogue",
        gender: "both",
        text: `Kahani abhi baaki hai bhai.

Jo adhyay mushkil hai,
zaroori nahi ki ant bhi mushkil ho. 🔥`
    },

    {
        id: 62,
        type: "funny",
        gender: "both",
        text: `Tumhari zindagi ka mukhya kirdaar
tum khud ho.

Bas kabhi-kabhi
sahayak kirdaar ki tarah
apne faisle kisi aur se mat karwana. 😎`
    },

    {
        id: 63,
        type: "motivation",
        gender: "both",
        text: `Aaj jo asambhav lag raha hai,

kal wahi tumhara
"maine kaise kar liya?"
wala pal ho sakta hai.

Koshish karo. 🔥`
    },

    {
        id: 64,
        type: "shayari",
        gender: "both",
        text: `Waqt badalta zaroor hai,

bas kabhi jaldi,
kabhi der se.

Isliye umeed mat chhodna. 🌙`
    },

    {
        id: 65,
        type: "future",
        gender: "both",
        text: `🔮 Tumhare bhavishya ka ek raaz:

Tumhari zindagi ka sabse bada badlaav
shayad ek chhote faisle se shuru hoga.

Soch samajhkar...
par kadam zaroor uthana. ✨`
    },

    {
        id: 66,
        type: "roast",
        gender: "both",
        text: `Bhai, tera aatmvishwas
WiFi signal jaisa hai...

Kabhi poore bars,
kabhi "judne ki koshish..." 😂`
    },

    {
        id: 67,
        type: "love",
        gender: "man",
        text: `Bhai...

Uska online aana dekhna,
last seen check karna,
phir sandesh na bhejna...

Ye khoj nahi,
ehsaas hain. 😂❤️`
    },

    {
        id: 68,
        type: "song",
        gender: "both",
        text: `🎵 Aaj raat ka sujhaav:

"Khaabon Ke Parinday"

Thoda sangeet,
thodi khamoshi,
aur thoda apne saath waqt bitao. 🎧✨`
    },

    {
        id: 69,
        type: "family",
        gender: "both",
        text: `Sabko prabhavit karne se pehle
ek baar sochna...

Kya tumhare Aai-Baba
tumhari pragati dekhkar
khush honge?

Bas wahi disha pakdo. ❤️`
    },

    {
        id: 70,
        type: "funny",
        gender: "both",
        text: `🚨 Taaza Khabar 🚨

Tumhari zindagi mein pyaar
aane wala hai.

Lekin pehle
battery 5% se upar kar lo. 😂❤️`
    },

    {
        id: 71,
        type: "healing",
        gender: "both",
        text: `Jo chala gaya,
use har roz yaad karke
apna aaj mat khona.

Kuch ant
naye shuruaat ke liye hote hain. ❤️‍🩹`
    },

    {
        id: 72,
        type: "motivation",
        gender: "both",
        text: `Bhai, agar sapna bada hai
toh sangharsh bhi bada hoga.

Aasan raasta sabko milta hai.

Apna raasta khud banana
hi asli khel hai. 🔥`
    },

    {
        id: 73,
        type: "funny",
        gender: "both",
        text: `Tumhare paas do rasta hai:

1. Kaam karna.
2. Kaam karne ka YouTube video dekhna.

AI ko pata hai
tum aksar kya chunte ho. 😂`
    },

    {
        id: 74,
        type: "life",
        gender: "both",
        text: `Apni zindagi ko kisi aur ke
sabse acche pal se mat taulo.

Tum unka behtareen pal dekh rahe ho,
apna poora sangharsh nahi. ❤️`
    },

    {
        id: 75,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishya ka sandesh:

Ek waqt aayega
jab tumhare paas chunne ke liye
kai mauke honge.

Aaj hunar banao.

Kal mauke khud milenge. 🚀`
    },

    {
        id: 76,
        type: "roast",
        gender: "both",
        text: `Bhai, tu "vyast" nahi hai...

Tu bas 17 app ek saath khol ke
kisi mein bhi kaam nahi kar raha. 😂`
    },

    {
        id: 77,
        type: "shayari",
        gender: "both",
        text: `Khwaab wahi nahi
jo neend mein aaye,

khwaab woh hain
jo neend uda dein. 🔥`
    },

    {
        id: 78,
        type: "emotional",
        gender: "both",
        text: `Kabhi apne aap ko bhi
shaabashi dena.

Tumne bahut kuch sambhaala hai
jiske baare mein kisi ko pata bhi nahi. ❤️`
    },

    {
        id: 79,
        type: "funny",
        gender: "both",
        text: `AI ka andaza:

Tum ek din bahut anushasit hoge.

Tareekh:

Load ho raha hai...

Wajah:

Yeh AI ko bhi nahi pata. 😂`
    },

    {
        id: 80,
        type: "success",
        gender: "both",
        text: `Ek din tumhari mehnat
itni saaf dikhegi
ki safai dene ki
zaroorat hi nahi padegi.

Natije bolenge. 🔥`
    },

    {
        id: 81,
        type: "love",
        gender: "lady",
        text: `Agar kisi ka naam
tumhari screen par aate hi
tumhari muskaan khud-b-khud aa jaati hai...

Madam,
maamla gambhir hai. 😂❤️`
    },

    {
        id: 82,
        type: "funny",
        gender: "both",
        text: `Tumhara bhagyashaali rang:

Jo kapde aaj saaf hain. 😂

Bhagyashaali ank:

Jitne rupaye batue mein bache hain. 💀`
    },

    {
        id: 83,
        type: "motivation",
        gender: "both",
        text: `Aaj sahi din ka intezaar mat karo.

Jo din mil gaya
usi ko behtareen banane ki koshish karo.

Abhi shuru karo. 🔥`
    },

    {
        id: 84,
        type: "dialogue",
        gender: "both",
        text: `Kahani unki yaad rehti hai
jo mushkil scene mein bhi
apna kirdaar nahi chhodte.

Apna scene chalne do. 🎬🔥`
    },

    {
        id: 85,
        type: "future",
        gender: "both",
        text: `🔮 Ek din tumhare paas
woh aatmvishwas hoga
jiske liye aaj tum abhyaas kar rahe ho.

Jaldi mat karo.

Khud ko banao. ✨`
    },

    {
        id: 86,
        type: "funny",
        gender: "both",
        text: `Tumhara dimaag:

"Dhyaan lagate hain."

Tumhara phone:

"Ek notification hai."

Tum:

"Bas ek baar dekh leta hoon." 💀😂`
    },

    {
        id: 87,
        type: "family",
        gender: "both",
        text: `Paisa zaroori hai.

Safalta zaroori hai.

Lekin ek din
Aai-Baba ke saath bina tanaav ke
baithna...

shayad sabse badi daulat hai. ❤️`
    },

    {
        id: 88,
        type: "shayari",
        gender: "both",
        text: `Jo khud par yakeen rakhte hain,

woh dheere zaroor chalte hain,

par rukte nahi. 🔥`
    },

    {
        id: 89,
        type: "roast",
        gender: "both",
        text: `Tumhari yaaddasht bahut tez hai.

Tumhe 5 saal purani sharmindagi wali baat
abhi bhi yaad hai...

Bas kal kya padhna tha
woh yaad nahi. 😂💀`
    },

    {
        id: 90,
        type: "song",
        gender: "both",
        text: `🎵 Ise sunna jab
thodi umeed chahiye:

"Phir Se Ud Chala"

Kabhi-kabhi dobara shuruaat bhi
ek khoobsurat aagaaz hoti hai. ❤️`
    },

    {
        id: 91,
        type: "future",
        gender: "both",
        text: `🔮 Bhavishyavani:

Tumhari zindagi mein
ek "pehle aur baad" wala pal aayega.

Kuch log use nakami kahenge.

Tum baad mein use
mod-bindu kahoge. ✨`
    },

    {
        id: 92,
        type: "funny",
        gender: "both",
        text: `Aaj ki salaah:

Zyada sochna band karo.

Kal ki chinta kal karna.

Aaj ke liye
pehle chai. ☕😂`
    },

    {
        id: 93,
        type: "motivation",
        gender: "both",
        text: `Bhai, kisi ke "tu nahi kar sakta"
ko apni pehchaan mat banana.

Ek din chupchaap kar dikhana.

Phir kuch kehne ki zaroorat nahi padegi. 🔥`
    },

    {
        id: 94,
        type: "love",
        gender: "both",
        text: `Kabhi-kabhi pyaar ki kahani
"I love you" se shuru nahi hoti.

Ek seedha:

"Khaana khaya?"

se bhi shuru ho sakti hai. ❤️😂`
    },

    {
        id: 95,
        type: "emotional",
        gender: "both",
        text: `Agar aaj tum sangharsh kar rahe ho,
toh yaad rakho...

Tumhara aane waala khud
aaj wale tum par nirbhar karta hai.

Use nirash mat karna. ❤️`
    },

    {
        id: 96,
        type: "roast",
        gender: "both",
        text: `Bhai, duniya mein do tarah ke log hote hain:

Jo kaam karte hain.

Aur tum...

Jo pehle prerak video dekhte ho,
phir kaam kal se shuru karte ho. 😂`
    },

    {
        id: 97,
        type: "success",
        gender: "both",
        text: `Safalta shor nahi karti.

Kabhi-kabhi woh chupchaap bantee hai
jab koi dekh bhi nahi raha hota.

Mehnat jaari rakho. 🚀`
    },

    {
        id: 98,
        type: "shayari",
        gender: "both",
        text: `Aaj ka din bhi guzar jayega,

kal ek nayi subah aayegi.

Bas dil mein thodi si
umeed bachaaye rakhna. 🌅❤️`
    },

    {
        id: 99,
        type: "random",
        gender: "both",
        text: `Ek ajeeb sa andaza:

Aaj tum ye sandesh padhkar
thoda muskuraoge.

Aur shayad...

kisi dost ko bhi bhejoge. 😂❤️`
    },

    {
        id: 100,
        type: "future",
        gender: "both",
        text: `🔮 AAKHRI BHAVISHYAVANI

Tumhari kahani abhi poori nahi hui.

Jo pareshaniyan aaj bahut badi lag rahi hain,
ek din wahi tumhari sabse mazboot yaadein banengi.

Chalte raho.

Sabse accha adhyay abhi baaki hai. ❤️🔥`
    }

];

/* =================================
   RANDOM MESSAGE
================================= */
function getRandomMessage() {

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    return messages[randomIndex];

/*
    function getRandomMessage() {

    return messages[0]; 
*/

}

/* =================================
   SHOW OPTIONAL MEDIA
================================= */

function showMedia(message) {

    // Pehle purana media clear karo
    mediaContainer.innerHTML = "";

    // Agar media nahi hai
    if (
        !message.mediaType ||
        message.mediaType === "none" ||
        !message.media
    ) {
        return;
    }


    /* VIDEO */

    if (message.mediaType === "video") {

        const video = document.createElement("video");

        video.src = message.media;

        video.controls = true;

        video.playsInline = true;

        video.preload = "metadata";

        video.setAttribute("controlsList", "nodownload");

        mediaContainer.appendChild(video);
    }


    /* IMAGE */

    else if (message.mediaType === "image") {

        const image = document.createElement("img");

        image.src = message.media;

        image.alt = "LIFE AI";

        mediaContainer.appendChild(image);
    }


    /* AUDIO */

    else if (message.mediaType === "audio") {

        const audio = document.createElement("audio");

        audio.src = message.media;

        audio.controls = true;

        audio.preload = "metadata";

        mediaContainer.appendChild(audio);
    }
}


/* =================================
   SHOW MESSAGE
================================= */

revealBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();


    /* Name validation */

    if (name === "") {

        alert("Please enter your name.");

        nameInput.focus();

        return;

    }


    /* Gender validation */

    if (selectedGender === "") {

        alert("Please select Man or Lady.");

        return;

    }


    /* Get ONE random message */

    const selectedMessage = getRandomMessage();


    /* Set name */

    dearText.textContent = `Dear ${name},`;


    /* Set ONE message */

    messageText.textContent =
        selectedMessage.text;


    /* Show optional media */
        showMedia(selectedMessage);


    /* Hide welcome */

    document
        .querySelector(".welcome-screen")
        .classList.add("hidden");


    /* Show letter */

    messageScreen.classList.remove("hidden");

});


/* =================================
   TRY AGAIN
================================= */

againBtn.addEventListener("click", () => {

    messageScreen.classList.add("hidden");

    document
        .querySelector(".welcome-screen")
        .classList.remove("hidden");

});