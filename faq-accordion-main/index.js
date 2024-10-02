document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const faq = header.parentElement;
      faq.classList.toggle('active');
      const plusIcon = faq.querySelector('.icon:not(.minus)');
      const minusIcon = faq.querySelector('.minus');
      if (faq.classList.contains('active')) {
        plusIcon.classList.add('hidden');
        minusIcon.classList.remove('hidden');
      } else {
        plusIcon.classList.remove('hidden');
        minusIcon.classList.add('hidden');
      }
    });
  });
  