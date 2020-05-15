//Variables
var questionArray = 
    [
        "What is your favorite color?",
        "What is your favorite Season?",
        "What is your favorite plant?",
        "What is your favorite school subject?",
        "How do you say greet someone?",
        "What your goal in life?",
        "What is your favorite fruit?"
    ]
var buttonArrayZero = 
    [
        "Red", 
        "Fall", 
        "Coleus",
        "Math",
        "Hi",
        "Be Rich",
        "Apple"
    ];
var buttonArrayOne = 
    [
        "Yellow", 
        "Spring",
        "Sunflower",
        "English",
        "Hey",
        "To be Loved",
        "Banana"
    ];
var buttonArrayTwo = 
    [
        "Blue", 
        "Winter",
        "Bellflower",
        "Science",
        "Helloooo",
        "To be Famous",
        "Blueberry"
    ];
var colorClicked = [0, 0, 0]
var amountClicked = 0

//loaded page
    $(function (){

        $("h2").html( questionArray[ amountClicked ] );
        $(".answer:eq(0)").html(buttonArrayZero[amountClicked]);
        $(".answer:eq(1)").html(buttonArrayOne[amountClicked]);
        $(".answer:eq(2)").html(buttonArrayTwo[amountClicked]);
        
//button clicked
        $(".answer")
            .filter(function ( index ) {
                    $(this).click(function (){

//Execute each question one by one
                        if( amountClicked < questionArray.length - 1 ){
                            colorClicked[index] ++;
                            console.log(colorClicked);
                            amountClicked ++;
                            $("h2").html(questionArray[amountClicked]);
                            $(".answer:eq(0)").html(buttonArrayZero[amountClicked]);
                            $(".answer:eq(1)").html(buttonArrayOne[amountClicked]);
                            $(".answer:eq(2)").html(buttonArrayTwo[amountClicked]);
                        }

//Execute when all questions been answered
                        else{
                            $("h2").html(Math.max.apply(Math, colorClicked));
                            for(i = 0; i < colorClicked.length; i++){
                                if(Math.max(...colorClicked) == colorClicked[i]){
                                    if(i == 0){
                                        console.log("speed");
                                        $("h2").html( "Speed Demon 4 U" );
                                        $(".answer").html( "Speed Demon" );
                                        $(".answer").parent().slice(0,3).attr("href", "speeddemon.html");

                                    }
                                    else if(i == 1){
                                        $("h2").html( "Sunshine is the one for you" );
                                        $(".answer").html( "Sunshine" );
                                        $(".answer").parent().slice(0,3).attr("href", "sunshine.html");
                                    }
                                    else{
                                        $("h2").html( "Icy is for yooooou" );
                                        $(".answer").html( "Icy Icicles" );
                                        $(".answer").parent().slice(0,3).attr("href", "icy.html");
                                    }   
                                }
                            }
                        }
                    })
                
                    
            })

    })

