import showError from './errorShow';

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
    showError('username');
  }
  if (!type) {
    errors++;
    showError('type');
  }
  if (isNaN(rooms) || rooms <= 0) {
    errors++;
    showError('rooms');
  }
  if (phone.length <= 6) {
    errors++;
    showError('phone');
  }
  if (!district) {
    errors++;
    showError('district');
  }
  if (address.length <= 5) {
    errors++;
    showError('address');
  }
  if (errors === 0) {
    return true;
  } else {
    return false;
  }
}
