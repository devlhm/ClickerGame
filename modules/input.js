import { installUpgrade } from "./upgrade.js";
import {
	meters,
	increaseMeters,
	decreaseMeters,
	upgrades,
} from "../index.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";

let clickAmount = 2;

const moveButtonId = "move-button";
document
	.getElementById(moveButtonId)
	.addEventListener("click", (event) => increaseMeters(clickAmount));

function increaseClickAmount(factor) {
	clickAmount += factor;
}

function upgradeBought(upgradeIndex) {
	const upgrade = upgrades[upgradeIndex];

	if (upgrade.price <= meters && upgrade.level < upgrade.maxLevel) {
		decreaseMeters(upgrade.price);
		upgrade.levelUp()
	}
}

document
	.getElementById("passive-income")
	.addEventListener("click", () => increasePassiveIncomeAmt(10));

export { increaseClickAmount, upgradeBought };
