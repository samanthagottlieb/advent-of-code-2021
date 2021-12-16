export function calculatePositionProduct(course: string[]): number {
  let horizontalPosition = 0
  let depth = 0

  const courseSplit = course.map(direction => direction.split(" "));

  courseSplit.forEach(direction => {
    if (direction[0] == "forward") {
      horizontalPosition += parseInt(direction[1]);
    } else if (direction[0] == "down") {
      depth += parseInt(direction[1])
    }
  });

  return horizontalPosition * depth
}
