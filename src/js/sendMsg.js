import 'dotenv/config';

export default async function sendMsg(obj) {
  try {
    let message = `<b>Cleaning order</b>\n`;
    message += `<b>First & last name:</b> ${obj.username}\n`;
    message += `<b>Cleaning type:</b> ${obj.type}\n`;
    message += `<b>Number of rooms</b> ${obj.rooms}\n`;
    message += `<b>Phone number:</b> ${obj.phone}\n`;
    message += `<b>District:</b> ${obj.district}\n`;
    message += `<b>Address:</b> ${obj.address}\n`;
    message += `<b>Additional information:</b> ${obj.additionalInfo}\n`;
    // console.log(obj);
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
