async function get() {
  const response = await fetch("https://api.restful-api.dev/objects", {
    method: "GET",
  });

  console.log(await response.json());
}

get();

async function post() {
  const body = {
    name: "surface book",
    data: {
      year: 2024,
      price: 2000,
      "CPU model": "snapdragon x elite",
      "Hard disk size": "2 TB",
    },
  };
  const response = await fetch("https://api.restful-api.dev/objects", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  console.log(await response.json());
}

post();
