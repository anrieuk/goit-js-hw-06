const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // зупиняємо стандартну поведінку форми

  const formData = {}; // створюємо порожній об'єкт для зберігання даних форми

  // обійдемо всі елементи форми та додамо їх значення в об'єкт formData
  for (let element of form.elements) {
    // якщо елемент має ім'я та значення, додаємо їх у об'єкт formData
    if (element.name && element.value) {
      formData[element.name] = element.value;
    }
  }

  // перевіряємо, чи всі поля заповнені, виводимо алерт, якщо необхідно
  if (Object.keys(formData).length !== form.elements.length) {
    alert('All fields are required');
  } else {
    console.log(formData); // виводимо об'єкт formData в консоль
    form.reset(); // очищуємо поля форми
  }
});

