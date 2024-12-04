let points = 0;

$("#ending1").hide();
$("#ending2").hide();
$("#ending3").hide();
$("#ending4").hide();

$("#kaiOpt").on("click", question2);
$("#jayOpt").on("click", question2);
$("#coleOpt").on("click", question2);
$("#zaneOpt").on("click", question2);


$("#kaiOpt").on("click", addpoint);
$("#jayOpt").on("click", addTwoPoints);
$("#coleOpt").on("click", addThreePoints);
$("#zaneOpt").on("click", addFourPoints);

function addpoint(){
    points++;
    console.log(points);
}
function addTwoPoints(){
    points+=2;
    console.log(points);
}
function addThreePoints(){
    points+=3;
    console.log(points); 
}
function addFourPoints(){
    points+=4;
    console.log(points);
}

let headingInfo = $("#heading").text();
console.log(headingInfo);

$("#question2").hide();

 $("#kaiOpt").on("click", question2);
 $("#jayOpt").on("click", question2);
 $("#coleOpt").on("click", question2);
 $("#zaneOpt").on("click", question2);


function question2() {
    $("#heading").text("Question 2: What would you eat here?");
    $("#kaiOpt").on("click", question3);
    $("#jayOpt").on("click", question3);
    $("#coleOpt").on("click", question3);
    $("#zaneOpt").on("click", question3);
    $("#Kai").attr("src", "a-vibrant-and-mouthwatering-image-of-suya-a-belove-6gs0CNiDRYqiQ2ZmasDMcQ-uaX-D6nHQXmNun1HElcn5w.jpeg");
    $("#Jay").attr("src", "classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg");
    $("#Cole").attr("src", "chocolate-cake-index-64b83bce2df26.jpg.avif");
    $("#Zane").attr("src", "Buttermilk-Pancakes-FT-RECIPE1222-5589088e52c94e6f8a610b4393196fbb.jpg");
}

function question3() {
    $("#heading").text("Question 3: What job would you pick?");
    $("#kaiOpt").on("click", question4);
    $("#jayOpt").on("click", question4);
    $("#coleOpt").on("click", question4);
    $("#zaneOpt").on("click", question4);
    $("#Kai").attr("src", "R (1).jpg");
    $("#Jay").attr("src", "bncci0sp1k4j8fthe4sz.avif");
    $("#Cole").attr("src", "photo-1550090598-bbd1e1da5ba2.jpg");
    $("#Zane").attr("src", "hibachi-restaurant-chef-preparing-meal-entertaining-guests-asian-japanese-cook-makes-have-fun-watching-his-antics-moves-116227859.webp");
 }

function question4() {
    $("#heading").text("Question 4: What is your favorite color of these options?");
    $("#kaiOpt").on("click", question5);
    $("#jayOpt").on("click", question5);
    $("#coleOpt").on("click", question5);
    $("#zaneOpt").on("click", question5);
    $("#Kai").attr("src", "solid-red-background-14148727243CA.jpg");
    $("#Jay").attr("src", "blue.jpg");
    $("#Cole").attr("src", "OIP.jpg");
    $("#Zane").attr("src", "R.jpg");
}

function question5() {
    $("#heading").text("Question 5: What is your favorite season?");
    $("#kaiOpt").on("click", question6);
    $("#jayOpt").on("click", question6);
    $("#coleOpt").on("click", question6);
    $("#zaneOpt").on("click", question6);
    $("#Kai").attr("src", "summerbeach-5b4650c946e0fb005bfb3207.jpg");
    $("#Jay").attr("src", "daffodils-in-spring_full_width.jpg");
    $("#Cole").attr("src", "wp7535834.jpg");
    $("#Zane").attr("src", "image.webp");
}

