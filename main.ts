input.onGesture(Gesture.ScreenDown, function () {
    schalter = 0
})
input.onGesture(Gesture.ScreenUp, function () {
    schalter = 1
})
let schalter = 0
schalter = 0
basic.forever(function () {
    if (schalter == 1 && grove.measureInCentimeters(DigitalPin.C16) < 10) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
        music.playMelody("C5 A C5 A C5 A C5 A ", 100)
    } else if (schalter == 1 && grove.measureInCentimeters(DigitalPin.C16) >= 10) {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
        basic.turnRgbLedOff()
    }
})
