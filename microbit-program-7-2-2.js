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

/*pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    led.toggle(0, 1)
})
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    led.toggle(1, 1)
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    led.toggle(1, 2)
})*/
// other pin events here...

function bin2dec(bit0: number, bit1: number, bit2: number) {

    let return_value: number = 0
    /*if (bit0 = 1) {
        return_value += 1
    }
    if (bit1 = 1) {
        return_value += 2
    }
    if (bit2 = 1) {
        return_value += 4
    }
    if (return_value > 7) {
        return_value = 0
    }*/

    return return_value = bit0 + bit1 * 2 + bit2 * 4

}


// Repeated Actions
basic.forever(function () {

    bit0 = pins.digitalReadPin(DigitalPin.P14)
    bit1 = pins.digitalReadPin(DigitalPin.P15)
    bit2 = pins.digitalReadPin(DigitalPin.P16)
    basic.showNumber(bin2dec(bit0, bit1, bit2))

})

basic.forever(function () {

    led.toggle(0, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge of clock
    basic.pause(pause_us)

    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge of clock
    //basic.pause(pause_us)
    led.toggle(0, 0)

})

