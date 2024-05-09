export default function validateOrder({
  username,
  type,
  rooms,
  phone,
  district,
  address,
}) {
  let errors = 0;
  if (username.length <= 3) {
    errors++;
  }
  if (!type) {
    errors++;
  }
  if (isNaN(rooms) || rooms <= 0) {
    errors++;
  }
  if (phone.length <= 6) {
    errors++;
  }
  if (!district) {
    errors++;
  }
  if (address.length <= 5) {
    errors++;
  }
  if (errors === 0) {
    return true;
  } else {
    return false;
  }
}
