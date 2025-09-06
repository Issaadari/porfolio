document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Empêche le comportement d'envoi par défaut du formulaire
            event.preventDefault();

            // Validation de base des champs
            const prenom = document.getElementById('prenom').value.trim();
            const nom = document.getElementById('nom').value.trim();
            const sujet = document.getElementById('sujet').value.trim();
            const message = document.getElementById('message').value.trim();

            if (prenom === '' || nom === '' || sujet === '' || message === '') {
                alert('Veuillez remplir tous les champs du formulaire !');
            } else {
                // Si la validation réussit, vous pouvez simuler une soumission ou
                // ajouter un appel à une API pour envoyer le message.
                alert('Merci ! Votre message a été envoyé.');
                
                // Réinitialise le formulaire après l'envoi
                contactForm.reset();
            }
        });
    }
});