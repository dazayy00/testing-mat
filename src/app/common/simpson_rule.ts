export module calculate {
  export function simpson(segmentos: number, fx: (x: number) => number, x0: number, x1: number): number {
    let w = (x1 - x0) / segmentos;
    let multiplo = 0;
    let cal = calcularOperacion(fx, x0);
    let suma = x0 === 0 ? 0 : (cal *= cal < 0 ? -1 : 1);
    
    for (let i = 1; i <= segmentos; i++) {
      if (i === segmentos) {
        suma += calcularOperacion(fx, x1);
      } else {
        if (i % 2 !== 0) {
          multiplo = 4;
        } else {
          multiplo = 2;
        }
        cal = calcularOperacion(fx, w * i + x0);
        if (cal < 0) {
          cal *= -1;
        }
        suma += multiplo * cal;
      }
    }
    
    return (w / 3) * suma;
  }

  export function _2x(x: number): number {
    return 2 * x;
  }

  export function x2(x: number): number {
    return x ** 2;
  }

  export function _1_x(x: number): number {
    return 1 / x;
  }

  export function t(x: number): number {
    
    return x;
  }

  export function calcularOperacion(fx: (x: number) => number, x: number): number {
    return fx(x);
  }
}

