import { qs } from "../../helper/dom.js"
function geth1(){
  const  text= qs('h1').textContent
  console.log("geth1:"+text)
 return text
}


export {geth1}