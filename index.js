import { updateKilometersLabel, renderUpgrades, updateKmPerSecLabel, bgAnimTimer } from "./modules/ui.js";
import { Upgrade, UpgradeTypes } from "./modules/upgrade.js";

let kilometers = 0;
let deltaKm = 0;

const upgrades = [
    new Upgrade(
        UpgradeTypes.INCREASE_CLICK_AMOUNT,
        "Pneus Novos",
        "Aumenta a quantidade andada por clique em 2!",
        2,
        10
    ),
    new Upgrade(
        UpgradeTypes.INCREASE_PASSIVE_INCOME,
        "Tijolo no Acelerador!",
        "Aumenta a quantidade andada passivamente em 10!",
        10,
        100
    ),
];

renderUpgrades(upgrades);
bgAnimTimer();

function updateKilometers(newKm) {
    const difference = newKm - kilometers
    deltaKm += difference > 0 ? difference : 0;
    kilometers = newKm;
    updateKilometersLabel(deltaKm);
}

setInterval(() => {
    updateKmPerSecLabel(deltaKm);
    deltaKm = 0;
}, 1000);

const increaseKilometers = (factor) => updateKilometers(kilometers + factor);
const decreaseKilometers = (factor) => updateKilometers(kilometers - factor);

export {
    updateKilometers,
    increaseKilometers,
    decreaseKilometers,
    kilometers,
    upgrades,
};