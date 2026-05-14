app.get("/chat", async (req, res) => {
  const message = req.query.msg;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AlzaSyBO_YDboPgze3CawsNlOC5ahFu-Gal32wQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      res.json({
        reply: data.candidates[0].content.parts[0].text,
      });
    } else {
      res.json({ error: data });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});





