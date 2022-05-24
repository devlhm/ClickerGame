import { increaseClickAmount } from "./input.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";
import { getUpgradeElement, updateUpgradePriceLabel } from "./ui.js";

class Upgrade {
	constructor(type, title, description, value, basePrice, maxLevel, imgUrl) {
		this.type = type;
		this.title = title;
		this.description = description;
		this.value = value;
		this.price = basePrice;
		this.level = 0;
		this.maxLevel = maxLevel
		this.bought = false;
		this.imgUrl = imgUrl;
	}

	levelUp() {
		this.level++;
		this.price = Math.round((this.price/100)*50 + this.price);
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
		if(upgrade.level == upgrade.maxLevel) return;

		const upgradeElement = getUpgradeElement(upgrade);

		if(meters < upgrade.price) {
			upgradeElement.querySelector(".upgradeIcon").classList.add("buyBlocked");
			upgradeElement.querySelector(".upgradeButton").classList.add("buyBlocked");
		} else {
			upgradeElement.querySelector(".upgradeIcon").classList.remove("buyBlocked");
			upgradeElement.querySelector(".upgradeButton").classList.remove("buyBlocked");
		}
	});
}

export { Upgrade, UpgradeTypes, installUpgrade, checkBuyableUpgrades };
