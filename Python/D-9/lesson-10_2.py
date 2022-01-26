import ares as ad

def compare_areas(re, ar):
    if re[1] > ar[1]:
        print(f'{re[0]} > {ar[0]}')
    elif re[1] < ar[1]:
        print(f'{re[0]} < {ar[0]}')
    elif re[1] == ar[1]:
        print(f'=')


compare_areas(ad.circle(5), ad.rect(1, 5))