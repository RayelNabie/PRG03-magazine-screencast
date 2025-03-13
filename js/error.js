const params = new URLSearchParams(window.location.search);
const errorStatus = params.get('status');

const errors = {
    400: ['400 - Foutieve aanvraag", "De server begrijpt de aanvraag niet.'],
    404: ['404 - Niet gevonden", "De opgevraagde pagina bestaat niet.'],
    500: ['500 - Serverfout", "Er is een probleem met de server. Probeer het later opnieuw.'],
};

const [title, message] = errors[errorStatus] ?? ["Onbekende fout", "Er is een onverwachte fout opgetreden."];

document.getElementById('error-title').textContent = title;
document.getElementById('error-message').textContent = message;