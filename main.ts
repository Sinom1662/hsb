input.onButtonPressed(Button.A, function () {
    Defender.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(Defender.get(LedSpriteProperty.X), Defender.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Defender.move(1)
})
let bullet: game.LedSprite = null
let Defender: game.LedSprite = null
game.setScore(0)
Defender = game.createSprite(2, 4)
let invader = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(1000)
    invader.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (invader.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (bullet) {
        if (bullet.isTouching(invader)) {
            game.addScore(1)
            invader.set(LedSpriteProperty.X, randint(0, 4))
            invader.set(LedSpriteProperty.Y, 0)
        }
    }
})
