basic.forever(function () {


   if (pins.digitalReadPin(DigitalPin.P8)){

        led.toggle(0, 0)

   }   


})
