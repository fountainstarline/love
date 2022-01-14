    JSON.parse(localStorage.getItem('formData')) ? 
    
    Object.keys(JSON.parse(localStorage.getItem('formData'))).forEach(key => {
      document.querySelector('#myForm')[key].value = JSON.parse(localStorage.getItem('formData'))[key];
    })

    : localStorage.setItem('formData', JSON.stringify({}));

    document.querySelector('#myForm').forEach(input => {
      input.addEventListener('input', () => {
        localStorage.setItem('formData', 
          JSON.stringify(
            {...JSON.parse(localStorage.getItem('formData')),
              [input.name]: input.value
            })
          );
      })
    })




      let thisForm = document.querySelector('#myForm');
      thisForm.addEventListener('submit', (e)=>{
          e.preventDefault();
          thisForm.querySelector('.loading').classList.add('d-block');
          thisForm.querySelector('.error-message').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.remove('d-block');
          
          
          emailjs.sendForm('service_dkgww5m', 'template_0vqfxwq', '#myForm', 'user_dgjLycKP4Yy3o5zzr8Gk8')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              thisForm.querySelector('.loading').classList.remove('d-block');
              thisForm.querySelector('.error-message').classList.remove('d-block');
              thisForm.querySelector('.sent-message').classList.add('d-block');
              localStorage.setItem('formData', JSON.stringify({}))
              document.querySelector('#myForm').forEach(input => {
                input.value = '';
              })
                // window.location.href = 'thank.html';
            }, function(error) {
                console.log('FAILED...', error);
                thisForm.querySelector('.loading').classList.remove('d-block');
                thisForm.querySelector('.error-message').innerHTML = 'An Error Occurred';
                thisForm.querySelector('.error-message').classList.add('d-block');
            });  
              
      });

      