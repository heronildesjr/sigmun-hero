/*!
* Start Bootstrap - SIGMun Hero Package v0.0.1 (undefined)
* Copyright 2013-2022 Heronildes Junior
* Licensed under MIT (https://github.com/heronildesjr/sigmun-hero/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl), {boundary: document.body});

// margin top same as header height to avoid overlap on resize
jQuery(window).on('resize', function() {
    $('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');
});
$('.sm-hero__header-title').css('margin-top', jQuery('#main-navbar').outerHeight() + 3 + 'px');




