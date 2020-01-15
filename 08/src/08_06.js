function scene6() {
    const MAX_LIFE = 100
    const particles = []
    const ball = {x: 400, y: 300, r: 80}

    const app = new PIXI.Application()

    document.body.appendChild(app.view)

    const shape = new PIXI.Graphics()
    app.stage.addChild(shape)

    const STAGE_WIDTH = 800
    const STAGE_HEIGHT = 600


    const blur = new PIXI.filters.BlurFilter()
    blur.blur = 10
    shape.filters = [blur]

    shape.blendMode = PIXI.BLEND_MODES.ADD

    const emit = () => {
        const particle = {
            x: ball.x,
            y: ball.y,
            angle: Math.random() * 2 * Math.PI,
            life: MAX_LIFE,
            color: Math.random() * 360
        }
        particles.push(particle)
    }

    const update = () => {
        particles.forEach((particle, index) => {
            particle.x += Math.cos(particle.angle)
            particle.y += Math.sin(particle.angle) 
            particle.life -= 2
            particle.scale = particle.life / MAX_LIFE
            if (particle.life < 0) {
                particles.splice(index, 1)
            }
        })
    }

    const draw = () => {
        shape.clear()
        particles.forEach(particle => {
            const color = hsl2rgb([particle.color, 50, 100])
            shape.beginFill(PIXI.utils.rgb2hex(color), particle.scale)
            shape.drawCircle(particle.x, particle.y, 100)
        })
    }

    PIXI.ticker.shared.add(() => {
        emit()
        update()
        draw()
    })
}

function hslToHex(angle) {
    // hsl空間の生成
    let max = 0
    let min = 0
    let h = angle
    let s = 100
    let l = 50
    let r = 0
    let g = 0
    let b = 0

    if (l < 49) {
        max = 2.55 * (l + l * (s / 100))
        min = 2.55 * (l - l * (s / 100))
    } else {
        max = 2.55 * (l + (100 - l) * (s / 100))
        min = 2.55 * (l - (100 - l) * (s / 100))
    }

    if (0 < h < 60) {
        r = max
        g = (h / 60) * (max - min) + min
        b = min
    } else if (60 <= h < 120) {
        r = ((120 - h) / 60) * (max - min) + min
        g = max
        b = min
    } else if (120 <= h < 180) {
        r = min
        g = max
        b = ((h - 120) / 60) * (max - min) + min
    } else if (180 <= h < 240) {
        r = min
        g = ((240 - h) / 60) * (max - min) + min
        b = max
    } else if (240 <= h < 300) {
        r = ((h - 240) / 60) * (max - min) + min
        g = min
        b = max
    } else if (300 <= h < 360) {
        r = max
        g = min
        b = ((360 - h) / 60) * (max - min) + min
    }

    const color = PIXI.utils.rgb2hex([r / 255, g / 255, b / 255])
    console.log(r,g,b)
    return color
}

// 引用
function hsl2rgb ( hsl ) {
    var h = hsl[0] ;
    var s = hsl[1] ;
    var l = hsl[2] ;

    var max = l + ( s * ( 1 - Math.abs( ( 2 * l ) - 1 ) ) / 2 ) ;
    var min = l - ( s * ( 1 - Math.abs( ( 2 * l ) - 1 ) ) / 2 ) ;

    var rgb ;
    var i = parseInt( h / 60 ) ;

    switch( i ) {
        case 0 :
        case 6 :
            rgb = [ max, min + (max - min) * (h / 60), min ] ;
            break ;

        case 1 :
            rgb = [ min + (max - min) * (120 - h / 60), max, min ] ;
            break ;

        case 2 :
            rgb = [ min, max, min + (max - min) * (h - 120 / 60) ] ;
            break ;

        case 3 :
            rgb = [ min, min + (max - min) * (240 - h / 60), max ] ;
            break ;

        case 4 :
            rgb = [ min + (max - min) * (h - 240 / 60), min, max ] ;
            break ;

        case 5 :
            rgb = [ max, min, min + (max - min) * (360 - h / 60) ] ;
            break ;
    }

    return rgb.map( function ( value ) {
        return value * 255 ;
    } ) ;
}

scene6()