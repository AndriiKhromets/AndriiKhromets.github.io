import math

class Sqare:
    name = ''
    side = 0
    dov = 0

a=float(input("a ="))       
b=float(input("b ="))       
prm=a*b

r=float(input("r =")) 
kol=math.pi*(r**2)

str1 = Sqare()
str1.dov = 4
print(f'Площя прямокутника {prm}')


str2 = Sqare()
str2.dov = 8
print(f'Площя кола{kol}')