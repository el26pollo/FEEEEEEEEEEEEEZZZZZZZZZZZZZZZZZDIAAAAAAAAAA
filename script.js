const velasDiv = document.getElementById("velas");

// Crear velas automáticamente
for (let i = 0; i < 5; i++) {
    const vela = document.createElement("div");
    vela.className = "vela";

    const flama = document.createElement("div");
    flama.className = "flama";

    vela.appendChild(flama);
    velasDiv.appendChild(vela);
}

function celebrar() {
    const nombre = nombreInput();
    const edad = edadInput();

    document.getElementById("mensaje").innerText =
        `🎉 ¡Feliz Cumpleaños ${nombre}! 🎂 ${edad}`;

    document.querySelectorAll(".flama").forEach(f => f.remove());
    document.getElementById("sonido").play();
    iniciarFuegos();
}

function nombreInput() {
    return document.getElementById("nombre").value || "Amigo";
}

function edadInput() {
    return document.getElementById("edad").value || "";
}

/* 🎆 FUEGOS ARTIFICIALES */
const canvas = document.getElementById("fuegos");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
window.onresize = resize;

function iniciarFuegos() {
    for (let i = 0; i < 20; i++) {
        setTimeout(explotar, i * 300);
    }
}

function explotar() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;

        let px = x;
        let py = y;

        const color = `hsl(${Math.random() * 360}, 100%, 60%)`;

        const interval = setInterval(() => {
            ctx.fillStyle = color;
            ctx.fillRect(px, py, 4, 4);
            px += Math.cos(angle) * speed;
            py += Math.sin(angle) * speed;

        }, 30);

        setTimeout(() => clearInterval(interval), 800);
    }
}