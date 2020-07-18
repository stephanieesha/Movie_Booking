function price_functions(){
    quantity();
    seat_();
}

var count = 0;
function quantity(){
    
    var radio_but = document.getElementsByClassName('seat-number2');
    radio_but.checked = true;

  if(radio_but.checked == true){
     
      count++;
      var the_price = document.getElementById('price').innerText;
      var the_amount = Number(the_price);
      var total = the_amount ;

      var the_output = document.getElementById('total_price');
     the_output.innerText = total;
    
  }

    format_();
     theater_();
     time_();

       //get seat number
    
    
}

function seat_(){
    var viewing_type = document.getElementById('seat_num').value;
    var the_output = document.getElementById('total_seat');
    the_output.innerText = viewing_type;
}


function format_(){
    //display viewing format
    var viewing_type = document.getElementById('viewing_type').value;
    var the_output = document.getElementById('total_format');
    the_output.innerText = viewing_type;
    //alert(viewing_type);

}

function theater_(){
    //display viewing theater
    var viewing_theater = document.getElementById('theater').value;
    var the_output = document.getElementById('total_theater');
    the_output.innerText = viewing_theater;
    //alert(viewing_theater);

   
}

function time_(){
       
     //display viewing time
     var viewing = document.getElementById('viewing-time')
     var display_ = viewing.value;
     var the_output = document.getElementById('total_time');
     the_output.innerText = display_;
     //alert(display_);
}
//print movie ticket
function print_ticket(){
    var printContents = document.getElementById('print_area').innerHTML;    
    var originalContents = document.body.innerHTML;      
    document.body.innerHTML = printContents;     
    window.print();     
    document.body.innerHTML = originalContents;
}

// card validation
function card_number(){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var input_txt = document.getElementById('_number');
        var cardno = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
    if(input_txt.value.match(cardno))  return true;
    else {
        alert("Not a valid card number!");
        return false;
        }
    }
    }

function card_year(){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var input_txt = document.getElementById('_year').value;
        var cardno = new Date().getFullYear();
        
    if(input_txt - cardno == 0 || input_txt - cardno  > 0 )   true;
    else {
        alert("Not a valid year!");
       
        }
    
            }  
       
    }

    
 function card_month(){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        input_txt = document.getElementById('_year').value;
        var input_month = document.getElementById('_month').value;

            if(input_txt == 2020 ){
               var month = new Date().getMonth();
               if(input_month >= month ) return true;
               else{
                alert("Not a valid month!");
                return false;
               }
            }
            else if(input_month < 0 || input_month < 12 && input_txt > 2020) return true;
            else if(input_month < 0 || input_month < 12 ) return true;
            else{
                alert("Not a valid month!");
            return false;
                }
            }
};


function card_pin(){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var input_txt = document.getElementById('_pin');
        var cardno = /^\d{3}/;
    if(input_txt.value.match(cardno))  return true;
    else {
        alert("Not a valid pin!");
        return false;
        }
    }
    }


