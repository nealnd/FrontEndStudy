const triggers = document.querySelectorAll('.faq');

triggers.forEach(trigger => {

    const btn = trigger.querySelector('i');

    btn.addEventListener('click', () => {
        if (btn.className == "fas fa-chevron-down")
            btn.className = "fas fa-times";
        else {
            btn.className = "fas fa-chevron-down";
        }

        trigger.classList.toggle('active');

    })


})