let text1 = "TATA POWER";
let typedText1 = document.getElementById("typed-text");
let i = 0;

(function type() {
    if (i < text1.length) {
        typedText1.innerHTML += text1.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}());


let text2 = "HACKATHON";
let typedText2 = document.getElementById("typed-text2");
let j = 0;

(function type2() {
        if (j - 1 < text2.length) {
            typedText2.innerHTML += text2.charAt(j - 1);
            j++;
            setTimeout(type2, 100);
        }
    }

    ());