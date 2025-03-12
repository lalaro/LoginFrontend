document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario recargue la página

        // Obtener valores del formulario
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Enviar la solicitud de login
        fetch("http://localhost:35000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(username + ":" + password),
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la autenticación");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login exitoso:", data);
            alert("Inicio de sesión exitoso");
            window.location.href = "dashboard.html"; // Redirigir al usuario
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Usuario o contraseña incorrectos");
        });
    });
});
