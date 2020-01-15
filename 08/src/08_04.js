function scene4(){
    const MAX_LIFE = 300
    const circles = []
    const ball = {x: 400, y: 300, r: 80}
    const SEGMENT = 720
    const DEFAULT_RADIUS = 200

    const app = new PIXI.Application()

    document.body.appendChild(app.view)

    const shape = new PIXI.Graphics()
    app.stage.addChild(shape)

    const colors = ["0xff7f50", "0xffff00", "0x4169e1","0xff1493", "0xff8c00", "0x00ffff","0x00ffff", "0xf5f5dc", "0x00ffff","0x00ffff"]

    const STAGE_WIDTH = 800
    const STAGE_HEIGHT = 600


    const blur = new PIXI.filters.BlurFilter()
    blur.blur = 20
    shape.blendMode = PIXI.BLEND_MODES.ADD

    const emit = () => {
        for (let i = 0; i < 10; i++) {
            const circle = {
                x: 400,
                y: 300,
                myPolygon: [],
                color: colors[i]
            }
            circles.push(circle)
        }
    }

    const update = () => {
        circles.forEach(circle  => {
            let points = []
            const time = Date.now() / 500
            circle.x += (Math.random() - 0.5) * 3
            circle.y += (Math.random() - 0.5) * 3
            for (let j = 0; j < SEGMENT * 10 ; j++) {
                const radius = DEFAULT_RADIUS + Math.sin(noise.perlin2(time + j/100, time/15 + j/20)) * 50
                const x = circle.x + Math.cos(Math.PI * j / 360) * radius
                const y = circle.y + Math.sin(Math.PI * j / 360) * radius
                points.push(x, y)
                if(j % SEGMENT === 0){
                    circle.myPolygon = points
                    points = []
                }
            }
        })
    }

    const draw = () => {
        shape.clear()
        circles.forEach((circle) => {
            shape.beginFill(circle.color, 0.8)
            shape.filters = [blur]
            shape.drawPolygon(circle.myPolygon)
            shape.endFill()
        })
    }

    emit()
    PIXI.ticker.shared.add(() => {
        shape.clear()
        update()
        draw()
    })
}

scene4()