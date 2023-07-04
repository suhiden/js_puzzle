function nbYear(p0, percent, aug, p, years = 0) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }


console.log(nbYear(1000, 2, 50, 1200))
