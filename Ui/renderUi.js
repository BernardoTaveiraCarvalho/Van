import { geth1 } from "./events/geth1.js";
import { textEvent } from "./events/textEvent.js";
import { inputEvent } from "./events/inputEvent.js";
import { cleanEvent } from "./events/cleanEvent.js";
function renderUi() {
 const text = geth1()
    textEvent()
   inputEvent()
   cleanEvent(text)
}
export { renderUi }