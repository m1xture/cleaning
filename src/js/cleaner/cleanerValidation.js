import showError from '../errorShow';

export default function validateCleaner({ username, email, phone, password }) {
  let errors = 0;
  if (username.length < 3) {
    errors++;
    showError('usernameCleaner');
  }

  if (!email.includes('@') && !email.includes('.com')) {
    errors++;
    showError('email');
  }

  if (phone.length < 9) {
    errors++;
    showError('phone');
  }

  if (password.length < 8 || password.length > 24) {
    errors++;
    showError('password');
  }

  if (errors === 0) {
    return true;
  } else {
    return false;
  }
}
