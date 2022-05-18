import { move } from './modules/moveInput.js';
import { updateKilometersLabel } from './modules/ui.js';

let kilometers = 0;
const moveButtonId = "move-button"

document.getElementById(moveButtonId).addEventListener("click", event => {
    kilometers = move(kilometers);
    updateKilometersLabel(kilometers);
});
