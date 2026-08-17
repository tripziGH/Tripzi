<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tripzi - Travel & Flight Booking</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #f5f8fc;
      color: #172033;
    }

    header {
      background: white;
      padding: 18px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #1677ff;
    }

    nav a {
      margin-left: 20px;
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }

    .hero {
      background: linear-gradient(135deg, #1677ff, #45b7ff);
      padding: 70px 7% 100px;
      text-align: center;
      color: white;
    }

    .hero h1 {
      font-size: 42px;
      margin-bottom: 12px;
    }

    .hero p {
      font-size: 18px;
      margin-bottom: 35px;
    }

    .booking-box {
      background: white;
      max-width: 1000px;
      margin: -55px auto 0;
      position: relative;
      border-radius: 18px;
      padding: 25px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    }

    .trip-types {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      color: #333;
    }

    .trip-types label {
      cursor: pointer;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .field {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .field label {
      font-size: 13px;
      color: #666;
      margin-bottom: 6px;
    }

    .field input,
    .field select {
      padding: 14px;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 14px;
      width: 100%;
    }

    .search-btn {
      margin-top: 18px;
      width: 100%;
      padding: 16px;
      border: none;
      border-radius: 10px;
      background: #1677ff;
      color: white;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
    }

    .search-btn:hover {
      background: #075dcc;
    }

    .search-btn:disabled {
      opacity: 0.7;
      cursor: wait;
    }

    .results {
      max-width: 1000px;
      margin: 30px auto;
      padding: 0 20px;
    }

    .results h2 {
      margin-bottom: 15px;
    }

    .flight-card {
      background: white;
      padding: 20px;
      margin-bottom: 15px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    }

    .popular {
      padding: 55px 7%;
      text-align: center;
    }

    .popular h2 {
      margin-bottom: 30px;
      font-size: 28px;
    }

    .destinations {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1000px;
      margin: auto;
    }

    .destination {
      background: white;
      border-radius: 15px;
      padding: 30px 20px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    }

    .destination .icon {
      font-size: 42px;
      margin-bottom: 12px;
    }

    .destination h3 {
      margin-bottom: 8px;
    }

    footer {
      background: #172033;
      color: white;
      text-align: center;
      padding: 25px;
      margin-top: 30px;
    }

    @media (max-width: 700px) {
      header {
        padding: 15px 5%;
      }

      nav a {
        margin-left: 10px;
        font-size: 13px;
      }

      .hero {
        padding: 50px 5% 80px;
      }

      .hero h1 {
        font-size: 32px;
      }

      .booking-box {
        margin-left: 5%;
        margin-right: 5%;
      }

      .fields {
        grid-template-columns: 1fr;
      }

      .destinations {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">✈️ Tripzi</div>

    <nav>
      <a href="#">Flights</a>
      <a href="#">Hotels</a>
      <a href="#">Trips</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Where will you go next?</h1>
    <p>Search flights and start your next adventure with Tripzi.</p>
  </section>

  <section class="booking-box">

    <div class="trip-types">
      <label>
        <input type="radio" name="trip" value="round" checked>
        Round Trip
      </label>

      <label>
        <input type="radio" name="trip" value="oneway">
        One Way
      </label>
    </div>

    <div class="fields">

      <div class="field">
        <label>From</label>
        <input type="text" id="from" placeholder="City or airport">
      </div>

      <div class="field">
        <label>To</label>
        <input type="text" id="to" placeholder="City or airport">
      </div>

      <div class="field">
        <label>Departure</label>
        <input type="date" id="departure">
      </div>

      <div class="field">
        <label>Return</label>
        <input type="date" id="return">
      </div>

    </div>

    <div class="field" style="margin-top: 12px;">
      <label>Passengers</label>

      <select id="passengers">
        <option value="1">1 Adult</option>
        <option value="2">2 Adults</option>
        <option value="3">3 Adults</option>
        <option value="4">4 Adults</option>
        <option value="5">5 Adults</option>
      </select>
    </div>

    <button class="search-btn" onclick="searchFlights()">
      🔎 Search Flights
    </button>

  </section>

  <section id="results" class="results"></section>

  <section class="popular">

    <h2>Popular Destinations</h2>

    <div class="destinations">

      <div class="destination">
        <div class="icon">🌴</div>
        <h3>Manila</h3>
        <p>Discover the Philippines</p>
      </div>

      <div class="destination">
        <div class="icon">🗼</div>
        <h3>Tokyo</h3>
        <p>Experience Japan</p>
      </div>

      <div class="destination">
        <div class="icon">🗽</div>
        <h3>New York</h3>
        <p>Explore the USA</p>
      </div>

    </div>

  </section>

  <footer>
    <p>© 2026 Tripzi. Your journey starts here. ✈️</p>
  </footer>

  <script>
    async function searchFlights() {

      const from = document.getElementById("from").value.trim();
      const to = document.getElementById("to").value.trim();
      const departure = document.getElementById("departure").value;
      const returnDate = document.getElementById("return").value;
      const passengers = document.getElementById("passengers").value;

      const results = document.getElementById("results");
      const button = document.querySelector(".search-btn");

      if (!from || !to || !departure) {
        alert("Please enter your departure city, destination, and departure date.");
        return;
      }

      button.disabled = true;
      button.textContent = "🔎 Searching...";

      results.innerHTML = `
        <div class="flight-card">
          <h2>Searching flights...</h2>
          <p>Searching flights from ${from} to ${to}.</p>
        </div>
      `;

      try {

        const response = await fetch("/api/search", {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            from: from,
            to: to,
            departure: departure,
            returnDate: returnDate,
            passengers: passengers
          })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Flight search failed."
          );
        }

        console.log("Flight results:", data);

        results.innerHTML = `
          <div class="flight-card">
            <h2>✈️ Flight Search Results</h2>
            <p>Flights found from <strong>${from}</strong> to <strong>${to}</strong>.</p>
            <p>Your flight data was successfully received from the API.</p>
          </div>
        `;

      } catch (error) {

        console.error("Flight search error:", error);

        results.innerHTML = `
          <div class="flight-card">
            <h2>❌ Flight Search Error</h2>
            <p>${error.message}</p>
          </div>
        `;

      } finally {

        button.disabled = false;
        button.textContent = "🔎 Search Flights";

      }
    }
  </script>

</body>
</html>
