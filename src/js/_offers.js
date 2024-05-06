function showAdditionalText(element) {
    var additionalText = element.querySelector('.additional-text');
    additionalText.classList.remove('hidden');
}

function hideAdditionalText(element) {
    var additionalText = element.querySelector('.additional-text');
    additionalText.classList.add('hidden');
}