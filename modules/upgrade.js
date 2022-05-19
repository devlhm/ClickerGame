import { increaseClickAmount } from "./input.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";
import { updateUpgradePriceLabel } from "./ui.js";

class Upgrade {
	constructor(type, title, description, value, basePrice) {
		this.type = type;
		this.title = title;
		this.description = description;
		this.value = value;
		this.basePrice = basePrice;
		this.level = 1;

		this.price = this.basePrice
	}

	levelUp() {
		this.level++;
		this.price = Math.round((this.price/100)*15 + this.price)
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

export { Upgrade, UpgradeTypes, installUpgrade };
