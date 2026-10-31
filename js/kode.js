document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.knapp');

  if (button) {
    button.addEventListener('click', function () {
      alert('Knapp trykket!');
    });
  }
});
