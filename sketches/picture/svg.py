import numpy as np
from svgpathtools import svg2paths, Path

def points_from_path(path: Path, number: int, scale: int, dx: int, dy: int) -> list[tuple[float, float]]:
    p = [path.point(i) for i in np.linspace(0, 1, number)]
    return [(dx + scale * np.real(z), dy + scale * np.imag(z)) for z in p]

def print_str(points: list[tuple[float, float]]):
    for p in points:
        print(f"create_point({p[0]}, {p[1]}),")

paths, _ = svg2paths("google-full.svg")

points = [
    point
    for path in paths
    for point in points_from_path(path, int(path.length()) // 20, 1, 200, 400)
]
print_str(points)
print(len(points))