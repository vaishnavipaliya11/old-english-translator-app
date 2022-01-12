const btnTranslate = document.querySelector("#btn-translate")
const input = document.querySelector("#txt-input")
const outputDiv =  document.querySelector(".output")
const errorDiv = document.querySelector("#error")

const url ="https://api.funtranslations.com/translate/oldenglish.json"


const setUrl = (text)=> url+"?"+"text="+text 

const clickHandler=(userInput)=> {
  var userInput = input.value
  if(userInput==""){
  emptyTextError()
}

else
{
let errorHandler =(error)=> {alert ("try after some time")}

errorDiv.style.display="none"

  fetch(setUrl(userInput))
  .then(response=> response.json())
  .then(json => {
    const translatedText= json.contents.translated
    outputDiv.innerText=translatedText
  }).catch(errorHandler)
  }

}

const emptyTextError = ()=>{
  errorDiv.style.display="block";
  outputDiv.style.display="none";
  errorDiv.innerHTML="you have not given the text . Please refresh the page and enter the text !!"
}

btnTranslate.addEventListener("click",clickHandler)
