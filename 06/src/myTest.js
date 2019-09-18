const app = new PIXI.Application()

document.body.appendChild(app.view)

const shape = new PIXI.Graphics()
app.stage.addChild(shape)


const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600
const DEFAULT_RADIUS = 200;

// shape.beginFill(0xff0000)
// shape.drawRect(0,0, 100 ,100)
PIXI.Ticker.shared.add(() => {
    shape.clear()
    const segmentNum = 3600
    // const amplitude = STAGE_WIDTH / 3
    const time = Date.now() / 500
    const lineNum = 80
    // for (let j = 0; j < lineNum; j++) {
        shape.lineStyle(2, 0xffffff)

    for (let i = 0; i < segmentNum; i++) {
        const radian = (i / segmentNum) * Math.PI + time
        const radius = DEFAULT_RADIUS + Math.sin(noise.perlin2(time/10 + i /10,time/10 + i /20))*50
        const x1 = Math.cos(Math.PI * i / 1800) * radius
        const y1 = Math.sin((Math.PI * i / 1800)) * radius


        const x2 = Math.cos(Math.PI * (i + 1) / 1800) * radius
        const y2 = Math.sin((Math.PI * (i + 1) / 1800)) * radius
        // const y = amplitude * noise.perlin2(time / 10 + j/40, (i / 5 + time) / 5+ j/30) + STAGE_HEIGHT / 2
        // if (i === 0) {
        shape.moveTo(x1, y1)
        // } else {
        shape.lineTo(x2, y2)
        // }
    }
    // }
    shape.x = 400
    shape.y = 300
});

