function cambioVideo(id){
    switch (id) {
        case "bbM" :

        document.getElementById("bb").style.display ="block";
        document.getElementById("wind").style.display ="none";
        document.getElementById("nati").style.display ="none";
            break;

        case "WindM" :

            document.getElementById("bb").style.display ="none";
            document.getElementById("wind").style.display ="block";
            document.getElementById("nati").style.display ="none";
                    break;

         case "natiM" :

                document.getElementById("bb").style.display ="none";
                document.getElementById("wind").style.display ="none";
                document.getElementById("nati").style.display ="block";
                break;
    
        default:
            break;
    }
}