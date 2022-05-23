import { increaseMeters } from "../index.js";

let passiveIncomeAmt = 0;
const passiveIncomeInterval = 100; // milisegundos

function setPassiveIncomeAmt(newAmt) {
	stopRoutine();
	passiveIncomeAmt = newAmt;

	if (passiveIncomeAmt != 0) {
		startRoutine();
	}
}

function increasePassiveIncomeAmt(factor) {
	setPassiveIncomeAmt(passiveIncomeAmt + factor);
}

function multiplyPassiveIncomeAmt(factor) {
	setPassiveIncomeAmt(passiveIncomeAmt * factor);
}

let routine = null;

function startRoutine() {
	routine = setInterval(
		() => increaseMeters(passiveIncomeAmt),
		passiveIncomeInterval
	);
}

function stopRoutine() {
	if (routine != null) clearInterval(routine);
}

export {
	passiveIncomeAmt,
	setPassiveIncomeAmt,
	increasePassiveIncomeAmt,
	multiplyPassiveIncomeAmt,
};
