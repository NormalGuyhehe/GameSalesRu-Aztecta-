function ZaprocDannyhIOtpravkaVJSON() {
  var emailInput = document.getElementById("inputemail");
  var PasswordInput = document.getElementById("InputPasww");
  var InputPaswwReapeatinf = document.getElementById("InputPaswwReapeat");
  var EmailValue = emailInput.value;
  var PasswordInputValue = PasswordInput.value;
  var InputPaswwReapeatinfValue = InputPaswwReapeatinf.value;

  let TransitionToWebPages = false;
  // Регулярное выражение для проверки правильности написания email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Проверка правильности email
  if (!emailRegex.test(EmailValue)) {
    alert("Неправильный формат электронной почты");
    return; // Прекратить выполнение функции, если email неправильный
  }

  // Проверка совпадения паролей
  if (PasswordInputValue !== InputPaswwReapeatinfValue) {
    alert("Неверный пароль, проверьте идентичность паролей");
  } else {
    TransitionToWebPages = true;
    if (TransitionToWebPages) {
      window.location.href("");
    }
  }
}
ZaprocDannyhIOtpravkaVJSON();
