import { meters, deltaMeters, upgrades } from "../index.js";
import { upgradeBought } from "./input.js";

function renderUpgrades(upgrades) {
	const upgradeContainer = document.getElementById("upgrade-container");
	const upgradeTemplate = document.getElementById("upgrade-template");

	const img = upgradeTemplate.content.querySelector(".upgradeIcon");
	const title = upgradeTemplate.content.querySelector("h1");
	const description = upgradeTemplate.content.querySelector(".description");
	const button = upgradeTemplate.content.querySelector("button");
	const container = upgradeTemplate.content.querySelector(".upgradeCard");

	for (let index = 0; index < upgrades.length; index++) {
		const upgrade = upgrades[index];

		img.style.backgroundImage = `url("${ upgrade.imgUrl }")`;
		title.innerText = upgrade.title;
		description.innerText = upgrade.description;
		button.innerText = upgrade.price + "m";
		container.dataset.upgradeIndex = index;

		const clone = document.importNode(upgradeTemplate.content, true);
		const cloneButton = clone.querySelector("button");

		cloneButton.addEventListener("click", () => upgradeBought(index));

		upgradeContainer.appendChild(clone);
	}
}

function bgAnimTimer() {
	moveBg();
	setTimeout(() => bgAnimTimer(), 10);
}

let bgSpeedFactor = .02;
let bgExponencialSpeedFactor = 1.45;
let bgOffset = 0;

function moveBg() {
    const bgSpeed = Math.pow((deltaMeters * bgSpeedFactor), bgExponencialSpeedFactor)

	const bg = document.getElementById("bg-container");
	bgOffset = bgOffset - bgSpeed // <= -1000 ? 0 : bgOffset - bgSpeed;

	bg.style.backgroundPositionX = bgOffset + "%";
}

function getUpgradeElement(upgrade) {
	const index = upgrades.indexOf(upgrade);
	return document.querySelector(`[data-upgrade-index="${index}"]`);
}

function updateUpgradePriceLabel(upgrade) {
	const upgradeElement = getUpgradeElement(upgrade);
	upgradeElement.querySelector("button").innerText = upgrade.price + "m";
	upgradeElement.querySelector(".progressBar").style.width = (upgrade.level/upgrade.maxLevel) * 100 + "%";
}

function maxPriceLabel(upgrade){
	const upgradeElement = getUpgradeElement(upgrade);
	upgradeElement.querySelector("button").innerText = "Máximo!";
	upgradeElement.querySelector(".upgradeIcon").classList.add("buyBlocked");
	upgradeElement.querySelector(".upgradeButton").classList.add("buyBlocked");
}

function updateMetersLabel() {
	document.getElementById("meters-label").innerText = meters.toFixed(1) + "m";
}

function updateMetersPerSecLabel(deltaMeters) {
	document.getElementById("meters-per-sec-label").innerText = (deltaMeters * 3.6).toFixed(1) + "km/h";
}

export {
	updateMetersLabel,
	renderUpgrades,
	updateMetersPerSecLabel,
	updateUpgradePriceLabel,
	bgAnimTimer,
	getUpgradeElement,
	maxPriceLabel,
};
