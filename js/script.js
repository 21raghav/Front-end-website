document.addEventListener("DOMContentLoaded", function () {
    var productIDContainer = document.getElementById("productIDContainer");
    var productIDInput = document.getElementById("productID");
    var reasonsDropdown = document.getElementById("reasons");

  
    reasonsDropdown.addEventListener("change", function () {
        if (reasonsDropdown.value === "productInfo") {
            productIDContainer.style.display = "block";
        } else {
            productIDContainer.style.display = "none";
            
            productIDInput.value = "";
            hideErrorMessage(productIDInput);
        }
    });


    document.getElementById("fullname").addEventListener("blur", validateName);
    document.getElementById("phone").addEventListener("blur", validatePhoneNumber);
    document.getElementById("productID").addEventListener("blur", validateProductID);
    document.getElementById("message").addEventListener("blur", validateMessage);

  
    function validateName() {
        var nameInput = document.getElementById("fullname");
        var nameValue = nameInput.value.trim();
        var valid = /^[^\d]+$/.test(nameValue) && nameValue.length >= 4;
        updateValidationStatus(nameInput, valid, "Invalid name format. Please enter at least 4 characters with no digits.");
    }

    function validatePhoneNumber() {
        var phoneInput = document.getElementById("phone");
        var phoneValue = phoneInput.value.trim();
        var valid = /^\d{3} \d{3} \d{4}$/.test(phoneValue);
        updateValidationStatus(phoneInput, valid, "Invalid phone number format. Please use the format: 123 456 7890");
    }

    function validateProductID() {
        var productIDInput = document.getElementById("productID");
        var productIDValue = productIDInput.value.trim();
        var valid = isValidProductID(productIDValue);
        updateValidationStatus(productIDInput, valid, "Invalid Product ID. Please enter a valid Product ID or choose a different reason.");
    }

    function validateMessage() {
        var messageInput = document.getElementById("message");
        var messageValue = messageInput.value.trim();
        var valid = messageValue.length > 10 && messageValue.length < 30;
        updateValidationStatus(messageInput, valid, "Invalid message length. Please enter a message between 10 and 30 characters.");
    }

   
    function updateValidationStatus(inputElement, isValid, errorMessage) {
        if (isValid) {
            inputElement.style.borderColor = "green";
            hideErrorMessage(inputElement);
        } else {
            inputElement.style.borderColor = "red";
            showErrorMessage(inputElement, errorMessage);
        }
    }

    
    function isValidProductID(productID) {
        var validProductIDs = ["12345678907", "23970568907", "417973863004", "19723729392", "12984691271", "37190739278"];
        return validProductIDs.includes(productID);
    }

   
    function showErrorMessage(inputElement, errorMessage) {
    var errorElement = document.getElementById(inputElement.id + "Error");
    if (!errorElement) {
        errorElement = document.createElement("div");
        errorElement.id = inputElement.id + "Error";
        errorElement.className = "error-message";
        inputElement.parentNode.appendChild(errorElement);
    }
    errorElement.innerHTML = errorMessage;
    errorElement.style.color = "red"; 
}


   
    function hideErrorMessage(inputElement) {
        var errorElement = document.getElementById(inputElement.id + "Error");
        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }
    function scroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.25;
    var b = 0;

    var newY = m * t + b;
    para.style.backgroundPositionY = newY + "px";
}
            
   
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
var backToTopButton = document.getElementById("back-to-top-btn");

  
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

 
  backToTopButton.onclick = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  };

    

