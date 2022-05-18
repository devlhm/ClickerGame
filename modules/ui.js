import { kilometers } from "../index.js";
import { upgradeBought } from "./input.js";

function renderUpgrades(upgrades) {
	const upgradeContainer = document.getElementById("upgrade-container");
	const upgradeTemplate = document.getElementById("upgrade-template");

	const title = upgradeTemplate.content.querySelector("h1");
	const description = upgradeTemplate.content.querySelector("p");
	const button = upgradeTemplate.content.querySelector("button");
	const container = upgradeTemplate.content.querySelector("div");

	for (let index = 0; index < upgrades.length; index++) {
		const upgrade = upgrades[index];
		title.innerText = upgrade.title;
		description.innerText = upgrade.description;
		button.innerText = upgrade.price + "km";
		container.dataset.upgradeIndex = index;

		const clone = document.importNode(upgradeTemplate.content, true);
		const cloneButton = clone.querySelector("button");

		cloneButton.addEventListener("click", () => upgradeBought(index));

		upgradeContainer.appendChild(clone);
	}
}

function updateKilometersLabel() {
	document.getElementById("kilometers-label").innerText = kilometers + " km";
}

export { updateKilometersLabel, renderUpgrades };
