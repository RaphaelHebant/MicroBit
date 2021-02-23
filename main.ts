basic.forever(function () {
    music.playMelody("G B A G C5 B A B ", 296)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 125)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 125)
    music.stopAllSounds()
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
})
basic.forever(function () {
	
})
