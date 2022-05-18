import { increaseClickAmount } from "./input.js";
import { increasePassiveIncomeAmt } from "./passiveIncome.js";

class Upgrade {
	constructor(type, title, description, value, price) {
		this.type = type;
		this.title = title;
		this.description = description;
		this.value = value;
		this.price = price;
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
