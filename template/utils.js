const WIDTH = 500
const HEIGHT = 500

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const title = document.getElementById("title")

canvas.width = WIDTH
canvas.height = HEIGHT

const CENTER = [WIDTH / 2, HEIGHT / 2]
const CENTER3 = [...CENTER, 0]

const draw_rectangle = (x, y, w, h, color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

const clear_canvas = () => draw_rectangle(0, 0, WIDTH, HEIGHT, "black")