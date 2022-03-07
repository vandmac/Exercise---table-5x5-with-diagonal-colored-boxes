const field = document.querySelectorAll('.field');

let fieldNumber = 0;
for (let i = 1; i < 6; i++) {
  field[fieldNumber].classList.add('colored-field');
  fieldNumber += 6;
}
