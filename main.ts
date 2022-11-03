input.onButtonPressed(Button.A, function () {
    alarme = false
})
let alarme = false
let etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe && etat_actuel == 1) {
        alarme = false
    } else {
        alarme = true
    }
    if (alarme == true) {
        while (alarme == true) {
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
        }
    }
})
