import { updateMetersLabel, renderUpgrades, updateMetersPerSecLabel, bgAnimTimer } from "./modules/ui.js";
import { Upgrade, UpgradeTypes, checkBuyableUpgrades } from "./modules/upgrade.js";

let meters = 0;
let deltaMeters = 0;

const upgrades = [
    new Upgrade(
        UpgradeTypes.INCREASE_CLICK_AMOUNT,
        "Pneus Novos",
        "Aumenta a quantidade andada por clique em 2!",
        2,
        10,
		10
    ),
    new Upgrade(
        UpgradeTypes.INCREASE_PASSIVE_INCOME,
        "Tijolo no Acelerador!",
        "Aumenta a quantidade andada passivamente em 10!",
        10,
        100,
		10
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

setInterval(() => {
    updateMetersPerSecLabel(deltaMeters);
    deltaMeters = 0;
}, 1000);

const increaseMeters = (factor) => updateMeters(meters + factor);
const decreaseMeters = (factor) => updateMeters(meters - factor);

export {
    updateMeters,
    increaseMeters,
    decreaseMeters,
    meters,
    upgrades,
};