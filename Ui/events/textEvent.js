import { addE,qs } from "../../helper/dom.js"
function textEvent(e){
    addE(document,'edit', (e) => qs("h1").textContent=e.detail)
    addE(document,'reset', (e) => qs("h1").textContent=e.detail)
    
}
export {textEvent}