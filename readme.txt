<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form id="login-form" class="form">
                <h2>Login</h2>
                <div class="input-group">
                    <label for="login-email">Email:</label>
                    <input type="email" id="lemail" required>
                </div>
                <div class="input-group">
                    <label for="login-password">Password:</label>
                    <input type="password" id="lpass" required>
                </div>
                <button type="submit" id="btn-1" class="btn">Login</button>
                <p class="switch-form">Don't have an account? <a href="index.html">Signup</a></p>
            </form>
        </div>
    </div>
    <script type="module" src="signin.js"></script>
    <!-- <script type="module" src="signin.js"></script> -->
</body>
</html>









<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form id="signup-form" class="form">
                <h2>Signup</h2>
                <div class="input-group">
                    <label for="signup-name">First Name:</label>
                    <input type="text" id="fname" required>
                </div>
                <div class="input-group"></div>
                    <label for="signup-name">Last Name:</label>
                    <input type="text" id="lname" required>
                </div>
                <div class="input-group">
                    <label for="signup-email">Email:</label>
                    <input type="email" id="semail" required>
                </div>
                <div class="input-group">
                    <label for="signup-password">Password:</label>
                    <input type="password" id="spass" required>
                </div>
                <button type="submit" id="btn" class="btn">Signup</button>
                <p class="switch-form">Already have an account? <a href="signin.html">Login</a></p>
            </form>
        </div>
    </div>
    <script type="module" src="app.js"></script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.form-container {
    padding: 20px;
    padding-right: 40px;
}

.form h2 {
    text-align: center;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn {
    background-color: #007bff;
    color: white;
    padding: 10px;
    /* padding-left: -50px; */
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

.switch-form {
    text-align: center;
    margin-top: 15px;
}

.switch-form a {
    color: #007bff;
    text-decoration: none;
}

.switch-form a:hover {
    text-decoration: underline;
}
