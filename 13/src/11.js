const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

const shape = new PIXI.Graphics()
shape.blendMode = PIXI.BLEND_MODES.ADD
app.stage.addChild(shape)




PIXI.Ticker.shared.add(() => {

});


const colors =  ["0xf9c80e", "0xf86624", "0xea3546", "0x662e9b", "0x43bccd"];
const getCol = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}


const drawCircle = (x, y, r) => {
    shape.beginFill(getCol() , 0.2)
    shape.drawCircle(x,y, r)
    shape.endFill()
}


for(let i = 0; i< 3000; i++){
    const x = Math.random() * STAGE_WIDTH
    const y = Math.random() * STAGE_HEIGHT
    const r = 50 * noise.perlin3(x / 400, y / 400, 100000)
    drawCircle(x, y, r)
}
