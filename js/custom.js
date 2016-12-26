
$(document).ready(function() {
    // var moveDistance = 100
var cnt=-1;

    $(document).on("click", ".circle", function() {
        // console.log(event)
        var clickedNumber = parseInt($(this).attr("circle-number"))
        
        if (clickedNumber <= 5) {
            findCircle(clickedNumber, 1)
        } else if (clickedNumber > 5 && clickedNumber <= 10) {
            findCircle(clickedNumber, 2)
        } else {
            return false
        }
    })

    function findCircle(clickedNumber, rodNo) {

        $('div[circle-number=' + clickedNumber + ']').animate({ 'margin-left': '100px' }, "fast",function(){
            $('div[circle-number=' + clickedNumber + ']').nextAll().css("margin-left","0px")
        });
       

        if (rodNo == 1) {
            updateClass(clickedNumber, 5)
        } else  {
            updateClass(clickedNumber, 10)
        }
    }

    function updateClass(from, to) {
        //console.log(to)
        if(to == 5){
            var alreadyMoved = $(".rod1").find(".movedCircle").length
            to = 5  - alreadyMoved
            console.log(to)
        } else {
            alreadyMoved = $(".rod2").find(".movedCircle").length
            to = 10  - alreadyMoved
          //  console.log(to)
        }
        for (var i = from; i <= to; i++) {
            $('div[circle-number=' + i + ']').removeClass('circle').addClass('movedCircle')
        cnt++;
        var x=20-cnt;
        //console.log(x);
    }

    $('div[circle-number=' + x + ']').animate({ 'margin-left': '100px' }, "slow");
$('div[circle-number=' + x + ']').nextAll().css("margin-left","0px")
    for(var j=x;j<=20;j++)
    {
        $('div[circle-number=' + j + ']').removeClass('circle').addClass('movedCircle') 
    }

    //cnt = -1

}



});