var btnTranslate = document.querySelector("#btn-translate")
var input = document.querySelector("#txt-input")
var outputDiv =  document.querySelector(".output")
var errorDiv = document.querySelector("#error")
console.log(errorDiv);
var url ="https://api.funtranslations.com/translate/oldenglish.json"

function setUrl(text){
  return url +"?"+"text="+text
}

function clickHandler(userInput) {

  var userInput = input.value

  if(userInput==""){
  emptyTextError()

}else{

errorDiv.style.display="none"

  fetch(setUrl(userInput))
  .then(response=> response.json())
  .then(json => {
    var translatedText= json.contents.translated
    outputDiv.innerText=translatedText
  }).catch(errorHandler)
  }

  function errorHandler(error){
    alert("try after some time")
  }
}

function emptyTextError(){
  errorDiv.style.display="block";
  outputDiv.style.display="none";
  errorDiv.innerHTML="you have not given the text . Please refresh the page and enter the text !!"
}





btnTranslate.addEventListener("click",clickHandler)
