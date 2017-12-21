let index = 0
input.onButtonPressed(Button.A, () => {
    basic.showNumber(on_off.half)
    for (let index2 = 0; index2 <= 7; index2++) {
        pivotpi.turn_led_on_off(index2, on_off.half)
        basic.pause(100)
    }
    basic.showNumber(on_off.on)
    for (let index3 = 0; index3 <= 7; index3++) {
        pivotpi.turn_led_on_off(index3, on_off.on)
        basic.pause(100)
    }
    // basic.showNumber(on_off.half) for (let index = 0;
    // index <= 7; index++) { pivotpi.turn_led_on_off(7 -
    // index, on_off.half) basic.pause(100) }
    basic.showNumber(on_off.off)
    for (let index4 = 0; index4 <= 7; index4++) {
        pivotpi.turn_led_on_off(7 - index4, on_off.off)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(0)
    pivotpi.pivotpi_servo_angle(0, 0)
    basic.pause(100)
    basic.showNumber(90)
    pivotpi.pivotpi_servo_angle(0, 90)
    basic.pause(100)
    basic.showNumber(180)
    pivotpi.pivotpi_servo_angle(0, 180)
    basic.pause(100)
})
index = 0
for (let index5 = 0; index5 <= 7; index5++) {
    pivotpi.turn_led_on_off(index5, on_off.off)
}
basic.showIcon(IconNames.Yes)
