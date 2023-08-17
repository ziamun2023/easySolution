$(document).ready(function() {
    $(".navbar a").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of anchor links

        var targetSection = $(this).attr("href"); // Get the target section ID
        var targetPosition = $(targetSection).offset().top; // Get the position of the target section
        console.log(targetPosition)

        $("html, body").animate({ scrollTop: targetPosition }, 1500); // Smooth scroll to the target
    });
});
