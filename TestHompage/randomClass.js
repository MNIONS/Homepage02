var arraySimple;
var personNum;
var groupNum;
var rowNum;
var delNum;

var arr
var elementCnt;
var rowTable = "";
document.getElementById("randomClassBtn").addEventListener('click', (e) => {
    var targetElement = e.target;
    console.log("targetElement.className", targetElement.className);
    if(targetElement.className == "randomClassBtn"){
        arraySimple = (document.getElementById('testText').value).split(" ");
        personNum = Number(arraySimple.length); //총인원수
        groupNum = Number(document.getElementById('groupNum').value); //조별 인원수
        console.log(groupNum);
        console.log(personNum);
        if(groupNum > personNum){
        } else{
            rowNum = Number(parseInt( personNum / groupNum))
            console.log("????????");
            delNum = Number(personNum % groupNum) //배정받지 못한 인원

            arr = new Array(rowNum); //총이원수에서 할당 인원을 나눈 숫자 즉 그룹의 숫자 크기 만큼 배열 생성
            elementCnt = 0;

           console.log(arraySimple);      
           shuffleArray(arraySimple);
           console.log(arraySimple);
           console.log("delNum");
           console.log(delNum);

           for(var i =0; i < arr.length; i++){
                arr[i] = new Array(groupNum);
                for(var j = 0; j < groupNum; j++){
                    var name = arraySimple[elementCnt]
                    arr[i][j] = name
                    elementCnt += 1;
                }
           }
          
     
           console.log("생성된 배열");
           console.log(arr);
           console.log(arr[0].length);
           createDiv(arr)
        }
    }
  });
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
//개미는 오늘도 열심 일은 한다 카리나가 세상에서 제일 이쁘다 하지만 이것은 진실 이다 소나 애플 미니언 맨유 깁미더 챔피언 왔더 카멜로온
function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

function createDiv(inputArray){
    // for(var k = 0; k < delNum; k++){
    //     arr[k][groupNum+k+1] = arraySimple[element+k]
    // }
    console.log("weweew")
    console.log(arr)
    console.log(inputArray);
    rowTable = "";
    for(var i = 0; i < inputArray.length; i++){
        rowTable += "<div class='rowTable'>"
        rowTable += (i+1) + "조 : "
        for(var j = 0; j <inputArray[i].length; j++){            
            // var cellTable = document.createElement("div");
            // console.log(cellTable);
            // rowTable.appendChild(cellTable);
            // console.log("1");
            rowTable += " " +inputArray[i][j] +" "
        }
        rowTable += "</div>"
    }
    createDiv2()
}

function createDiv2(){
    if(arraySimple[Number(elementCnt)]){
        rowTable += "<div class='rowTable'> 남은 인원 : "
        for(var i =0; i < delNum; i++){
            rowTable += " " +arraySimple[Number(elementCnt)+i] +" "
        }
        rowTable += "</div>"
    }
    document.getElementById('testWhat').innerHTML = rowTable;
}



{/* <div class="rowTable">
<div class="cellTable">01</div>
<div class="cellTable">02</div>
<div class="cellTable">03</div>
<div class="cellTable">03</div>
</div> */}