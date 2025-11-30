document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      feedback.textContent = '';
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(!name || !email || !message){
        feedback.style.color = 'crimson';
        feedback.textContent = 'Mohon lengkapi semua field yang wajib.';
        return;
      }

      // Di sini: kirim data ke backend atau email service.
      // Karena ini demo, kita tampilkan pesan sukses.
      feedback.style.color = 'green';
      feedback.textContent = 'Terima kasih, permintaan Anda telah dikirim. Kami akan menghubungi segera.';
      form.reset();
      console.log('Form data:', {name, email, message});
    });
  }
});
