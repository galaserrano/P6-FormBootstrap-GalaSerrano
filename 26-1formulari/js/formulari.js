
async function cridaSubmit(event) {

    // Evitem que el formulari s'enviï automàticament
    event.preventDefault();

    // Agafem les dades del formulari
    const formulari = document.getElementById("formulari");

    const email = formulari.elements["email"].value;

    // Comprovem el format del correu electrònic
    const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatEmail.test(email)) {
        alert("El correu electrònic no és correcte.");
        return;
    }

    // Si tot és correcte
    alert("Formulari enviat correctament!");

}
