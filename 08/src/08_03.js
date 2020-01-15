function scene3(){
    const MAX_LIFE = 300
    const particles = []
    const ball = {x: 400, y: 300, r: 80}

    const app = new PIXI.Application()

    document.body.appendChild(app.view)

    const shape = new PIXI.Graphics()
    app.stage.addChild(shape)

    const STAGE_WIDTH = 800
    const STAGE_HEIGHT = 600


    const blur = new PIXI.filters.BlurFilter()
    blur.blur = 5
    shape.blendMode = PIXI.BLEND_MODES.ADD




    PIXI.ticker.shared.add(() => {
        shape.clear()
        const time = new Date() / 500
        const color = 0x4169e1 * noise.perlin2(time/100, time/1000)
        shape.beginFill(color)
        shape.drawCircle(50,50,80)
        shape.beginFill(0xdc143c)
        shape.drawCircle(100,50,80)
        shape.beginFill(0x00ff00)
        shape.drawCircle(75,75,80)
        shape.beginFill(0x00ff00)
        shape.lineStyle(5, 0xffffff, 1)
        shape.drawCircle(75,300,80)
    })
}

scene3()