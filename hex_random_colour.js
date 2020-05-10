
function randomHex() {
    const hexValues = "0123456789ABCDEF"
    let hex = "#"
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexValues.length)
        hex += hexValues.charAt(random)
    }
    document.body.style.backgroundColor = hex;
    document.getElementById("hextext").innerHTML = hex;
}