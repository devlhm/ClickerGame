const labelId = "kilometers-label";

function updateKilometersLabel(newKm) {
    document.getElementById(labelId).innerText = newKm + " km";
}

export { updateKilometersLabel }