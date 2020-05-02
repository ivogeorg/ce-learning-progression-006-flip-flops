// Global Variables
let pause_us: number = 200   // pause period in microseconds
let bit0: number
let bit1: number

// Event Handling
input.onButtonPressed(Button.A, function () {
    pause_us = (pause_us / 2)
})
input.onButtonPressed(Button.B, function () {
    pause_us = (pause_us * 2)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(10)
})


// other pin events here...

function bin2dec(bit0: number, bit1: number) {

    let return_value: number = 0
  
    return return_value = bit0 + bit1 * 2

}


// Repeated Actions
basic.forever(function () {

    bit0 = pins.digitalReadPin(DigitalPin.P14)
    bit1 = pins.digitalReadPin(DigitalPin.P15)
    basic.showNumber(bin2dec(bit0, bit1))

})

basic.forever(function () {

    led.toggle(0, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge of clock
    basic.pause(pause_us)

    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge of clock
    led.toggle(0, 0)

})

