const randomWord = async () => { //단어 생성
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    console.log(data.slip.advice)
    document.getElementById('goodsentenceContent').innerHTML = data.slip.advice;
    document.getElementById('goodsentenceContent').style.font= "italic small-caps bold 50px Tapestry";
    document.getElementById('goodsentenceContent').style.fontKerning= "normal";
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("randomColor", randomColor);
    document.getElementById('goodsentenceContent').style.backgroundColor = "#" + randomColor;
    document.getElementById('goodsentenceContent').style.border = "3px solid black"
    // document.getElementById('goodsentenceContent02').innerHTML = data.slip.advice;
    // document.getElementById('goodsentenceContent02').style.font= "italic small-caps bold 50px Water Brush";
};

randomWord();