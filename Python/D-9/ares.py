from math import pi

def square(a):
    area = a**2
    return ['Площя', area]

def rect(a, b):
    area = a*b
    return ['Прямокутник', area]

def circle(radius):
    area = pi * radius**2
    return ['Коло', round(area, 1)]

def triangle_area(base, height):
    area = 0.5 * base * height
    return ['Трикутник', area]


if __name__ == '__main__':
    print(square(10))
    print(rect(5, 7))
    print(circle(3))