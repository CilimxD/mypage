function txt(x) {
    if (x == 0) {
        $("#hd1").text("Zasto sam poceo programirati");
        $("#desc1").text("Pozdrav moje ime je Dusan i imam 29 godina. Prvi kontak sa programiranjem " +
            "sam imao u srednjoj skoli i odmah me je privuklu i odmah sam se upitao kako " +
            "je neko uspeo da napravi nesto sto moze da izvrsi neku funkciju. Zbog malog slobodnog vremena " +
            "to sam neko vreme ostavio po strani ali se ponovo rodilo interesovanje koje je i tad bilo. " +
            "Pored toga ono sto me jos privlaci u programiranju je to sto je svaki projekat za sebe i nikad " +
            "ne moze da bude monoton posao. Kad sam shvatio ovo ubrzo sam upisao kurs na It Akademija koji sam " +
            "uspesno savladao neke osnove programiranja. Ubrzo sam nastavio sam da ucim i da uplacujem dodatne " +
            "kurseve online");
        $("#hd2").text("Tehnologije koje znam");
        $("#aboutme").text("O meni");
        $("#projects").text("Projekti");
        $("#contact").text("Kontakt");
        $("#button").text("EN");
        $("#foot").html("<p class='text-center'>" +
            "<br>Copyright &#169; Dusan Milic 2019 Sva prava zadržana." +
            "<br>Zabranjena je reprodukcija u celini i u delovima bez dozvole." +
            "</p>");
        $("#con").text("Mozete me kontaktirati na e-mail: milicdusan@hotmail.com");
        $("#pro1").text("Ovo je samo prezentacija sajta koriscenje samo HTML i JavaScrip kod");
        $("#pro2").text("Ovde se nalazi se nalazi izvorni kod stranice");
        $("#pro3").text("Ovde se nalazi se nalazi izvorni kod kopletne stranice radjene u Java tehnologiji i koriscenje MySql baza podataka gde je omoguceno i logovanje i rezervacija za odmor,proverite raspolozive datume i mozete dobiti popust");
        $("#pro4").text("Ovde je izgled rezervacije sa proverama");
        $("#pro5").text("Ovde mogu da se pogledaju sve rezervacije");
    }
    if (x == 1 || x == null || Number.isNaN(x) == true) {
        $("#hd1").text("Why I started programming");
        $("#desc1").text("Hi my name is Dusan and I am 29 years old. First contact with programming " +
            "I had one in high school and was immediately drawn to me and immediately wondered how " +
            "I put that aside for a while, but the interest that was still born was born again." +
            "Besides, what attracts me to programming is that every project is for itself and never is " +
            "it can't be a monotonous business. When I learned this, I soon enrolled in a course at It Academy " +
            "which I am successfully mastered some of the basics of programming.Soon I continued to study on my own and pay extra " +
            "courses online");
        $("#hd2").text("Technologies I know");
        $("#aboutme").text("About me");
        $("#projects").text("Projects");
        $("#contact").text("Contact");
        $("#button").text("SRB");
        $("#foot").html("<p class='text-center'>" +
            "<br>Copyright &#169; Dusan Milic 2019 All rights reserved." +
            "<br>Reproduction in whole and in part without permission is prohibited." +
            "</p>");
        $("#con").text("You can contact me on e-mail: milicdusan@hotmail.com");
        $("#pro1").text("This is just a presentation of the site using just HTML and JavaScrip code");
        $("#pro2").text("This is where the source code for the page is located");
        $("#pro3").text("Here you can find the source code for a web page created in Java technology and the use of MySql databases where you can log in and book a vacation, check for available dates and you cant have a discount");
        $("#pro4").text("Here is the layout of the booking with date checks");
        $("#pro5").text("All bookings can be viewed here");
    }
}
$(document).ready(function () {
    var link = window.location.href;
    var positions = link.lastIndexOf("=") + 1;
    var x = parseInt(link.substring(positions));
    txt(x);

    $("#button").click(function () {
        var x = parseInt($("#button").val());
        if (x == 0) {
            var y = 1;
            $("#button").attr("value", y);
            $("#aboutme").attr("href", "homepage.html?x=" + y);
            $("#contact").attr("href", "contact.html?x=" + y);
            txt(y);

        }
        if (x == 1 || x == null) {
            var y = 0;
            $("#button").attr("value", y);
            $("#aboutme").attr("href", "homepage.html?x=" + y);
            $("#contact").attr("href", "contact.html?x=" + y);
            txt(y);
        }


    });
});

