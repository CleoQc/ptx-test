#include "pxt.h"

namespace mybot {

    /**
    * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.
    */
    //% blockId=mybot_pulse_duration block="pulse duration (µs)"
    //% weight=21 blockGap=8
    int pulseDuration() {
        return pxt::lastEvent.timestamp;
    }
}
