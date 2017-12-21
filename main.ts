let index = 0
input.onButtonPressed(Button.A, () => {
    for (let index = 0; index <= 7; index++) {
        pivotpi.turn_led_on_off(index, on_off.half)
        basic.pause(100)
    }
    for (let index = 0; index <= 7; index++) {
        pivotpi.turn_led_on_off(index, on_off.on)
        basic.pause(100)
    }
    for (let index = 0; index <= 7; index++) {
        pivotpi.turn_led_on_off(7 - index, on_off.half)
        basic.pause(100)
    }
    for (let index = 0; index <= 7; index++) {
        pivotpi.turn_led_on_off(7 - index, on_off.off)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, () => {
    pivotpi.pivotpi_servo_angle(0, 0)
    basic.pause(100)
    pivotpi.pivotpi_servo_angle(0, 90)
    basic.pause(100)
    pivotpi.pivotpi_servo_angle(0, 180)
    basic.pause(100)
})
basic.showIcon(IconNames.Yes)
