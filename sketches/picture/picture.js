resize_canvas(1000, 1000)

const GAP = 50
const X0 = GAP
const Y0 = HEIGHT - GAP
const G = 1
const TIME = 60
const DELTA_TIME = 0.1

const compute_velocity = (target_t, target_x, target_y) => {
    const time = TIME - target_t
    const v0x = (target_x - X0) / time
    const v0y = (target_y - Y0 - 0.5 * G * time * time) / time
    return create_point(v0x, v0y)
}

const update_point = (time, point, velocity) => {
    if (point.y > HEIGHT - 10) {
        return;
    }
    point.x = velocity.x * time + X0
    point.y = 0.5 * G * time * time + velocity.y * time + Y0
}


let target_points = SMILEY

const query = window.location.search
const params = new URLSearchParams(query)
const svg = params.get('svg')
if (svg == 'google') {
    target_points = GOOGLE
}

const points = target_points.map(_ => create_point(X0, Y0))
const velocities = target_points.map((p, i) => compute_velocity(i * DELTA_TIME, p.x, p.y))

let t = 0

const update = () => {
    clear_canvas()

    for (let i=0; i<points.length; i++) {
        const time = i * DELTA_TIME
        if (t <= time) {
            continue;
        }
        update_point(t - time, points[i], velocities[i])
        draw_rectangle(points[i].x, points[i].y, 3, 3, 'yellow')
    }

    t += 0.3

    requestAnimationFrame(update)
}

update()