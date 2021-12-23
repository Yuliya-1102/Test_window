'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.slider-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 1, 
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });
      
      const form = document.getElementById('form1');
      const modal = document.querySelector('.modal');

      const openModal = () => {
        modal.style.display = 'block';
      };

      const closeModal = () => {
        modal.style.display = 'none';
      };

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        openModal();

        setTimeout(closeModal, 1500);
        form.reset();
      });

       //валидация форм
       const validForm = () => {
        document.querySelector('body').addEventListener('input', (event) => {
            const target = event.target;
            if(target.type === 'tel'){
                target.value = target.value.match(/\+?\d{1,13}/);
            }
        });
    };
    validForm();
      
});