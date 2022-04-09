
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(item => {
    item.addEventListener('click', e => {
      const accordionBodyElements = item.querySelectorAll('.accordion__body');
      const accordionItems = item.querySelectorAll('.accordion__item');

      if (e.target.classList.contains('accordion__button')) {
        const body = e.target.parentNode.nextElementSibling;
        const content = e.target.parentNode.nextElementSibling.childNodes[1];
        const contentStyle = getComputedStyle(content);
        const currentItem = e.target.closest('.accordion__item');

        function setBodyHeight() {
          if (body.classList.contains('is-active')) {
            body.style.height = contentStyle.height;
          } else {
            body.style.height = 0;
          }
        }

        function oneSlideActive() {
          accordionBodyElements.forEach(item => {
            item.classList.remove('is-active');
            item.style.height = 0;
          });
          body.classList.add('is-active');
          currentItem.classList.add('is-active');
          setBodyHeight();
        }

        function eachSlideActive() {
          body.classList.toggle('is-active');
          currentItem.classList.toggle('is-active');
          setBodyHeight();
        }

        // закоментировать, для eachSlideActive
        accordionItems.forEach(item => {
          item.classList.remove('is-active');
        });

        oneSlideActive();
        // eachSlideActive();
      }
    });
  });
