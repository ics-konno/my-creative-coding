const canvas = document.getElementById("sample")
const context = canvas.getContext("2d")

function draw(time) {
    for (let i = 0; i < window.innerWidth; i++) {
        for (let j = 0; j < window.innerHeight; j++) {
            // context.globalAlpha = Math.random()
            context.globalAlpha = (noise.perlin2(time + i / 100, time + j / 100) + 1) / 2
            context.fillRect(i, j, 1, 1)
        }
    }
}

function loop() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    const time = new Date() / 500
    draw(time)
    window.requestAnimationFrame(ts => loop(ts))
}

window.requestAnimationFrame(ts => loop(ts))
