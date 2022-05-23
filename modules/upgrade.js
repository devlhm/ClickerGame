import { increaseClickAmount } from "./input.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";
import { getUpgradeElement, updateUpgradePriceLabel } from "./ui.js";

class Upgrade {
	constructor(type, title, description, value, basePrice, maxLevel) {
		this.type = type;
		this.title = title;
		this.description = description;
		this.value = value;
		this.price = basePrice;
		this.level = 0;
		this.maxLevel = maxLevel
		this.bought = false;
	}

	levelUp() {
		this.level++;
		this.price = this.level > 1 ? Math.round((this.price/100)*15 + this.price) : this.price;
		console.log(this.price)
		installUpgrade(this);
		updateUpgradePriceLabel(this);
	}
}

const UpgradeTypes = {
	INCREASE_CLICK_AMOUNT: 0,
	INCREASE_PASSIVE_INCOME: 1,
};

function installUpgrade(upgrade) {
	console.log(upgrade.type);
	switch (upgrade.type) {
		case UpgradeTypes.INCREASE_CLICK_AMOUNT:
			increaseClickAmount(upgrade.value);
			break;
		case UpgradeTypes.INCREASE_PASSIVE_INCOME:
			increasePassiveIncomeAmt(upgrade.value);
			break;
	}
}

function checkBuyableUpgrades(upgrades, meters) {
	upgrades.forEach(upgrade => {
		const upgradeElement = getUpgradeElement(upgrade);

		if(meters < upgrade.price) {
			upgradeElement.classList.add("buyBlocked")
		} else {
			upgradeElement.classList.remove("buyBlocked")
		}
	});
}

export { Upgrade, UpgradeTypes, installUpgrade, checkBuyableUpgrades };
