const scriptURL = 'https://script.google.com/macros/s/AKfycbzN-oC-Sm4AzppvrKgEHL7t3wAOGMdvACqHKLrQshA9xVr_u_kvBD6i2QJ3VXHaNsLT/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
