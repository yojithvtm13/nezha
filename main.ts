basic.forever(function () {
    if (PlanetX_Basic.soilHumidity(PlanetX_Basic.AnalogRJPin.J1) < 20) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
        basic.showIcon(IconNames.Happy)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 200)
        basic.showIcon(IconNames.Heart)
    }
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 2) {
        radio.sendString("Dust")
    }
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J3)) {
        neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S3, 90)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S3, 0)
    }
})
