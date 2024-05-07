function showAdditionalText(element) {
    const additionalText = element.querySelector('.additional-text');
    additionalText.classList.remove('hidden');
}

function hideAdditionalText(element) {
    const additionalText = element.querySelector('.additional-text');
    additionalText.classList.add('hidden');
}