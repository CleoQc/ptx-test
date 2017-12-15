
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#4593CF icon="\uf1b9"
namespace Dexbot {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function forward(distance: number): void {
        // Add code here
        return
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
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
    //% blockId=dex_i2c_writenumber block="i2c register write number|at address %address|at register %register|with value %value|of format %format=i2c_sizeof|repeated %repeat" weight=6
    export function i2cWriteNumber(address: number, i2c_register: number, value: number, format: NumberFormat, repeated?: boolean): void {
        let buf = pins.createBuffer(pins.sizeOf(format) + pins.sizeOf(i2c_register))
        buf.setNumber(format, 0, value)
        pins.i2cWriteBuffer(address, buf, repeated)
    }

    /**
     * Get the size in bytes of specified number format.
     */
    //%
    // export function sizeOf(format: NumberFormat) {
    //     switch (format) {
    //         case NumberFormat.Int8LE:
    //         case NumberFormat.UInt8LE:
    //         case NumberFormat.Int8BE:
    //         case NumberFormat.UInt8BE:
    //             return 1;
    //         case NumberFormat.Int16LE:
    //         case NumberFormat.UInt16LE:
    //         case NumberFormat.Int16BE:
    //         case NumberFormat.UInt16BE:
    //             return 2;
    //         case NumberFormat.Int32LE:
    //         case NumberFormat.Int32BE:
    //             return 4;
    //     }
    //     return 0;
    // }

}

