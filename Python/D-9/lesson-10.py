def generate_parabola_data(x_left_intervsl, step, points_count, coef):
    a = coef[0]
    b = coef[1]

    x = list()
    y = list()

    for point_number in range(0, points_count):
        point_x = x_left_intervsl + step * point_number
        point_y = a * point_x ** 2 + b

        x.append(point_x)
        y.append(point_y)
    
    return {'x_data': x, 'y_data': y}