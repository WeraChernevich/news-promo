function sendForm() {
    $(document).ready(function() {
        $("#feedback-form").submit(function(event) {
          event.preventDefault(); 
      
          if (!validateForm()) {
            return; 
          }
      
          var formData = new FormData(this); 
      
          $.ajax({
            url: "<url>", 
            type: "POST",
            formData,
            processData: false,
            contentType: false,
            success: function(response) {

              console.log("Успешно отправлено!");
              console.log(response);
              alert("Сообщение отправлено!");
      
              $("#feedback-form")[0].reset();
              $("#file-selected-names").text("Файлы не выбраны");
            },
            error: function(xhr, status, error) {
              console.error("Ошибка отправки!");
              console.error(xhr.responseText);
              alert("Произошла ошибка при отправке сообщения. Попробуйте позже.");
            }
          });
        });
      
        function validateForm() {
          var isValid = true;
          $("#feedback-form :required").each(function() {
            if ($(this).val() === "") {
              alert("Пожалуйста, заполните поле '" + $(this).attr("placeholder") + "'");
              $(this).focus(); 
              isValid = false;
              return false;
            }
          });
          return isValid;
        }
      
        $("#file-upload__input").change(function() {
          var fileNames = [];
          for (var i = 0; i < this.files.length; i++) {
            fileNames.push(this.files[i].name);
          }
          $("#file-selected-names").text(fileNames.length > 0 ? fileNames.join(", ") : "Файлы не выбраны");
        });
      });
}

export default sendForm;