radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        RingbitCar.forward()
    } else if (receivedString == "stop") {
        RingbitCar.brake()
    } else if (receivedString == "left") {
        RingbitCar.turnleft()
    } else if (receivedString == "right") {
        RingbitCar.turnright()
    } else if (receivedString == "back") {
        RingbitCar.back()
    }
})
radio.setGroup(6)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
