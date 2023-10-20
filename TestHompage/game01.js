const randomWordGenerator = async () => { //단어 생성
  const res = await fetch(`https://random-word-api.herokuapp.com/word`);  
  const data = await res.json();
  const randomWord = data[0];
  document.getElementById("word").textContent = randomWord;
};

window.addEventListener('keypress', (event) => {
  if(event.target.id == "wordInput" && event.keyCode == 13){    
    checkValue(event.target.value);
  }
})

//단어 값 체크
//점수설정
function checkValue(textValue){
  if(textValue == document.getElementById("word").textContent){
    randomWordGenerator();
    var inputValue = document.getElementById('pointInput').value;
    inputValue = Number(inputValue) + 1;
    document.getElementById('pointInput').value = inputValue;
    document.getElementById('pointDiv').innerHTML  = "점수 : " + inputValue + "점";
    var inputTValue = document.getElementById('timelessInput').value;
    inputTValue = Number(inputTValue) + 5;
    document.getElementById('timelessInput').value = inputTValue;
    document.getElementById('timelessDiv').innerHTML  = "남은 시간 : " + inputTValue + "초";
    document.getElementById("word").textContent = "";
  } else{
    alert("실패");
  }
}


document.getElementById("gamePage").addEventListener('click', (e) => {
  var targetElement = e.target;
  if(targetElement.className == "startBtn"){
    randomWordGenerator()
    setInterval('testTime()', 1000);
  }
});
//시간 설정
function testTime(){
  var inputValue = document.getElementById('timelessInput').value;
  inputValue = Number(inputValue) - 1;
  document.getElementById('timelessInput').value = inputValue;
  document.getElementById('timelessDiv').innerHTML  = "남은 시간 : " + inputValue + "초";
}
