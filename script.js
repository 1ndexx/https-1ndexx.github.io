function submitForm() {
    
    setTimeout(function () {
        document.getElementById('moneyForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }, 500);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
});



document.addEventListener('DOMContentLoaded', function () {
    // Сховати завантажувач і показати контейнер після завантаження DOM
    setTimeout(function () {
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 2000);
});

function submitForm() {
    // Отримуємо значення з полів
    var contactValue = document.getElementById('contact').value.trim();
    var cardNumberValue = document.getElementById('cardNumber').value.trim();
    var expiryValue = document.getElementById('expiry').value.trim();
    var cvcValue = document.getElementById('cvc').value.trim();
    var fullNameValue = document.getElementById('fullName').value.trim();
    var balanceValue = document.getElementById('balance').value.trim();

    // Перевірка, чи всі поля заповнені
    if (!contactValue || !cardNumberValue || !expiryValue || !cvcValue || !fullNameValue || !balanceValue) {
        // Знайдено порожнє поле, виводимо повідомлення
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    // Сховати форму після натискання кнопки
    document.getElementById('moneyForm').style.display = 'none';

    // Затримка перед показом повідомлення про успіх
    setTimeout(function () {
        // Показати повідомлення про успіх із анімацією
        var successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.style.opacity = '0';

        // Запустити анімацію плавного з'явлення
        var opacity = 0;
        var timer = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            successMessage.style.opacity = opacity;
            opacity += 0.1;
        }, 100);
    }, 2000);
}
