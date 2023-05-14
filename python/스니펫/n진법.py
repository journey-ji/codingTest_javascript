def convert(num, base) :
    tmp = string.digits+string.ascii_uppercase
    q, r = divmod(num, base)
    if q == 0 :
        return tmp[r] 
    else :
        return convert(q, base) + tmp[r]