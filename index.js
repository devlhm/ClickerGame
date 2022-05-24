import { updateMetersLabel, renderUpgrades, updateMetersPerSecLabel, bgAnimTimer } from "./modules/ui.js";
import { Upgrade, UpgradeTypes, checkBuyableUpgrades } from "./modules/upgrade.js";

let meters = 0;
let deltaMeters = 0;

const upgrades = [
    new Upgrade(
        UpgradeTypes.INCREASE_CLICK_AMOUNT,
        "Pneus Novos",
        "Aumenta a quantidade andada por clique em 5!",
        5,
        80,
		10,
        "./img/pneu.png"
    ),
    new Upgrade(
        UpgradeTypes.INCREASE_PASSIVE_INCOME,
        "Tijolo no Acelerador!",
        "Aumenta a quantidade andada passivamente em 3!",
        3,
        150,
		10,
        "./img/tijolo.png"
    ),
];

renderUpgrades(upgrades);
bgAnimTimer();

function updateMeters(newMeters) {
    const difference = newMeters - meters
    deltaMeters += difference > 0 ? difference : 0;
    meters = newMeters;
    updateMetersLabel();
	checkBuyableUpgrades(upgrades, newMeters)
}

const desacelerationPerInterval = .1
const desacelerationInterval = 100
setInterval(() => {
    deltaMeters = Math.max(deltaMeters - (desacelerationPerInterval * deltaMeters), 0);
}, desacelerationInterval);

setInterval(() => {
	updateMetersPerSecLabel(deltaMeters);
}, 1000);



const increaseMeters = (factor) => updateMeters(meters + factor);
const decreaseMeters = (factor) => updateMeters(meters - factor);

export {
    updateMeters,
    increaseMeters,
    decreaseMeters,
    meters,
	deltaMeters,
    upgrades,
};