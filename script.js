const moveBlock = (event) => {
    const d = document;
    const w = window;
    // let block = d.getElementById("#block");
    let keyCode = event.isComposing || event.keyCode;

    switch (keyCode) {
        case 40:
            console.log('pressed');
            console.log(block.style.top);
            block.style.top = block.style.top + 5 + "px";
            break;
        default:
            break;
    }
}

window.onload = (event) => {
    console.log("start");
    window.addEventListener("keydown", event => {
        moveBlock(event);
    });
}
