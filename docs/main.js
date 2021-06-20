var userLang = navigator.language || navigator.userLanguage;

function langSet() {
    if (userLang == "tr-TR") {
        document.getElementById("key").placeholder = "anahtar";
        document.getElementById("message").placeholder = "mesaj";
        document.getElementById("togglelegend").innerHTML = "çöz | boz";
        document.getElementById("run").innerHTML = "çalıştır";
        document.title = "wowsignal | şifreleme";
    }
}
langSet()

const charSet = [
    "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h",
    "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p",
    "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "q",
    "w", "x", ".", ",", "?", "!", ":", "(", ")", "*",
    "#", "%", "&", "/", "+", "-", ";", "$", "@", "€",
    "_", "{", "}", "[", "]", "=", ">", "<", "|", " ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2"),
};

function animationLang() {
    if (userLang == "tr-TR") {
        return [
            "",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "8$,o]>v_",
            "3ğ7hc_]3",
            "yüzüğü",
            "kartallarla",
            "götürün",
            "",
            "",
            "ğlhç€tğ",
            "+npöö6 4",
            "alan",
            "turing'i",
            "harcadılar",
            "",
            "",
            "7%b{85?2c",
            "_0};8:?",
            "enigma'nın",
            "tersi",
            "amgine",
            ":D",
            "sadasffasd",
            "",
            "",
            "deminki",
            "efekt",
            "değildi",
            "random",
            "güldüm",
            ":D",
            "",
            "",
            "spdç7hnü=",
            "67u;ga7",
            "yazılım",
            "öğrenin",
            "",
            "",
            "!,g;>*7ç[",
            "b7n/j?:",
            "javascript ile",
            "yazdım",
            "java",
            "farklı",
            "bir dil",
            "",
            "",
            ";9_0d?,",
            "x%iö=ıp9fö",
            "kaynak",
            "açık da",
            "anahtarı",
            "bilmeden",
            "çözemezler",
            "",
            "",
            "keylogger",
            "varsa",
            "bilemem",
            "",
            "",
            "ç,14ç]iq4!pn",
            "öab4i5öw3",
            "send",
            "nudes",
            "",
            "",
            "_;ş5iö%a",
            ";3. v}x3c<",
            "başım",
            "bağlı",
            "değil",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "üdd<;€h",
            "w r%o(*d7=a",
            "başa",
            "sardı",
            "sandın",
            ":D",
            "",
            "",
            "_mğ4]ü%4?",
            "ş[|+c*+xwk",
            "ahım",
            "şahım",
            "bi proje",
            "değil",
            "",
            "",
            "0gs4ıcp{d*;",
            "a|2ğ0gp8&",
            "bu animasyonu",
            "birinden",
            "çarptım",
            "",
            "",
            "*he|9s[*_/;a",
            "|@,ğb{7r_;ü",
            "neyse",
            "başa",
            "sarsın",
            "artık",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "8$,o]>v_",
            "3ğ7hc_]3",
            "yüzüğü",
            "kartallarla",
            "götürün",
            "",
            "",
            "8ıc|*7(ah",
            "€tğ<c;iöa7",
            "kandırdım :D",
            "",
            "",
            "h4te{75*<<",
            "]€gd|€mfd",
            "tamam",
            "bu sefer",
            "ciddi",
            "",
            "",
            "iw6aw;<=|lq :D",
            "",
            ""
        ];
    } else {
        return [
            "",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "8$,o]>v_",
            "3ğ7hc_]3",
            "carry",
            "the ring",
            "by egles",
            "",
            "",
            "ğlhç€tğ",
            "+npöö6 4",
            "cheap",
            "death",
            "4 alan",
            "turing",
            "",
            "",
            "7%b{85?2c",
            "_0};8:?",
            "designated",
            "shitti*g",
            "site",
            "",
            "",
            "sadasffasd",
            "",
            "",
            "wasn't effect",
            "i loled",
            ":D",
            "",
            "",
            "f;6u[+ç/9n",
            ";!>. ?!2h;{.",
            "i hate",
            "post-truth",
            "",
            "",
            "spdç7hnü=",
            "67u;ga7",
            "learn to",
            "code",
            "",
            "",
            "!,g;>*7ç[",
            "b7n/j?:",
            "codded with",
            "javascript",
            "java is",
            "different",
            "language",
            "",
            "",
            ";9_0d?,",
            "x%iö=ıp9fö",
            "open source",
            "but",
            "they can't",
            "solve",
            "without key",
            "",
            "",
            "maybe with",
            "keylogger",
            "idk",
            "",
            "",
            "ç,14ç]iq4!pn",
            "öab4i5öw3",
            "send",
            "nudes",
            "",
            "",
            "_;ş5iö%a",
            ";3. v}x3c<",
            "i have",
            "no babe",
            "for now",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "üdd<;€h",
            "w r%o(*d7=a",
            "you thought",
            "returned to",
            "the top of",
            "the list",
            "right?",
            ":D",
            "",
            "",
            "_mğ4]ü%4?",
            "ş[|+c*+xwk",
            "not a",
            "big",
            "project",
            "meh",
            "",
            "",
            "0gs4ıcp{d*;",
            "a|2ğ0gp8&",
            "this animation",
            "is stolen",
            "from codepen",
            "",
            "",
            "*he|9s[*_/;a",
            "|@,ğb{7r_;ü",
            "gosh!",
            "let's start",
            "again",
            "",
            "",
            "gbmq-_j",
            "ğğn1 8$,",
            "-",
            "--",
            "---",
            "wow",
            "signal",
            "---",
            "--",
            "-",
            "",
            "",
            "8$,o]>v_",
            "3ğ7hc_]3",
            "carry",
            "the ring",
            "by eagles",
            "",
            "",
            "8ıc|*7(ah",
            "€tğ<c;iöa7",
            "i got u :D",
            "",
            "",
            "h4te{75*<<",
            "]€gd|€mfd",
            "ok ok",
            "seriously",
            "finished",
            "",
            "",
            "iw6aw;<=|lq :D",
            "",
            ""
        ];
    }
}

