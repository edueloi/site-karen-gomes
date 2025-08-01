document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
  });

  // === Efeito de Rolagem no Header ===
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    });
  }

  // === LÓGICA DO NOVO MENU RESPONSIVO ===
  const navToggle = document.querySelector(".nav-toggle");
  const navMenuMobile = document.querySelector(".nav-menu-mobile");
  const navClose = document.querySelector(".nav-close");
  const navLinks = document.querySelectorAll(".nav-mobile-list a");
  const body = document.body;

  const openMenu = () => {
    navMenuMobile.classList.add("open");
    body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    navMenuMobile.classList.remove("open");
    body.classList.remove("no-scroll");
  };

  if (navToggle && navMenuMobile && navClose) {
    navToggle.addEventListener("click", openMenu);
    navClose.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // === Botão Voltar ao Topo ===
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Carrossel de Depoimentos com Swiper.js ===
  new Swiper(".testimonial-swiper-container", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  // === Acordeão de Perguntas Frequentes (FAQ) ===
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      const answer = button.nextElementSibling;
      const icon = button.querySelector(".faq-icon i");

      // Fecha todos os outros itens
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== faqItem) {
          otherItem.classList.remove("active");
          otherItem
            .querySelector(".faq-icon i")
            .classList.replace("fa-minus", "fa-plus");
          otherItem.querySelector(".faq-answer").style.maxHeight = 0;
        }
      });

      // Alterna a classe 'active' para o item clicado
      faqItem.classList.toggle("active");

      // Alterna o ícone
      if (faqItem.classList.contains("active")) {
        icon.classList.replace("fa-plus", "fa-minus");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        icon.classList.replace("fa-minus", "fa-plus");
        answer.style.maxHeight = 0;
      }
    });
  });

  // === Formulário de Contato com Backend PHP ===
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const dataHoraAtual = new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      });
      document.getElementById("hora_envio").value = dataHoraAtual;

      const formData = new FormData(contactForm);

      formMessage.textContent = "Enviando sua mensagem...";
      formMessage.className = "form-message"; // Estilo padrão
      submitButton.disabled = true;
      submitButton.innerHTML = "Enviando...";

      fetch("enviar_email.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            formMessage.textContent = data.message;
            formMessage.className = "form-message success";
            contactForm.reset();
          } else {
            formMessage.textContent = "Erro: " + data.message;
            formMessage.className = "form-message error";
          }
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
          formMessage.textContent = "Ocorreu um erro de rede. Tente novamente.";
          formMessage.className = "form-message error";
        })
        .finally(() => {
          submitButton.disabled = false;
          submitButton.innerHTML =
            'Enviar Mensagem <i class="fas fa-paper-plane"></i>';
        });
    });
  }

  // === Botão Flutuante e Modal do WhatsApp ===
  const whatsappButton = document.getElementById("whatsapp-button");
  const whatsappModal = document.getElementById("whatsapp-modal");
  const closeWhatsappModal = document.querySelector(
    "#whatsapp-modal .close-modal"
  );
  const whatsappForm = document.getElementById("whatsapp-form");
  const YOUR_WHATSAPP_NUMBER = "5515991345333";

  if (whatsappButton && whatsappModal && whatsappForm) {
    whatsappButton.addEventListener("click", () =>
      whatsappModal.classList.add("active")
    );
    closeWhatsappModal.addEventListener("click", () =>
      whatsappModal.classList.remove("active")
    );
    whatsappModal.addEventListener("click", (e) => {
      if (e.target === whatsappModal) whatsappModal.classList.remove("active");
    });

    whatsappForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("whatsapp-name").value.trim();
      const additionalMessage = document
        .getElementById("whatsapp-message")
        .value.trim();
      let fullMessage = `Olá, meu nome é ${name}. Estou entrando em contato através do site.`;
      if (additionalMessage) fullMessage += ` Mensagem: ${additionalMessage}`;
      const encodedMessage = encodeURIComponent(fullMessage);
      window.open(
        `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`,
        "_blank"
      );
      whatsappModal.classList.remove("active");
      whatsappForm.reset();
    });
  }
});
