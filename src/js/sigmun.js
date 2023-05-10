
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl), {boundary: document.body});

jQuery(window).on('resize', function() {
    $('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');
});
$('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');

