limites = {"ana": 500}

def ajusta(d, k, taxa, hist=None):
    if hist is None:
        hist = []
    hist.append(k)
    d[k] = d.get(k, 100) * taxa
    return len(hist)

ajusta(limites, "ana", 2)
print(ajusta(limites, "bia", 3), limites["ana"], limites["bia"], len(limites))
