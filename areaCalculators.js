/*
In this exercise, we will define 3 functions 
to calculate the areas of 3 different shapes:

    rectangles
    triangles
    circles

Create the following 3 functions with the correct logic to calculate the area of that shape.
*/
function calculateRectangleArea(length, width) {
  if (length && width > 0) {
    return length * width;
  }
}
function calculateTriangleArea (base, height) {
  if (base && height >0) {
  return base * height / 2 ;
  }
}
function calculateCircleArea(radius) {
  if (radius > 0) {
  return Math.PI * (radius * radius);
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
