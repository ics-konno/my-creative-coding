let barArray = []

const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

function setup() {
    for (let i = 0; i < STAGE_WIDTH; i += 20) {
        for (let j = 0; j < STAGE_HEIGHT; j += 20) {
            const bar = new PIXI.Graphics()
            bar.beginFill(0xffffff, 0.3)
            bar.drawRoundedRect(0, 0, 2, 10, 1)
            bar.x = i
            bar.y = j
            bar.rotation = 0
            bar.v = 0
            app.stage.addChild(bar)
            barArray.push(bar)
        }
    }
}

function update() {
    const time = new Date() / 500
    barArray.forEach(bar => {
        const n = noise.perlin3(bar.x / 400, bar.y / 300 , time/10) /100
        bar.v += n
        bar.v *= 0.8
        bar.rotation += bar.v
        bar.width = bar.v * 500
        bar.height = bar.v * 10000
    })
}

setup()
PIXI.Ticker.shared.add(() => {
    update()
});


