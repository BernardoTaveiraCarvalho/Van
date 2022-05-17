
import { qs,addE } from "../../helper/dom.js"
function cleanEvent(text){
    const inputClean = qs('input[type=reset]')
    console.log("CleanEvent:"+text)
    addE(inputClean,"click",(e)=>{
        e.preventDefault()
        const input =qs("form")
        input.reset()
        const event = new CustomEvent('reset',{ detail: text })
        document.dispatchEvent(event)
    })
}

export {cleanEvent}

