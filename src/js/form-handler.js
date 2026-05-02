document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('submit-btn');
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Imposta orario invio
            const timeField = document.getElementById('current_time');
            if (timeField) {
                timeField.value = new Date().toLocaleString('it-IT');
            }

            // Feedback visivo
            btn.innerHTML = 'Invio in corso... <i class="bi bi-hourglass-split ms-2"></i>';
            btn.disabled = true;

            const serviceID = 'service_7lo9nij';
            const templateID = 'template_79tdtxs';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerHTML = 'Messaggio Inviato! <i class="bi bi-check-circle-fill ms-2"></i>';
                    alert('Grazie! Il messaggio è stato inviato correttamente.');
                    form.reset();
                }, (error) => {
                    // Log reale per debug
                    console.error('FAILED...', error);
                    
                    btn.innerHTML = 'Riprova <i class="bi bi-exclamation-triangle ms-2"></i>';
                    btn.disabled = false;
                    
                    // CORREZIONE RICHIESTA: Messaggio generico per l'utente
                    alert("Ops! C'è stato un errore durante l'invio, riprova più tardi!");
                })
                .finally(() => {
                    setTimeout(() => {
                        btn.innerHTML = 'Diamo vita all\'idea <i class="bi bi-send-fill ms-2"></i>';
                        btn.disabled = false;
                    }, 5000);
                });
        });
    }
});