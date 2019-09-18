const app = new PIXI.Application()

document.body.appendChild(app.view)

const shape = new PIXI.Graphics()
app.stage.addChild(shape)


const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

// shape.beginFill(0xff0000)
// shape.drawRect(0,0, 100 ,100)
PIXI.Ticker.shared.add(() => {
    shape.clear()
    const segmentNum = 360
    const amplitude = STAGE_WIDTH / 3
    const time = Date.now() / 500
    const lineNum = 80
    for (let j = 0; j < lineNum; j++) {
        shape.lineStyle(1, 0xffffff, j / lineNum)

        for (let i = 0; i < segmentNum; i++) {
            const x = (i / (segmentNum - 1)) * STAGE_WIDTH

            const radian = (i / segmentNum) * Math.PI + time
            const y = amplitude * noise.perlin2(time / 10 + j/40, (i / 5 + time) / 5+ j/30) + STAGE_HEIGHT / 2
            if (i === 0) {
                shape.moveTo(x, y)
            } else {
                shape.lineTo(x, y)
            }
        }
    }

});
