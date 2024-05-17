import validateOrder from './orderValidation';
import sendMsg from './orderSendMsg';

const refs = {
  formEl: document.querySelector('[data-order-form]'),
};

const { formEl } = refs;

formEl.addEventListener('submit', async evt => {
  evt.preventDefault();
  const formData = {
    username: formEl.orderNames.value,
    type: formEl.cleaningTypeSelect.value,
    rooms: formEl.orderRoomsNumber.value,
    phone: formEl.orderModalTel.value,
    type: formEl.cleaningTypeSelect.value,
    district: formEl.districtSelect.value,
    address: formEl.orderModalAddres.value,
    additionalInfo: formEl.orderModalAdditionalInfo.value,
  };
  if (!validateOrder(formData)) {
    console.log('Validation not passed');
    return;
  }
  const ok = await sendMsg(formData);
  if (!ok) {
    console.log('error');
    return;
  }
  document.querySelector('.backdrop-order').classList.add('is-hidden-order');
});
