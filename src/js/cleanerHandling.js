import validateCleaner from './cleanerValidation';
import sendCleanerMsg from './cleanerSendMsg';

const formRef = document.querySelector('[data-form=cleaner]');

formRef.addEventListener('submit', async evt => {
  evt.preventDefault();
  const formData = {
    username: evt.target.elements.names.value,
    email: evt.target.elements.email.value,
    phone: evt.target.elements.phone.value,
    password: evt.target.elements.password.value,
  };

  if (!validateCleaner(formData)) {
    console.log('Validation not passed');
    return;
  }

  const ok = await sendCleanerMsg(formData);

  if (!ok) {
    console.log('cleaner error');
    return;
  }

  document
    .querySelector('[data-cleaner-backdrop]')
    .classList.add('cleaner--hidden');
});
