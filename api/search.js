export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { from, to, departure } = req.body;

    if (!from || !to || !departure) {
      return res.status(400).json({
        error: "From, To, and Departure are required."
      });
    }

    const response = await fetch(
      "https://api.duffel.com/air/offer_requests",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.DUFFEL_ACCESS_TOKEN}`,
          "Duffel-Version": "v2",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            slices: [
              {
                origin: from,
                destination: to,
                departure_date: departure
              }
            ],
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
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
