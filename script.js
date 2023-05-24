// index.html ////////////////////////////////////////////////////////////////////////////////////////////////
// sor carosel the image will change every 5 sec for 3 images
function CaroselImages() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let img1Src = "images/slider" + randomNumber + ".jpg";
    for (var i = 0; i <= 1000; i++) {
        setTimeout(function () {
            document.getElementsByClassName("img1")[0].src = img1Src;
        }, 5000);
    }
}

// iphone-14-max.html \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// features changes text with img click
function changeText(textId) {
    if (textId === "text1") {
        document.getElementById("text").textContent =
            'A16 Bionic chip,The Apple A16 Bionic is a 64-bit ARM-based system on a chip (SoC) designed by Apple Inc. and manufactured by TSMC. It is used in the iPhone 14 Pro and 14 Pro Max models only.';
    } else if (textId === "text2") {
        document.getElementById("text").textContent =
            'The camera sensors and lenses on the main and ultra-wide cameras have been upgraded. The main camera features a new 48-megapixel quad-pixel sensor that is 65% larger than the one on the iPhone 13 Pro. It defaults to 12 megapixels, achieved through a process called pixel binning.';
    } else if (textId === "text3") {
        document.getElementById("text").textContent =
            'Siri supports a wide range of user commands, including performing phone actions, checking basic information, scheduling events and reminders, handling device settings, searching the Internet, navigating areas, finding information on entertainment, and is able to engage with iOS-integrated apps.';
    }
}

// contact.html ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// after sending msg
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("email");
let welcomingTitle = document.getElementById("welcoming-title");

function msgApply() {
    if (fName.value == "" || lName.value == "" || email.value == "") {
        alert("Please fill in all the fields");
        // so if any one of then is empty it will make error
    } else {
        welcomingTitle.textContent = "Hello " + fName.value + " " + lName.value + " thank you for contacting us.";
        document.getElementById("welcoming").style.zIndex = "11";
        document.getElementById("welcoming").style.visibility = "visible";
        // this below will take the customer to index.html after 6 second 
        setTimeout(function () {
            window.location.href = "index.html";
        }, 6000);
    }
}