import numpy as np
from svgpathtools import svg2paths, Path

def points_from_path(path: Path, number: int, scale: int, dx: int, dy: int) -> list[tuple[float, float]]:
    p = [path.point(i) for i in np.linspace(0, 1, number)]
    return [(dx + scale * np.real(z), dy + scale * np.imag(z)) for z in p]

def print_str(points: list[tuple[float, float]]):
    for p in points:
        print(f"create_point({p[0]}, {p[1]}),")

paths, _ = svg2paths("happy.svg")

points = [
    pp
    for p in [
        points_from_path(paths[0], 50, 10, 400, 400),
        points_from_path(paths[1], 20, 10, 400, 400),
        points_from_path(paths[2], 20, 10, 400, 400),
        points_from_path(paths[3], 20, 10, 400, 400)
    ]
    for pp in p
]
print_str(points)