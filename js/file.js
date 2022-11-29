var file = (function($) {
  var init = function() {
    const date = document.querySelector("#date");
    const newDate = new Date();
    date.innerHTML = `${newDate.getDate()}/${newDate.getMonth() +
      1}/${newDate.getFullYear()} `;
  };

  var eventHandlers = function() {
    const ipad = window.matchMedia("screen and (max-width: 767px)");
    ipad.addListener(validation);

    const menu = document.querySelector("#menu");
    const burgerButton = document.querySelector("#burger-menu");

    const btnSendEmail = document.querySelector("#btnSendEmail");
    const email = document.querySelector("#email");

    menu.addEventListener("click", hideShow);

    btnSendEmail.addEventListener("click", prepareEmail);

    function validation(event) {
      if (event.matches) {
        burgerButton.addEventListener("click", hideShow);
      } else {
        burgerButton.removeEventListener("click", hideShow);
      }
    }

    $("body").on("click", function() {
      if (menu.classList.contains("is-active")) {
        setTimeout(() => {
          menu.classList.remove("is-active");
        }, 2);
      }
    });

    validation(ipad);

    function hideShow() {
      setTimeout(() => {
        if (menu.classList.contains("is-active")) {
          menu.classList.remove("is-active");
        } else {
          menu.classList.add("is-active");
        }
      }, 1);
    }

    function prepareEmail() {
      event.preventDefault();
      if (email.value != undefined && email.value != "") {
        window.open(
          "mailto:jrporras252@gmail.com?subject=Contacto&body=" + email.value
        );
      }
    }
  };

  return {
    init: init,
    eventHandlers: eventHandlers
  };
    
})(jQuery);

(function($) {
    $.fn.cycle = function(timeout, cls) {
        var l = this.length,
            current = 0,
            prev = -1,
            elements = this;

        function next() {
            elements.eq(prev).removeClass(cls);
            // or just `elements.removeClass(cls);`
            elements.eq(current).addClass(cls);
            prev = current;
            current = (current + 1) % l; // modulo for wrap around
            setTimeout(next, timeout);
        }
        setTimeout(next, timeout);
        return this;
    };
}(jQuery));

$('li').cycle(2000, 'active');

$(document).ready(function() {
  file.init();
  file.eventHandlers();
});

var imgEl = document.getElementsByTagName('img');
for (var i=0; i<imgEl.length; i++) {
    if(imgEl[i].getAttribute('data-src')) {
       imgEl[i].setAttribute('src',imgEl[i].getAttribute('data-src'));
       imgEl[i].removeAttribute('data-src');
    }
}