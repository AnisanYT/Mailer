
window.onload = () => {
    const mailerForm = document.getElementById('mailer-form')
    mailerForm.onsubmit = async (e) => {
        e.preventDefault()
        const err = document.getElementById('err')
        err.innerHTML = ''
        const formData = new FormData(mailerForm)
        const data = Object.fromEntries(formData.entries())
        const response = await fetch('/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
             'Content-Type': 'application/json'   
            }
        })
        const responseText = await response.text()
        if (response.status>300){
            err.innerHTML = responseText
            return 
        }

        mailerForm.reset()
        alert('Email was send succeful')
    }
}