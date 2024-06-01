/*
Aassessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your car objects
const carInventory = [];

// Function to generate a unique car ID
function generateCarID() {
  return `CAR-${Math.floor(Math.random() * 100000)}`;
}

// This function will take in some values as parameters, create a
// car object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintCar(_make, _model, _year, _color) {
  const car = {
    id: generateCarID(),
    make: _make,
    model: _model,
    year: _year,
    color: _color,
  };
  carInventory.push(car);
  console.log(`${_make} ${_model} Minted | ID -> ${car.id}`);
}

// Create a "loop" that will go through an "array" of cars
// and print their metadata with console.log()
function listCars() {
  console.log("\nListing all cars in inventory:\n");

  carInventory.forEach((car) => {
    console.log(`Car ID: ${car.id}`);
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color: ${car.color}`);
    console.log("\n");
  });

  console.log("These are all the cars in the inventory so far!\n");
}

// Print the total number of cars we have minted to the console
function getTotalSupply() {
  console.log("Total number of cars in inventory: " + carInventory.length);
}

// Call your functions below this line
mintCar("Toyota", "Corolla", 2020, "Blue");
mintCar("Honda", "Civic", 2018, "Red");
mintCar("Tesla", "Model 3", 2021, "White");
listCars();
getTotalSupply();
