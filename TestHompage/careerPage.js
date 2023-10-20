
document.getElementById("careerPage").addEventListener('click', (e) => {
    var targetElement = e.target;
    console.log("**********", targetElement.className);
    if(targetElement.className == "ffff"){
        targetElement.is(":nth(2)").style.display = "block"
    }
});