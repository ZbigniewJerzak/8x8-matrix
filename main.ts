let posx = 0
let posy = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
let strip2 = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # . . .
    `)
strip2.setMatrixWidth(8)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # . .
    # # # . .
    `)
strip2.setMatrixColor(8, 8, neopixel.colors(NeoPixelColors.Red))
basic.showLeds(`
    . . . . .
    . . . # .
    . . # # .
    . # # # .
    # # # # .
    `)
strip2.show()
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
basic.forever(function () {
    posx += 1
    strip2.setMatrixColor(posx, posy, neopixel.colors(NeoPixelColors.Blue))
    posy += 1
    strip2.setMatrixColor(posx, posy, neopixel.colors(NeoPixelColors.Red))
    if (posx == 8) {
        posx = 0
        posy = 0
    }
    strip2.show()
})
