// while loop

let i = 0;

while (i < 100) {
  // statement

  i++;
}

// normal for loop

for (let i = 0; i < 100; i++) {
  // statement
}

// loop inside an array

const countriesArray = [
  "iran",
  "india",
  "south korea",
  "united states",
  "finland",
  "the great britain",
];

for (const item of countriesArray) {
  // console.log(item);
}

// forEach method

countriesArray.forEach((item) => {
  console.log(item);
});

// map method

const newArray = countriesArray.map((item) => {
  const nameParts = item.split(" ");

  let finalName = "";

  nameParts.forEach((namePart, index) => {
    finalName +=
      namePart[0].toUpperCase() +
      namePart.slice(1) +
      (index === nameParts.length - 1 ? "" : " ");
  });

  return finalName;
});

console.log(newArray);
