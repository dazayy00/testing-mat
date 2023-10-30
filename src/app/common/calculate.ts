function calculateIntegral(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number): number {
  let h = (x1 - x0) / num_seg;
  let integral = (f(x0) + f(x1)) / 2;

  for (let i = 1; i < num_seg; i++) {
    integral += f(x0 + i * h);
  }

  integral *= h;

  let prevIntegral = 0;
  let numIterations = 0;

  while (Math.abs(integral - prevIntegral) > ERROR) {
    numIterations++;
    prevIntegral = integral;

    h /= 2;
    integral = (f(x0) + f(x1)) / 2;

    for (let i = 1; i < num_seg * 2; i++) {
      integral += f(x0 + i * h);
    }

    integral *= h;
  }

  console.log(`Iterations: ${numIterations}`);

  return integral;
}

// Ejemplo 1
const result1 = calculateIntegral(0, 4, 4, 0.0001, (x) => 2 * x);
console.log(`Result 1: ${result1}`);

// Ejemplo 2
const result2 = calculateIntegral(0, 1, 4, 0.0001, (x) => x ** 2);
console.log(`Result 2: ${result2}`);

// Ejemplo 3
const result3 = calculateIntegral(1, 4, 6, 0.001, (x) => 1 / x);
console.log(`Result 3: ${result3}`);

