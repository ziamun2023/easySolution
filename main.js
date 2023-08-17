$(document).ready(function() {
    $(".navbar a").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of anchor links

        var targetSection = $(this).attr("href"); // Get the target section ID
        var targetPosition = $(targetSection).offset().top; // Get the position of the target section
        console.log(targetPosition)

        $("html, body").animate({ scrollTop: targetPosition }, 1500); // Smooth scroll to the target
    });

    $('.downArrow').click(function(){
       var targetsection= $(this).data("target")
       console.log(targetsection)
       var targetposition=$(targetsection).offset().top
       $('html,body').animate({scrollTop :targetposition},800)
    })
});
