export async function sendMsg(msg) {
  try {
    const resp = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: 'POST',
        body: JSON.stringify({
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: msg,
        }),
      }
    );
    return resp.ok;
  } catch (err) {
    console.log(`[TG MESSAGE ERROR] ${err}`);
    return false;
  }
}
