(function() {
    // Event Listener 
    document.querySelector("button").addEventListener("click", function(){
        // Defining array of colors
        const colors = ["red", "blue", "green", "yellow", "purple", "gray", "black"];
        // Generating random number for index
        let randomIndex = Math.floor(Math.random() * colors.length);
        // Changing background
        document.body.style.background = colors[randomIndex];
    })
}) ();