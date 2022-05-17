import { addE,qs } from "../../helper/dom.js"

function inputEvent(){
    addE(qs("input"),"keydown", (e) => {
        const event = new CustomEvent('edit', { detail: e.target.value })
        document.dispatchEvent(event)
    })
}
export {inputEvent}