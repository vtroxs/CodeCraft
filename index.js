const text = document.querySelector('.text p');
console.log(text)
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i*8.7}deg")>${char}</span>`
).join("");

// footer width 576px
function moveFooterForm() {
  const footerForm = document.querySelector('.footer_form');
  const footerZag = document.querySelector('.footer_zag');
  const footerText = document.querySelector('.footer_text');

  if (window.innerWidth <= 576) {
    footerZag.insertAdjacentElement('afterend', footerForm);
  } else {
    footerText.insertAdjacentElement('afterend', footerForm);
  }
}
window.addEventListener('load', moveFooterForm);
window.addEventListener('resize', moveFooterForm);

// form radio button checked
const labels = document.querySelectorAll('label[for]');

labels.forEach((label) => {
    label.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            const associatedRadioButtonId = this.getAttribute('for');
            const radioButton = document.getElementById(associatedRadioButtonId);

            if (radioButton) {
                radioButton.checked = !radioButton.checked;
            }
        }
    });
});
const button = document.querySelector('.footer_btn');

button.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        button.classList.add('active');
    }
});

button.addEventListener('keyup', function(event) {
    if (event.keyCode === 32) {
        button.classList.remove('active');
    }
});
