import make as m
import matplotlib.pyplot as p

data = m.generate_parabola_data(-5, 1, 11, [2, 8])

p.plot(data['x_data'], data['y_data']) 

p.xlabel('x')
p.ylabel('y')
p.title("Figyre")

p.show()