function question6() {
    $("#heading").text("Question 6: What types of movies do you like to watch?");
    $("#kaiOpt").on("click", question7);
    $("#jayOpt").on("click", question7);
    $("#coleOpt").on("click", question7);
    $("#zaneOpt").on("click", question7);
    $("#Kai").attr("src", "8nijr0tnaawa1.jpg");
    $("#Jay").attr("src", "p_avengersinfinitywar_19871_cb171514.jpeg");
    $("#Cole").attr("src", "s-l1200.jpg");
    $("#Zane").attr("src", "71qu4p5bnDL._AC_UF894,1000_QL80_.jpg");
}

function question7() {
    $("#heading").text("Question 7: Which weapon would you pick?");
    $("#kaiOpt").on("click", question8);
    $("#jayOpt").on("click", question8);
    $("#coleOpt").on("click", question8);
    $("#zaneOpt").on("click", question8);
    $("#Kai").attr("src", "Sword_of_Fire.webp");
    $("#Jay").attr("src", "Nunchucks_of_lightning.webp");
    $("#Cole").attr("src", "Scythe_of_quakes.webp");
    $("#Zane").attr("src", "Shurikens_of_ice.webp");
}

function question8() {
    $("#heading").text("Question 8: What elemental power would you pick?");
    $("#kaiOpt").on("click", question9);
    $("#jayOpt").on("click", question9);
    $("#coleOpt").on("click", question9);
    $("#zaneOpt").on("click", question9);
    $("#Kai").attr("src", "fire-900.jpg");
    $("#Jay").attr("src", "hero-image.webp");
    $("#Cole").attr("src", "Blog-Thumbnails.png");
    $("#Zane").attr("src", "360_F_242342389_NBmK5GZY8PKVSW2ohxEPchaMqCVQIXUW.jpg");
}

function question9() {
    $("#heading").text("Question 9: What music do you like to listen to?");
    $("#kaiOpt").on("click", question10);
    $("#jayOpt").on("click", question10);
    $("#coleOpt").on("click", question10);
    $("#zaneOpt").on("click", question10);
    $("#Kai").attr("src", "download.jpg");
    $("#Jay").attr("src", "pop.jpg");
    $("#Cole").attr("src", "jazz.jpg");
    $("#Zane").attr("src", "DaftPunk.jpg");
}

function question10() {
    $("#heading").text("Question 10: Do you wanna jump up kick back, whip around and spin?");
    $("#kaiOpt").on("click", finalScene);
    $("#jayOpt").on("click", finalScene);
    $("#coleOpt").on("click", finalScene);
    $("#zaneOpt").on("click", finalScene);
    $("#Kai").attr("src", "stellavie-silkscreen-print-custom-typography-yes.webp");
    $("#Jay").attr("src", "stellavie-silkscreen-print-custom-typography-yes.webp");
    $("#Cole").attr("src", "stellavie-silkscreen-print-custom-typography-yes.webp");
    $("#Zane").attr("src", "stellavie-silkscreen-print-custom-typography-yes.webp");
}

function finalScene() {
    
    if (points >= 0 && points <=10) {
        $("#ending1").show();
        $("#kaiOpt").hide();
        $("#jayOpt").hide();
        $("#coleOpt").hide();
        $("#zaneOpt").hide();
        $("img").hide();
        $("p").hide();
        $("div").hide();
    }
    
    if (points >=11 && points <=20){
        $("#ending2").show();
        $("#kaiOpt").hide();
        $("#jayOpt").hide();
        $("#coleOpt").hide();
        $("#zaneOpt").hide();
        $("img").hide();
        $("p").hide();
        $("div").hide();
    }
    
    if (points >=21 && points <=30){
        $("#ending3").show();
        $("#kaiOpt").hide();
        $("#jayOpt").hide();
        $("#coleOpt").hide();
        $("#zaneOpt").hide();
        $("img").hide();
        $("p").hide();
        $("div").hide();
    } 
    
    if (points >=31 && points <=40){
        $("#ending4").show();
        $("#kaiOpt").hide();
        $("#jayOpt").hide();
        $("#coleOpt").hide();
        $("#zaneOpt").hide();
        $("img").hide();
        $("p").hide();
        $("div").hide();
    }
    
}

