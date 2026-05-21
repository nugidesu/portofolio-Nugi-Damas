export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || "Unknown";

  const message = `
🔔 Ada pengunjung baru di portofolio!

🌐 IP: ${ip}
🕒 Time: ${new Date().toLocaleString("id-ID")}
`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  res.status(200).json({ success: true });
}
