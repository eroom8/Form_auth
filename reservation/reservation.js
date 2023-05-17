$(document).ready(function () { // Wait until the document is ready
    $("#arrival_date").focus; // Set the focus on the arrival date input field
    var $fields = $("#reservation_form").find('input'); // Select all input fields within the reservation form
    $("#reservation_form").submit(function (e) { // Attach a submit event listener to the form
        var $emptyFields = $fields.filter(function () { // Filter out empty fields
            // Remove leading/trailing whitespace from input value and check if it is empty
            return $.trim(this.value) === ""; 
        });
        // Check if there are any empty fields, if nights input is not numeric, or if email is not valid
        if ($emptyFields.length ){
            e.preventDefault();
            alert("Please fill in all the required fields.");
        } else if (!($.isNumeric($("#nights").val()))) {
            e.preventDefault();
            alert("Please enter a valid number of nights.");
        } else if (!validateEmail($("#email").val())) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }

        function storeValues(form) { // Define a function to store form values in cookies
            setCookie("arrival_date", form.arrival_date.value);
            setCookie("nights", form.nights.value);
            setCookie("name", form.name.value);
            setCookie("email", form.email.value);
            setCookie("phone", form.phone.value);
            return true;
        }
    });

   function validateEmail(email) { // Define a function to validate email addresses using regex
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
   }
});
