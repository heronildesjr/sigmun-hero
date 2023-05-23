
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

        // adiuadwhuiawdhuiawdhuis

    }

};


