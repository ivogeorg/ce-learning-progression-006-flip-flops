let x: number = 200

input.onButtonPressed(Button.A, function () {
    x = (x / 2)
})
input.onButtonPressed(Button.B, function () {
    x = (x * 2)
})

basic.forever(function () {



    led.toggle(0, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge
    basic.pause(x)


    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge
    basic.pause(x)
    led.toggle(0, 0)

})

