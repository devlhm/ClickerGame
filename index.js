import { updateKilometersLabel, renderUpgrades } from "./modules/ui.js";
import { Upgrade, UpgradeTypes } from "./modules/upgrade.js";

let kilometers = 0;
const upgrades = [
	new Upgrade(
		UpgradeTypes.INCREASE_CLICK_AMOUNT,
		"Pneus Novos",
		"Aumenta a quantidade andada por clique em 2!",
		2,
		1
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

function updateKilometers(newKm) {
	kilometers = newKm;
	updateKilometersLabel();
}

const increaseKilometers = (factor) => updateKilometers(kilometers + factor);
const decreaseKilometers = (factor) => updateKilometers(kilometers - factor);

export {
	updateKilometers,
	increaseKilometers,
	decreaseKilometers,
	kilometers,
	upgrades,
};
