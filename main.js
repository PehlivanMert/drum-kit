
document.addEventListener(`keypress`, function(e) {
    let keypressed = e.key.toLowerCase();
    let sesElementi;
    switch(keypressed) {
        
            case "a":
            sesElementi = new Audio("sound/boom.wav");
            console.log("A tuşuna basıldı");
            document.getElementById("a").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("a").classList.remove("pressed");
            }, 100);
            break;
       
            case "s":
            sesElementi = new Audio("sound/clap.wav");
            console.log("S tuşuna basıldı");
             document.getElementById("s").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("s").classList.remove("pressed");
            }, 100);
            break;
       
            case "d":
            sesElementi = new Audio("sound/hihat.wav");
            console.log("D tuşuna basıldı");
             document.getElementById("d").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("d").classList.remove("pressed");
            }, 100);
            break;
          
            case "f":
            sesElementi = new Audio("sound/kick.wav");
            console.log("F tuşuna basıldı");
             document.getElementById("f").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("f").classList.remove("pressed");
            }, 100);
            break;
           
            case "g":
            sesElementi = new Audio("sound/openhat.wav");
            console.log("G tuşuna basıldı");
             document.getElementById("g").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("g").classList.remove("pressed");
            }, 100);
            break;
            
            case "h":
            sesElementi = new Audio("sound/ride.wav");
            console.log("H tuşuna basıldı");
             document.getElementById("h").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("h").classList.remove("pressed");
            }, 100);
            break;
            
            case "j":
            sesElementi = new Audio("sound/snare.wav");
            console.log("J tuşuna basıldı");
             document.getElementById("j").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("j").classList.remove("pressed");
            }, 100);
            break;
           
            case "k":
            sesElementi = new Audio("sound/tink.wav");
            console.log("K tuşuna basıldı");
             document.getElementById("k").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("k").classList.remove("pressed");
            }, 100);
            break;
           
            case "l":
           sesElementi = new Audio("sound/tom.wav");
            console.log("L tuşuna basıldı");
             document.getElementById("l").classList.add("pressed");
            setTimeout(function() {
                document.getElementById("l").classList.remove("pressed");
            }, 100);
            break;
    }

    sesElementi.play();

});