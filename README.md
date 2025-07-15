# Karen Gomes - Website for a Clinical Psychologist

Este é um site profissional de portfólio de página única, totalmente responsivo, projetado para Karen Gomes, psicóloga clínica. O site visa apresentar seus serviços, abordagem terapêutica e histórico profissional em uma interface elegante, acolhedora e moderna. Inclui várias seções interativas para engajar os usuários e facilitar o contato.

<br>

![Website Screenshot](https://i.imgur.com/8N03V2g.png)

### 🔗 Live Demo (Placeholder)
**[https://www.karengomes.com.br/](https://www.karengomes.com.br/)**

---

## 📋 Tabela de Conteúdos

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades Principais](#-funcionalidades-principais)
- [🛠️ Construído Com](#️-construído-com)
- [🎨 Design & Estilo](#-design--estilo)
- [🚀 Como Começar](#-como-começar)
- [📂 Estrutura de Arquivos](#-estrutura-de-arquivos)
- [📞 Contato](#-contato)

---

## 📖 Sobre o Projeto

Este projeto é uma landing page para uma psicóloga clínica, construída para estabelecer uma forte presença online. O design foca em criar uma sensação de calma, confiança e profissionalismo, refletindo a natureza do trabalho da psicóloga. O site é estruturado como uma experiência de página única com rolagem suave, guiando os visitantes através de diferentes aspectos de sua prática, desde sua apresentação pessoal até depoimentos de clientes e métodos de contato.

---

## ✨ Funcionalidades Principais

-   **Design Elegante & Moderno:** Uma interface limpa e visualmente atraente com uma paleta de cores e tipografia cuidadosamente selecionadas.
-   **Totalmente Responsivo:** Adapta-se perfeitamente a todos os dispositivos, de grandes desktops a celulares.
-   **CSS Custom Properties:** Um sistema de design robusto construído com variáveis CSS para fácil gerenciamento de temas e consistência.
-   **Seções Interativas:**
    -   **Animações ao Rolar:** Animações sutis com **AOS.js** para melhorar a experiência do usuário.
    -   **Carrossel de Depoimentos:** Um carrossel sensível ao toque e com reprodução automática, construído com **Swiper.js**.
    -   **Acordeão de FAQ:** Um acordeão limpo e funcional para responder a perguntas comuns.
-   **Cabeçalho Dinâmico:** O cabeçalho muda de estilo e tamanho ao rolar para um visual elegante.
-   **Botões de Ação Flutuantes:**
    -   Um botão "Voltar ao Topo" para fácil navegação.
    -   Um botão persistente do WhatsApp que abre um modal personalizado.
-   **Formulários de Contato Funcionais:**
    -   Um **formulário de contato com AJAX** que envia e-mails via backend PHP sem recarregar a página.
    -   Um **formulário modal do WhatsApp** que pré-preenche uma mensagem para agilizar a comunicação.
-   **Divisores de Seção em SVG:** Divisores SVG com formas personalizadas para transições visuais suaves entre as seções.
-   **Otimizado para SEO:** Inclui meta tags relevantes para descrição e palavras-chave para melhorar a visibilidade nos motores de busca.

---

## 🛠️ Construído Com

### Frontend
-   **HTML5:** Para marcação semântica e acessível.
-   **CSS3:** Para estilização moderna, com:
    -   Flexbox
    -   CSS Grid
    -   CSS Custom Properties (Variáveis)
    -   Transições & Animações
    -   Media Queries para responsividade
-   **JavaScript (ES6+):** Para interatividade e funcionalidades dinâmicas.

### Bibliotecas
-   [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/): Para animações acionadas pela rolagem.
-   [**Swiper.js**](https://swiperjs.com/): Para o carrossel de depoimentos.
-   [**Font Awesome**](https://fontawesome.com/): Para um rico conjunto de ícones.

### Backend
-   **PHP:** Usado para processar o formulário de contato principal (`enviar_email.php`) e enviar e-mails a partir do servidor.

---

## 🎨 Design & Estilo

O projeto segue uma estrutura baseada em componentes e um sistema de design claro definido no CSS.

-   **Paleta de Cores:** A paleta usa uma cor primária (`--primary-color: #7A2E3D`) para ações principais e títulos, complementada por tons mais claros e um fundo suave (`--background-color: #FCFBF9`) para criar uma atmosfera acolhedora.
-   **Tipografia:** Utiliza uma combinação de 'Playfair Display' para títulos elegantes e 'Poppins' para texto de corpo limpo e legível, ambos do Google Fonts.
-   **Layout:** O layout é construído principalmente com CSS Grid e Flexbox, garantindo um alinhamento robusto e flexível dos componentes em diferentes tamanhos de tela.
-   **Consistência:** As CSS Custom Properties (`:root`) são usadas extensivamente para manter a consistência em cores, fontes, espaçamento e `border-radius`, tornando o sistema de design escalável e fácil de atualizar.

---

## 🚀 Como Começar

Para obter uma cópia local e executá-la, siga estes passos simples.

### Pré-requisitos

Você precisa de um ambiente de servidor local que suporte PHP para executar a funcionalidade do formulário de contato.
-   **XAMPP**, **MAMP** ou qualquer outro servidor Apache/PHP.
-   Alternativamente, você pode usar a extensão **Live Server** no VS Code com uma extensão de PHP.

### Instalação

1.  **Clone o repositório:**
    ````bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ````

2.  **Navegue até o diretório do projeto:**
    ````bash
    cd seu-repositorio
    ````

3.  **Configure o projeto:**
    -   Coloque os arquivos do projeto no diretório raiz do seu servidor local (ex: `htdocs` no XAMPP).
    -   Abra o arquivo `index.html` no seu navegador através do servidor local (ex: `http://localhost/seu-repositorio/`).

4.  **Configure o Formulário de Contato (Importante):**
    -   Abra o arquivo `enviar_email.php`.
    -   Você **deve** atualizar o endereço de e-mail do destinatário para o seu.
    ````php
    <?php
    // ... (outro código)

    $para = "seu-email@dominio.com"; // <--- MUDE ISTO
    $assunto = "Nova Mensagem do Site - Karen Gomes";

    // ... (resto do arquivo)
    ?>
    ````

5.  **Configure o Número do WhatsApp:**
    -   Abra o arquivo `js/script.js`.
    -   Atualize a variável do número do WhatsApp com o seu.
    ````javascript
    const YOUR_WHATSAPP_NUMBER = "5515991345333"; // <--- MUDE ISTO
    ````

---

## 📂 Estrutura de Arquivos

O projeto é organizado com uma estrutura de arquivos clara e intuitiva.

````plaintext
/
├── assets/
│   ├── background.jpg
│   ├── hero.jpg
│   └── logo.png
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── index.html
├── enviar_email.php
└── README.md
