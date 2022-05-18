import { installUpgrade } from "./upgrade.js";
import {
	kilometers,
	increaseKilometers,
	decreaseKilometers,
	upgrades,
} from "../index.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";

let clickAmount = 1;

const moveButtonId = "move-button";
document
	.getElementById(moveButtonId)
	.addEventListener("click", (event) => increaseKilometers(clickAmount));

function increaseClickAmount(factor) {
	clickAmount += factor;
}

function upgradeBought(upgradeIndex) {
	const upgrade = upgrades[upgradeIndex];

	if (upgrade.price <= kilometers) {
		decreaseKilometers(upgrade.price);
		installUpgrade(upgrade);
		const upgradeElement = document.querySelector(
			`[data-upgrade-index="${upgradeIndex}"]`
		);
		upgradeElement.parentNode.removeChild(upgradeElement);
	}
}

document
	.getElementById("passive-income")
	.addEventListener("click", () => increasePassiveIncomeAmt(10));

export { increaseClickAmount, upgradeBought };
