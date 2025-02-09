function uploadFile() {
    const form = document.getElementById('feedback__upload-form');
    const fileInput = document.getElementById('file-upload__input');
    const fileSelectedName = document.getElementById('file-upload__selected-name');
    const submitButton = document.getElementById('submit-button');
    const termsCheckbox = document.querySelector('input[name="terms_agreement"]');


    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            fileSelectedName.textContent = this.files[0].name;
            customButton.textContent = fileName;
        } else {
            fileSelectedName.textContent = "Файл не выбран";
        }
    });

    termsCheckbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!termsCheckbox.checked) {
            alert("Пожалуйста, согласитесь с условиями использования.");
            return;
        }

        // Здесь будет код для отправки данных на сервер (AJAX или fetch API)

        alert("Форма успешно отправлена!"); 

        // Очистка формы
        form.reset();
        fileSelectedName.textContent = "Файл не выбран";
        submitButton.disabled = true;
    });
}

export default uploadFile;