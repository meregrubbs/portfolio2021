import * as React from 'react';
import * as emailjs from 'emailjs-com';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import checkmark from '../images/checkmark.png';

// markup
const Contact = () => {
  // emailJS
  function sendEmail(e) {
    // don't reload the page
    e.preventDefault();

    // send email
    emailjs
      .sendForm(
        'service_nns7oa9',
        'template_mb8qyqj',
        e.target,
        'user_FQvCwBFGhZjkHcWbSevt9'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    // reset inputs
    e.target.reset();

    // submitted animation
    const button = document.querySelector('#submit-button');
    const check = document.querySelector('.checkmark');

    button.innerHTML = 'Submitted!';
    check.classList.add('submitted');
    button.classList.add('submitted');

    setTimeout(function() {
      button.innerHTML = 'Submit';
      button.classList.remove('submitted');
      check.classList.remove('submitted');
    }, 10000);
  }

  return (
    <main className='contact'>
      <Header />

      <div className='contact-content'>
        <h1>Project Briefing</h1>
        <p className='subtitle'>
          Thanks for your interest in working together! Please fill out the
          following information and I will get back to you as soon as possible.
        </p>

        <form onSubmit={sendEmail} className='contact-form'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='from_name'
            placeholder='your name'
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='reply_to'
            placeholder='your email'
            required
          />

          <label htmlFor='company'>Company</label>
          <input
            id='company'
            type='text'
            name='company'
            placeholder='your company'
            required
          />

          <label htmlFor='description'>
            A brief description of the project
          </label>
          <textarea
            id='description'
            name='description'
            cols='30'
            rows='10'
            placeholder='project description'
            required
          ></textarea>

          <label htmlFor='timeframe'>Timeframe</label>
          <input
            id='timeframe'
            type='text'
            name='timeframe'
            placeholder='relevant deadlines'
            required
          />

          <label htmlFor='budget'>Budget Range</label>
          <input
            id='budget'
            type='text'
            name='budget'
            placeholder='project budget'
            required
          />

          <label htmlFor='success'>What does success look like?</label>
          <textarea
            id='success'
            name='success'
            cols='30'
            rows='10'
            placeholder='description of a successful project'
            required
          ></textarea>

          <label htmlFor='designer'>
            What does your ideal designer look like?
          </label>
          <textarea
            id='designer'
            name='designer'
            cols='30'
            rows='10'
            placeholder='description of ideal designer'
            required
          ></textarea>

          <div className='submit-container'>
            <span className='checkmark'>
              <img src={checkmark} alt='' />
            </span>
            <button id='submit-button' type='submit' className='button'>
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
