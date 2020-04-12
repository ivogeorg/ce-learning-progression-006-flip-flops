
basic.forever(function () {



    led.toggle(0, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge
    basic.pause(200)

    led.toggle(0, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge
    basic.pause(200)


})

