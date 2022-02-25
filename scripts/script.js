function setActivePicker(pickerID) {
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("picker-" + pickerID).classList.add("active")

    document.getElementById("circuit-image").src = "assets/circuits/Circuit" + String(pickerID-1) + ".png"
}