var texts = animationLang();
const morphTime = 0.4;
const cooldownTime = 0.05;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}
animate();

function getKey() {
    let theKeyObj = document.getElementById("key");
    let theKey = theKeyObj.value;
    theKey = theKey.toLowerCase();
    return theKey;

}

function getMessage() {
    let theMessageObj = document.getElementById("message");
    let theMessage = theMessageObj.value;
    theMessage = theMessage.toLowerCase();
    return theMessage;

}
var letter;

function indexFinder(letter) {
    for (let i = 0; i < 70; i++) {
        if (letter == charSet[i]) {
            return i
        }
    }
    return 55
}

function cryptoDo() {
    let theKey;
    let theMessage;
    theKey = getKey();
    theMessage = getMessage();

    let checkBox;
    checkBox = document.getElementById("toggleinput");
    let keyArray;
    keyArray = theKey.split("");

    let messageArray;
    messageArray = theMessage.split("");
    let num;
    num = 0;

    if (checkBox.checked == true) {
        for (let i = 0; i < messageArray.length; i++) {
            num = 0;
            if (i % 3 == 0) {
                if (i % 6 == 0) {
                    num = (keyArray.length + indexFinder(keyArray[i % keyArray.length]) + 28 + indexFinder(messageArray[i])) % 70;
                    messageArray[i] = charSet[num];
                } else {
                    num = (keyArray.length + indexFinder(keyArray[i % keyArray.length]) + 42 + indexFinder(messageArray[i])) % 70;;
                    messageArray[i] = charSet[num];
                }
            } else if (i % 3 == 1) {
                num = (keyArray.length + indexFinder(keyArray[i % keyArray.length]) + 9 + indexFinder(messageArray[i])) % 70;
                messageArray[i] = charSet[num];
            } else {
                num = (keyArray.length + indexFinder(keyArray[i % keyArray.length]) + 23 + indexFinder(messageArray[i])) % 70;
                messageArray[i] = charSet[num];
            }
        }
        document.getElementById('message').value = messageArray.join("");
    } else {
        for (let i = 0; i < messageArray.length; i++) {
            num = 0;
            if (i % 3 == 0) {
                if (i % 6 == 0) {
                    num = (-1 * keyArray.length - indexFinder(keyArray[i % keyArray.length]) - 28 + indexFinder(messageArray[i]));
                    while (num < 0) {
                        num += 70;
                    }
                    messageArray[i] = charSet[num];
                } else {
                    num = (-1 * keyArray.length - indexFinder(keyArray[i % keyArray.length]) - 42 + indexFinder(messageArray[i]));
                    while (num < 0) {
                        num += 70;
                    }
                    messageArray[i] = charSet[num];
                }
            } else if (i % 3 == 1) {
                num = (-1 * keyArray.length - indexFinder(keyArray[i % keyArray.length]) - 9 + indexFinder(messageArray[i]));
                while (num < 0) {
                    num += 70;
                }
                messageArray[i] = charSet[num];
            } else {
                num = (-1 * keyArray.length - indexFinder(keyArray[i % keyArray.length]) - 23 + indexFinder(messageArray[i]));
                while (num < 0) {
                    num += 70;
                }
                messageArray[i] = charSet[num];
            }

        }
        document.getElementById('message').value = messageArray.join("");
    }


}