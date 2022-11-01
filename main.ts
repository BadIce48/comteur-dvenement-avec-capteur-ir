input.onButtonPressed(Button.A, function () {
    etat_actuel = 0
})
let etat_actuel = 0
let nombre = 0
etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe && etat_actuel == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
