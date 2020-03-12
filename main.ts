namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f 1 1 f f f f f f f f 1 1 f f 
f 1 1 1 1 f f f f f f 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f 1 1 1 1 f f f f f f 1 1 1 1 f 
f f 1 1 f f f f f f f f 1 1 f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJump < 2) {
        theo.vy = -200
        numJump += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
    info.changeScoreBy((30 - game.runtime() / 1000) / 2)
    game.over(true, effects.confetti)
})
let theo: Sprite = null
let numJump = 0
tiles.setTilemap(tiles.createTilemap(
            hex`40000800050505050505050505090505050505050505050505050505050505090505050505050505050505050505050505050505050505050505050505050505050505080505050505050505020305050505050505050505050505050505050705050505050505050505050505050505050505050505050505050505050505050505070705050505050509050404050505050505050505050505050505050504050505050505050505050509050505050505050505050505050505050505050505070505050505050502030505050505050509050505050509050505050705050502010101010101030505020101010305050505050505050505050505050505090505050505050505040405050505050505070505050505070505050504050505040404040404040405050505050505070905050505050505050505050505050705050505050505050505050505050505050505050705050405050705050505050505050505050505050505050505050507050505050505050505050505090505050505020101010101010101010103050505050504050505050504050505050505090909050505050505050505050505050507050201010101010101010103050505050a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0201010101030a0b070a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles4,sprites.dungeon.doorClosedNorth,myTiles.tile1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
info.setScore(0)
info.startCountdown(30)
numJump = 0
theo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . f f . . . . f f . . . 
. . f f . . . . . . . . . . . . . . . . . f d f . . f d f . . . 
. f e e f . . . . . . . . . . . . . . . . f d d f f d d f . . . 
. . f e e f . . . . . . . . . . . . . . . f e e e e e e f . . . 
. . . f e e f f f f f f f f f f f f f f f 1 e e e f e e e f . . 
. . f e e e e e e e e e e e e e e e e e e 1 1 e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e 1 e e e e e e d f . 
. f 1 e e e e e e e e e e e e e e e e e e e 1 1 f e e e e f f . 
. f 1 e e e e e e e e e e e e e e e e e e e e 1 1 f f f f f f . 
. f 1 e e e f f f e e e e e e e e e e e e e e 1 f . . . . . . . 
. . f e e f . f 1 f f f f f f e e e e e e e 1 f . . . . . . . . 
. f e e f . f 1 1 f . . . . . f f f e e f f f f . . . . . . . . 
. f 1 f . . f 1 f . . . . . . . . f e f . f 1 f . . . . . . . . 
. f 1 f . f 1 1 f . . . . . . . f 1 1 f . f 1 f . . . . . . . . 
. f 1 f . f 1 f . . . . . . . . f 1 f . . f 1 f . . . . . . . . 
. f 1 1 f f 1 1 f . . . . . . . f 1 f . . f 1 1 f . . . . . . . 
`, SpriteKind.Player)
theo.setPosition(20, 80)
theo.ay = 350
controller.moveSprite(theo, 100, 0)
scene.cameraFollowSprite(theo)
forever(function () {
    if (theo.y >= 120) {
        theo.destroy(effects.fire, 500)
        pause(1000)
        game.over(false, effects.melt)
    }
    if (theo.isHittingTile(CollisionDirection.Bottom)) {
        numJump = 0
    }
})
