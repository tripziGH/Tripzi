export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { from, to, departure, returnDate } = req.body;

    if (!from || !to || !departure) {
      return res.status(400).json({
        error: "Missing flight search information"
      });
    }

    const slices = [
      {
        origin: from.toUpperCase(),
        destination: to.toUpperCase(),
        departure_date: departure
      }
    ];

    if (returnDate) {
      slices.push({
        origin: to.toUpperCase(),
        destination: from.toUpperCase(),
        departure_date: returnDate
      });
    }

    const response = await fetch(
      "https://api.duffel.com/air/offer_requests?return_offers=true",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.DUFFEL_TOKEN}`,
          "Duffel-Version": "v2",
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            slices,
            passengers: [
              {
                type: "adult"
              }
            ],
            cabin_class: "economy"
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Duffel API error",
        details: data
      });
    }

    return res.status(200).json(data.data);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
