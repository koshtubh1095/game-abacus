// $(document).ready(function() {
//     var num1, num2, sum;
//     $('.circles').click(function() {
//         $('.circles').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles12').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles12').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles2').click(function() {
//         $('.circles2').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles2').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles14').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles14').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles3').click(function() {
//         $('.circles3').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles3').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles16').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles16').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles4').click(function() {
//         $('.circles4').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles4').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles18').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles18').animate({ 'margin-right': '-97px' }, "slow");

//     });
//     $('.circles5').click(function() {
//         $('.circles5').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles20').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");

//     });

//     $('.circles6').click(function() {
//         $('.circles6').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles6').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles11').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles11').animate({ 'margin-right': '-97px' }, "slow");

//     });
//     $('.circles7').click(function() {
//         $('.circles7').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles7').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles13').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles13').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles8').click(function() {
//         $('.circles8').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles8').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles15').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles15').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles9').click(function() {
//         $('.circles9').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles9').animate({ 'margin-right': '-97px' }, "slow");
//         $('.circles17').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles17').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $('.circles10').click(function() {
//         $('.circles10').animate({ 'margin-left': '100px' }, "slow");
//         $('.circles19').stop(true, true).delay(2000).animate({ 'margin-left': '100px', opacity: 0.5 }, "slow");
//         $('.circles19').animate({ 'margin-right': '-97px' }, "slow");
//     });
//     $(".firstgroup").click(function() {
//         $('#counter').html(function(i, val) {
//             var x = +val + 1
//             num1 = x;
//             return x
//         });
//     });

//     $(".secondgroup").click(function() {
//         $('#counter1').html(function(j, val) {
//             var y = +val + 1
//             num2 = y;
//             return y
//         });
//         sum = parseInt(num1) + parseInt(num2);
//         $('#total').html(function() {
//             var z = sum
//             return z
//         });
//         var arlene1 = new Array(10);
//         for (var q = 0; q < arlene1.legth; q++) {}
//     });
// });

$(document).ready(function() {
    // var moveDistance = 100

    $(document).on("click", ".circle", function() {
        // console.log(event)
        var clickedNumber = parseInt($(this).attr("circle-number"))

        if (clickedNumber <= 5) {
            findCircle(clickedNumber, 1)
        } else if (clickedNumber > 5 && clickedNumber <= 10) {
            findCircle(clickedNumber, 2)
        } else {
            return false;
        }
    })

    function findCircle(clickedNumber, rodNo) {
        $('div[circle-number=' + clickedNumber + ']').animate({ 'margin-left': '100px' }, "slow");
        if (rodNo == 1) {
            updateClass(clickedNumber, 5)
        } else {
            updateClass(clickedNumber, 10)
        }
    }

    function updateClass(from, to) {
        for (var i = from; i <= to; i++) {
            $('div[circle-number=' + i + ']').removeClass('circle').addClass('movedCircle')
        }
    }
});
