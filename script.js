const accordion = (selector) => {
	window.addEventListener("resize", () => {
		const bodyActive = document.querySelectorAll(`${selector} .accordion__body_active`);
		bodyActive.forEach((item) => {
			const contentStyle = getComputedStyle(item.children[0]);
			item.style.height = contentStyle.height;
		})
	});

	const accordionElements = document.querySelectorAll(`${selector} .accordion__body`);
	const accordionItems = document.querySelectorAll(`${selector} .accordion__item`);

	accordionItems.forEach((item) =>
    	item.addEventListener("click", (e) => {
        	if (e.target.classList.contains("accordion__button")) {
        		const body = e.target.parentElement.nextElementSibling;
        		const content = e.target.parentElement.nextElementSibling.children[0];
        		const contentStyle = getComputedStyle(content);
        		const currentItem = e.target.closest(".accordion__item");

          		function setBodyHeight() {
            		if (body.classList.contains("accordion__body_active")) {
              			body.style.height = contentStyle.height;
            				} else {
            			body.style.height = 0;
            		}
          		}			

        		function oneSlideActive() {
            		accordionElements.forEach((item) => {
            			item.classList.remove("accordion__body_active");
            			item.style.height = 0;
            		});
            		body.classList.add("accordion__body_active");
            		currentItem.classList.add("accordion__item_active");            
            		setBodyHeight();
          		}

          		function eachSlideActive() {
            		body.classList.toggle("accordion__body_active");
            		currentItem.classList.toggle("accordion__item_active");
            		setBodyHeight();
          		}

          		// закоментировать, для eachSlideActive
          		accordionItems.forEach((item) => {
            		item.classList.remove("accordion__item_active");
          		});
          		oneSlideActive();

          		// eachSlideActive();
        	}
     	})
	);  
};

accordion(".accordion");
