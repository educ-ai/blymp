function attachToForm() {
    const form = document.getElementById('form02');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the default form submission

        const email = document.getElementById('form02-email').value;
        const formData = new FormData();
        formData.append('email', email);
        formData.append('id', 'form02');

        const url = 'https://google.com/submit-email'; // replace with your own URL

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Email submitted successfully!');
                form.reset(); // reset the form if the submission is successful
            } else {
                alert('Email submission failed.');
            }
        })
        .catch(error => {
            alert('Error submitting email: ' + error);
        });
    });
}

document.addEventListener('DOMContentLoaded', attachToForm);