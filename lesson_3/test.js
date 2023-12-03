let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

// We can use Object.assign() method to merge two objects:

console.log(Object.assign(ages, additionalAges));
