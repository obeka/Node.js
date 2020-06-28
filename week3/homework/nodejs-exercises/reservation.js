const fetch = require('node-fetch');

const makeReservation = async (guest) => {
  try {
    const response = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
      method: 'post',
      body: JSON.stringify(guest),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const responseText = await response.text();
    console.log(responseText);
  } catch (error) {
    console.log(error)
  }
}

const guest = {
  name: "Ömer Kılıç",
  numberOfPeople: 3
}

makeReservation(guest)