import generato_data as gd
import matplotlib.pyplot as plt

data = gd.generate_line_data(-5, 1, 11, [2, 8])

plt.plot(data['x_date'], data['y_date'])
plt.xlabel('x label')
plt.ylabel('y label')
plt.title("Liniya Plot")
plt.legend()

plt.show()