let dotArray = []

const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

// const shape = new PIXI.Graphics()
// app.stage.addChild(shape)


function setup() {
    for (let i = 0; i < 10000; i++) {
        const shape = new PIXI.Graphics()
        shape.beginFill(0xffffff)
        shape.drawRect(0, 0, 2, 2)
        shape.endFill()
        shape.x = Math.random() * STAGE_WIDTH
        shape.y = Math.random() * STAGE_HEIGHT
        shape.vx = 0
        shape.vy = 0
        shape.ax = 0
        shape.ay = 0
        app.stage.addChild(shape)
        dotArray.push(shape)
    }
}


function update() {
    const time = new Date() / 500
    dotArray.forEach(dot => {
        dot.ax = noise.perlin3(dot.x / 1600, dot.y / 1200 , time / 5 + 3) / 3
        dot.ay = noise.perlin3(dot.x / 1600, dot.y / 1200, time / 5 + 2) / 3
        dot.vx += dot.ax
        dot.vy += dot.ay
        dot.vx *= 0.99
        dot.vy *= 0.99
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < 0) {
            dot.x = STAGE_WIDTH
        } else if (dot.x > STAGE_WIDTH) {
            dot.x = 0
        }
        if (dot.y < 0) {
            dot.y = STAGE_HEIGHT
        } else if (dot.y > STAGE_HEIGHT) {
            dot.y = 0
        }
    })
}

setup()

// shape.beginFill(0xffffff)
// shape.drawCircle(0, 0, 10)
// shape.x = 400
// shape.y = 400

PIXI.Ticker.shared.add(() => {
    update()
    // const time = new Date() / 500
    // shape.x += noise.perlin2(time / 10, time / 6) * 20
    // shape.y += noise.perlin2(time / 7, time / 9) * 20
    // if (shape.x > STAGE_WIDTH) {
    //     shape.x = 0
    // } else if (shape.x < 0) {
    //     shape.x = STAGE_WIDTH
    // }
    // if (shape.y > STAGE_HEIGHT) {
    //     shape.y = 0
    // } else if (shape.y < 0) {
    //     shape.y = STAGE_HEIGHT
    // }
});


