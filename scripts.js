/* Add your JavaScript to this file */
window.onload = function() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if(email == ""){
        document.querySelector('.message').textContent = "Please enter a valid email address" 
    }
    else if(isValidEmail(email)){
    document.querySelector('.message').textContent = `Thank you! Your email address  ${email}  has been added to our mailing list!`;
    console.log("Email: " + email);
    }
    else{
        document.querySelector('.message').textContent = "Please enter a valid email address"
    }
    });



    function isValidEmail(email) {
        // Basic email format check
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        return emailPattern.test(email);
      }
    

}