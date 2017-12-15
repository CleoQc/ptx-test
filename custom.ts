

//% weight=50 color=#4593CF icon=""
namespace mybot {
    /**
     * TODO: describe your function here
     */
    //% block
    export function forward(distance: number): void {
        // Add code here
        return
    }

    /**
     * TODO: describe your function here
     */
    //% block
    export function backward(distance: number): void {
        return
    }

    //% block
    export function follow_line(distance: number): void {
        return
    }


    /**
     * Write one number to a 7-bit I2C address.
     */
    //% blockId=dex_i2c_writenumber block="i2c_register: write number|at address %address|at register %register|with value %value|of format %format=i2c_sizeof|repeated %repeat" weight=6
    export function i2cWriteNumber(address: number, i2c_register: number, value: number, format: NumberFormat, repeated?: boolean): void {
        let buf = pins.createBuffer(pins.sizeOf(format) + pins.sizeOf(i2c_register))
        buf.setNumber(format, 0, value)
        pins.i2cWriteBuffer(address, buf, repeated)
    }

}

