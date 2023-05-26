
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl), {boundary: document.body});

// jQuery(window).on('resize', function() {
//     $('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');
// });
// $('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');


// prefixo objeto sigmun
const sigmun = {
    // funcoes
    functions: {
        // alerts
        showAlert: (message, type, container, timeout) => {
            /* types disponiveis: primary, secondary, success, danger, warning, info, light, dark */
            if (!container) {
                container = '#alert-container'
            }

            if (!type) {
                type = 'primary'
            }

            if (!timeout) {
                timeout = 0
            }

            const containerWrapper = document.querySelector(container);

            const wrapper = document.createElement('div');
            wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible fade show fade-in" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
            ].join('');

            containerWrapper.append(wrapper);

            if (timeout > 0) {
                setTimeout(() => {
                    wrapper.classList.add('fade-out');
                    setTimeout(() => wrapper.remove(), 200);
                }, timeout);
            }
        },
        toggleAside: (asideElement) => {

            var asideShowElements;

            if (!asideElement) {
                asideElement = document.querySelector('aside.expansible');
                asideShowElements = document.querySelectorAll('aside.expansible .show');
            } else {
                asideElement = document.querySelector(asideElement);
                asideShowElements = document.querySelectorAll(asideElement + ' .show');
            }

            asideElement.classList.toggle('expanded');
        }
    }

};


// aside expansível (expansible)
// Obtém a referência para o elemento <aside>
var asideElement = document.querySelector('aside.expansible');

// Adiciona um ouvinte de evento para o evento "mouseover"
if (asideElement) {
    asideElement.addEventListener('mouseover', function() {
    // Adiciona a classe "expanded" ao <aside> ao passar o mouse sobre ele
    asideElement.classList.add('expanded');
    });

    // Adiciona um ouvinte de evento para o evento "mouseout"
    asideElement.addEventListener('mouseout', function() {
    // Remove a classe "expanded" do <aside> ao remover o mouse dele
    asideElement.classList.remove('expanded');
    });
}
// declare sigmun as global variable
window.sigmun = sigmun;
// export as module
export default sigmun;
