// Global Variables
let pause_us: number = 200   // pause period in microseconds
let bit0: number
let bit1: number
let bit2: number

// Event Handling
input.onButtonPressed(Button.A, function () {
    pause_us = (pause_us / 2)
})
input.onButtonPressed(Button.B, function () {
    pause_us = (pause_us * 2)
})

pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    led.toggle(0, 1)
})
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    led.toggle(1, 1)
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    led.toggle(1, 2)
})
// other pin events here...

// Repeated Actions


basic.forever(function () {

    led.toggle(0, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge of clock
    basic.pause(pause_us)

    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge of clock
    led.toggle(0, 0)

})

