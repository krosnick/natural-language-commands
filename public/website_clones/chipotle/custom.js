setTimeout(function(){  
    console.log("within custom.js");
    
    // After page is loaded, remove food item overlays so that we can inspect them on right-click
    document.querySelectorAll(".card-selection-overlay, .card-overlay.hover-overlay").forEach(function(item){item.remove()});    
}, 0);