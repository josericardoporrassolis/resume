let currentLang = 'en';
    function toggleLanguage() {
      const elements = document.querySelectorAll('[data-en]');
      elements.forEach(el => {
        const en = el.getAttribute('data-en');
        const es = el.getAttribute('data-es');
        if (en && es) {
          el.innerHTML = currentLang === 'en' ? es : en;
        }
      });
      const langButton = document.querySelector('.toggle-lang');
      if (langButton) {
        langButton.innerText = currentLang === 'en' ? '🌐 English' : '🌐 Español';
      }
      currentLang = currentLang === 'en' ? 'es' : 'en';
    }
	
	function toggleMenu() {
  const nav = document.getElementById('navbarLinks');
  nav.classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('section-highlight');
      setTimeout(() => {
        targetSection.classList.remove('section-highlight');
      }, 10000); // 10 seconds
    }
  });
});

function printByLanguage() {
    if (currentLang === 'es') { 
        printDocumentEs();
    } 
    else if (currentLang === 'en') {
        printDocumentEn();
    } else {
        console.error('Idioma de impresión no reconocido.');
    }
}

function printDocumentEs() {
    window.open('file/cv.pdf', '_blank')
}

function printDocumentEn() {
    window.open('file/resume.pdf', '_blank');
}