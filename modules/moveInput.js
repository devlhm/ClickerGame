const kmPerClick = 1;

function move(currentKm) {
    const newKm = currentKm + kmPerClick;
    console.log(newKm)
    return newKm;
}

export { move };