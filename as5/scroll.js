$(document).ready(function() {
    // Optionally add a scroll animation or other behaviors here
    // For example, smooth scrolling to different sections
    $('html, body').on('scroll', function() {
        console.log('Scrolling...');
    });

    // Example of handling video play/pause behavior when scrolling
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        // Check if video1 is in the viewport and add/remove 'sticky-top' class
        if (scrollTop > $('#video1').offset().top - $(window).height() / 2 && 
            scrollTop < $('#video1').offset().top + $('#video1').height()) {
            $('#video1').addClass('sticky-top'); // Add sticky-top when video enters viewport
            $('#video1 video')[0].play();  // Play video when it enters the viewport
        } else {
            $('#video1').removeClass('sticky-top'); // Remove sticky-top when video leaves viewport
            $('#video1 video')[0].pause(); // Pause video when it leaves the viewport
        }

        // Check if video2 is in the viewport and add/remove 'sticky-top' class
        if (scrollTop > $('#video2').offset().top - $(window).height() / 2 && 
            scrollTop < $('#video2').offset().top + $('#video2').height()) {
            $('#video2').addClass('sticky-top'); // Add sticky-top when video enters viewport
            $('#video2 video')[0].play();  // Play video when it enters the viewport
        } else {
            $('#video2').removeClass('sticky-top'); // Remove sticky-top when video leaves viewport
            $('#video2 video')[0].pause(); // Pause video when it leaves the viewport
        }
    });
});
