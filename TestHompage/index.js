
let headTitle;
document.addEventListener('click', (e) => {
    var targetElement = e.target;
    // 페이지 이동 로직
    if(targetElement.className == "goPage"){
        // window.location.href = targetElement.id + ".html";
        const targetHtml = targetElement.id + ".html";
        console.log(targetElement.dataset.text);
        headTitle = targetElement.dataset.text;        
        document.getElementById('HeaderDiv').innerHTML = headTitle
        if(targetHtml == "index.html"){
            document.getElementById('HeaderDiv').innerHTML = "My Homepage"
            location.href=targetHtml;
        }else{
            console.log(targetHtml)
            contentDiv.href = targetHtml;
            $('#contentDiv').load(targetHtml);
        }
    } else{
        console.log("&&&",targetElement.parentElement.id)
        console.log("&&&",targetElement.id)
        console.log("||&&&||",targetElement.className)
    }
});

function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}

document.addEventListener('click',clickEffect);