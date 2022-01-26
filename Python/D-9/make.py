def generate_line_data(x_left_intervsl, step, points_count, coef):
    f = coef[0]
    g = coef[1]

    x = list()
    y = list()

    for point_number in range(0, points_count):
        point_x = x_left_intervsl + step * point_number
        point_y = f * point_x + g

        x.append(point_x)
        y.append(point_y)

    return {'x_data': x, 'y_data': y}


def generate_parabola_data(x_left_intervsl, step, points_count, coef):
    a = coef[0]
    b = coef[1]

    x = list()
    y = list()

    for point_number in range(0, points_count):
        point_x = x_left_intervsl + step * point_number
        point_y = a * point_x**2 + b

        x.append(point_x)
        y.append(point_y)

    return {'x_data': x, 'y_data': y}


if __name__ == 'main':
    generate_line_data(3, 2, 8, [2, 7])
    generate_line_data(-5, 1, 10, [2, 3])