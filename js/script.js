window.onload = function() {

  // Navigatie toggle, dit zorgt ervoor dat de navigatie in en uitklapt

  var navigation = document.querySelector('header > nav ul'),
      navigationToggle = document.querySelector('header > nav');

  navigation.classList.toggle('menu-closed');

  navigationToggle.addEventListener('click', function() {
    navigation.classList.toggle('menu-closed');
  });

  // Formulier switch, hiermee kan je switchen tussen formulieren

  var firstfieldset = document.querySelector('fieldset:nth-of-type(4)'),
      secondfieldset = document.querySelector('fieldset:nth-of-type(3)');

 // er is een twee class aangemaakt met hide
  firstfieldset.classList.add('hide');
  secondfieldset.classList.add('hide');
  document.querySelector('input[type="radio"]:last-of-type').onclick = function () {
      firstfieldset.classList.remove('hide');
      secondfieldset.classList.add('hide');
  }

  document.querySelector('input[type="radio"]').onclick = function () {
      firstfieldset.classList.add('hide');
      secondfieldset.classList.remove('hide');
  }

}


