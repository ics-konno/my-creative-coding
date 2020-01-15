let dotArray = []

const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

const shape = new PIXI.Graphics()
app.stage.addChild(shape)

// const generateLine = (index) => {
//     const line = new PIXI.Graphics()
//     line.x = 0
//     line.y = index * 10
//     line.color = Math.random() * 0xffffff
//     app.stage.addChild(line)
//     lines.push(line)
// }
//
// for (let i = 0; i < 10; i++) {
//     generateLine(i)
// }
//
// function drawLine() {
//     lines.forEach(line => {
//         let dx = line.x + 1
//         let dy = line.y + noise.perlin2(line.x / 100, line.y / 100)
//         line.lineStyle(3, line.color)
//         line.moveTo(dx, dy)
//         line.lineTo(line.x, line.y)
//         line.x = dx
//         line.y = dy
//         console.log(shape.x)
//     })
// }


let x = 0
let y = 300
let lines = []
let lineObjs = []

function generateLines(index){
    const line = {
        x:0,
        y: index,
        color: Math.random() * 0xffffff
    }
    lines.push(line)
}

for(let i = 0; i < STAGE_HEIGHT; i+=50){
    generateLines(i)
    const shape = new PIXI.Graphics()
    lineObjs.push(shape)
}

shape.moveTo(x, y)

PIXI.Ticker.shared.add(() => {
    // drawLine()
    lines.forEach(line => {
        let dx = line.x + 1
        let dy = line.y + noise.perlin2(line.x / 100, line.y / 100) / 5
        shape.lineStyle(2, line.color)
        shape.moveTo(dx, dy)
        shape.lineTo(line.x, line.y)
        line.x = dx
        line.y = dy
        if(line.x > STAGE_WIDTH){
            line.x = 0
        }
    })

});



