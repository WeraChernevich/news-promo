function sendForm() {
  $(document).ready(function () {
    $("#feedback-form").submit(function (event) {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      var formData = new FormData(this);

      $.ajax({
        url: "process_form.php",
        type: "POST",
        formData, // Ваши данные формы
        processData: false,
        contentType: false,
        success: function (response) {
          console.log(response);
          if (response.status === "success") {
            alert("Данные успешно отправлены!");
          } else {
            alert("Ошибка: " + response.message);
          }
        },
        error: function (error) {
          console.error(error);
          alert("Произошла ошибка при отправке.");
        }
      });
    });

    function validateForm() {
      var isValid = true;
      $("#feedback-form :required").each(function () {
        if ($(this).val() === "") {
          alert("Пожалуйста, заполните поле '" + $(this).attr("placeholder") + "'");
          $(this).focus();
          isValid = false;
          return false;
        }
      });
      return isValid;
    }

    $("#file-upload__input").change(function () {
      var fileNames = [];
      for (var i = 0; i < this.files.length; i++) {
        fileNames.push(this.files[i].name);
      }
      $("#file-selected-names").text(fileNames.length > 0 ? fileNames.join(", ") : "Файлы не выбраны");
    });
  });
}

export default sendForm;