import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let planetWithMoon = data.planets.find(function(planet) {
    return planet.moons && planet.moons.includes(moonName);
  });
  
  if (planetWithMoon) {
    return planetWithMoon.name;
  }
}

let planetByMoon1 = findPlanetNameByMoon(data, 'Triton');
console.log(planetByMoon1);





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
