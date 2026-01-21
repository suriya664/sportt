/**
 * Unity Sports Club - Main JS
 * Theme Toggle & Global Logic
 */

$(document).ready(function () {
    // Theme Switcher Logic
    const themeToggleBtn = $('#theme-toggle');
    const body = $('body');
    const icon = themeToggleBtn.find('i');

    // Check Local Storage for Theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.attr('data-theme', currentTheme);
        updateIcon(currentTheme);
    }

    themeToggleBtn.on('click', function () {
        if (body.attr('data-theme') === 'dark') {
            body.attr('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            body.attr('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    }

    // RTL Switcher Logic
    const rtlToggleBtn = $('#rtl-toggle');

    // Check Local Storage for RTL
    const currentDir = localStorage.getItem('dir');
    if (currentDir === 'rtl') {
        $('html').attr('dir', 'rtl');
        $('html').attr('lang', 'ar');
        rtlToggleBtn.text('LTR');
        $('body').addClass('rtl');
    }

    rtlToggleBtn.on('click', function () {
        if ($('html').attr('dir') === 'rtl') {
            $('html').attr('dir', 'ltr');
            $('html').attr('lang', 'en');
            localStorage.setItem('dir', 'ltr');
            $(this).text('RTL');
            $('body').removeClass('rtl');
        } else {
            $('html').attr('dir', 'rtl');
            $('html').attr('lang', 'ar');
            localStorage.setItem('dir', 'rtl');
            $(this).text('LTR');
            $('body').addClass('rtl');
        }
    });

    // Scroll Effect for Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    // Initialize Tooltips (Bootstrap 5)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
