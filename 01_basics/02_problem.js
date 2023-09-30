// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function calculateTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

const triangleArea = calculateTriangleArea(5, 6, 7);
console.log(`The area of this triangle is : ${triangleArea.toFixed(2)}`);
