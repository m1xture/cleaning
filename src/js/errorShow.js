export default function showError(inputType) {
  const inputs = {
    username: document.querySelector('[name=orderNames]'),
    type: document.querySelector('[name=cleaningTypeSelect]'),
    rooms: document.querySelector('[name=orderRoomsNumber]'),
    phone: document.querySelector('[name=orderModalTel]'),
    district: document.querySelector('[name=districtSelect]'),
    address: document.querySelector('[name=orderModalAddres]'),
    email: document.querySelector('[data-input=cleaner-email]'),
    phoneCleaner: document.querySelector('[data-input=cleaner-phone]'),
    password: document.querySelector('[data-input=cleaner-password]'),
    usernameCleaner: document.querySelector('[data-input=cleaner-username]'),
  };
  console.log(inputs);
  inputs[inputType].classList.add('order__input--error');
}
