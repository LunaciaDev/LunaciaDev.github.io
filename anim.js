function swapSections(targetSection) {
    let currentElement = document.getElementsByClassName("activeSection")[0];
    let activeButton = document.getElementById(currentElement.id+"Button");
    let targetElement = document.getElementById(targetSection);
    let targetButton = document.getElementById(targetSection+"Button");

    currentElement.className = "inactiveSection";
    activeButton.className = "inactiveButton";
    targetElement.className = "activeSection";
    targetButton.className = "activeButton";
    currentElement.classList.add("fadeOutAnim");
    setTimeout(function() {
        currentElement.style.display = "none";
        currentElement.classList.remove("fadeOutAnim")
        targetElement.style.display = "block";
        targetElement.classList.add("fadeInAnim");
        setTimeout(function() {
            targetElement.classList.remove("fadeInAnim")
        }, 500)
    }, 500)
    
}
