let INVRT = 0x10;
let OUTDRV = 0x04;
let MODE1 = 0x00;
let MODE2 = 0x01;
let ALLCALL = 0x01;
let ALL_LED_ON_L = 0xFA;
let ALL_LED_ON_H = 0xFB;
let ALL_LED_OFF_L = 0xFC;
let ALL_LED_OFF_H = 0xFD;
let LED0_ON_L = 0x06;
let LED0_ON_H = 0x07;
let LED0_OFF_L = 0x08;
let LED0_OFF_H = 0x09;

enum on_off {
    //% block=off
    off = 0,
    //% block=on
    on = 1,
    //% block=half
    half = 2.0
}

//% weight=50 color=#4593CF icon=""
namespace pivotpi {
    let init_done = false;

    function init() {
        if (init_done == false) {
            let prescale = 101;  // setting Hz to 60
            let oldmode = pins.i2cReadBuffer(MODE1, 8);
            let oldmodenumber = oldmode.getNumber(8, 0)
            basic.showNumber(oldmodenumber)
            basic.pause(1000);
            let newmodenumber = (oldmodenumber & 0x7F) | 0x10    // sleep
            // // self._device.write8(MODE1, newmode) // go to sleep
            // // self._device.write8(PRESCALE, prescale)
            // // self._device.write8(MODE1, oldmode)
            // // TODO: set prescale as in PCA9685 lines 97
            basic.showNumber(1)
            write8(MODE2, INVRT | OUTDRV);
            basic.showNumber(2)
            write8(MODE1, ALLCALL);
            basic.showNumber(3)
            write8(ALL_LED_ON_L, 0);
            basic.showNumber(4)
            write8(ALL_LED_ON_H, 0);
            basic.showNumber(5)
            write8(ALL_LED_OFF_L, 0);
            basic.showNumber(6)
            write8(ALL_LED_OFF_H, 0);
        }
        init_done = true;
    }

    function write8(register: number, value: number) {
        let buf = pins.createBuffer(2)
        buf.setNumber(NumberFormat.UInt8LE, 0, register)
        buf.setNumber(NumberFormat.UInt8LE, 1, value >> 8)
        pins.i2cWriteBuffer(0x40, buf, false);
    }

    //% blockId="pivotpi_servo_angle" block="set servo %pos| to %angle"
    export function pivotpi_servo_angle(pos: number, angle: number): void {
        init()

        let pwm_to_send = 4095 - pins.map(angle, 0, 180, 150, 600)
        basic.showNumber(pwm_to_send)
        write8(LED0_ON_L + 4 * pos, 0)
        write8(LED0_ON_H + 4 * pos, 0)
        write8(LED0_OFF_L + 4 * pos, pwm_to_send & 0xFF)
        write8(LED0_OFF_H + 4 * pos, pwm_to_send >> 8)
    }

    //% blockId="dex_turn_led_on_off" block="set LED %pos| to | %state"
    export function turn_led_on_off(pos: number, state: on_off): void {
        init()
        // let buf = pins.createBuffer(2);
        // buf[0] = LED0_ON_L + 4 * (pos + 8);
        // buf[1] = 4095 * state;
        // pins.i2cWriteBuffer(0x40, buf, false);

        write8(LED0_ON_L + 4 * (pos + 8), 4095 * state);
    }

}

