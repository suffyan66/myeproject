document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".navbar1").classList.toggle("active");
});
 let marquee = document.getElementById("scrolling");

    marquee.addEventListener("mouseover", function() {
        marquee.stop(); // Stop marquee on hover
    });

    marquee.addEventListener("mouseout", function() {
        marquee.start(); // Start marquee when mouse leaves
    });
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
        // Remove all font style classes
        $('.carousel-item').removeClass('font-style-1 font-style-2 font-style-3');
    
        // Add the appropriate class to the active carousel item
        var activeItem = $(e.relatedTarget);
        
        // Check which slide is active and add the corresponding font style class
        if (activeItem.index() === 0) {
            $('.carousel-item').eq(0).addClass('font-style-1');
        } else if (activeItem.index() === 1) {
            $('.carousel-item').eq(1).addClass('font-style-2');
        } else if (activeItem.index() === 2) {
            $('.carousel-item').eq(2).addClass('font-style-3');
        }
    });
      // 3. Auto-Sliding Health Tips
      let tipsArray = [
        "Fresh juices detoxify your body!",
        "Carrot juice improves eyesight.",
        "Lemon & ginger boost immunity.",
        "Green smoothies keep skin glowing.",
        "Watermelon juice keeps you hydrated.",
        "Pomegranate juice is good for heart health!"
    ];
    let tipIndex = 0;

    function showNextTip() {
        document.getElementById("tips").innerHTML = tipsArray[tipIndex];
        tipIndex = (tipIndex + 1) % tipsArray.length;
    }
    setInterval(showNextTip, 5000); // Change tips every 5 seconds
// 1. Logo Click Pe Page Reload
document.getElementById("logo").addEventListener("click", function() {
    location.reload();
});
