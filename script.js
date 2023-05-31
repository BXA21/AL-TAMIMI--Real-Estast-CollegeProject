document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Perform login validation and redirect to user's dashboard or show error message
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Add your login logic here, e.g., make an API call to validate credentials
    
    if (username === "admin" && password === "1234") {
      // Successful login, redirect to user dashboard or homepage
      window.location.href = "index.html";
    } else {
      // Invalid credentials, show error message
      alert("Invalid username or password");
    }
  });
  