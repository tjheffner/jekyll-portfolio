$(document).ready(function() {
    "use strict";

  $('form#input').submit(function(event) {

//clears the type each time button is pressed so you can check again without refreshing page
    $('#type').empty();

    var a = parseInt($('input#side1').val());
    var b = parseInt($('input#side2').val());
    var c = parseInt($('input#side3').val());

    var sorted = [a, b, c].sort(function(x,y) {
      return y-x;
    });
    a = sorted[0];
    b = sorted[1];
    c = sorted[2];

    var triangle = {side1: a,
                    side2: b,
                    side3: c,

                    height: function(){
                        var s = ((this.side1 + this.side2 + this.side3)/2);
                        var A = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));

                        var h = parseFloat(((2 * A) / this.side1));
                        return h;

                    },
                    short: function(){
                        var s2s = Math.pow(this.side2, 2);
                        var h2 =  Math.pow(this.height(), 2);
                        var z = parseInt(Math.sqrt(s2s - h2));
                        return z;
                    },
                    type: function(){

                        if (sorted[0] <= (sorted[1] + sorted[2])){

                          if (this.side1 === this.side2 && this.side2 === this.side3 && this.side3 === this.side1){
                            return "equilateral";

                          } if (this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1 ){
                              return "isosceles";

                          } if ((this.side1 !== this.side2) && (this.side2 !== this.side3)) {
                              return "scalene";

                        }} else {
                          return "impossible";

                        }
                    }
                };

       $('#type').text(triangle.type());

       $('#' + triangle.type() ).append("<li>" + a + ", " + b + ", " + c + "</li>");


       var x1 = (100 + a);
       var x2 = (100 + triangle.short());
       var y2 = (100 + triangle.height());

        if ($('#type').text() !== "impossible") {
            $('#picture').show();
                                        //point1    //point2     //point3
            $('polygon').attr("points", '100,100 ' + x1 + ",100 " + x2 + "," + y2);
        } else {
            $('#picture').hide();
        }

  $('#result').show()
  event.preventDefault();

  });

});
