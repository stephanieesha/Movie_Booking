function price_functions(){
    quantity();
    
}

var count = 0;
function quantity(){
    var radio_but = document.getElementsByClassName('seat-number2');
    if(radio_but.checked){
    alert("no");
    }
    else{
        count++;
        var the_price = document.getElementById('price').innerText;
        var the_amount = Number(the_price);
        var total = the_amount * count;
        
    }
    
    var the_output = document.getElementById('total_price');
     the_output.innerText = total;

   
 
    format_();
     theater_();
     time_();
     //get seat number
     var seat = document.getElementsByClassName('seat_number2');
     if(seat.checked){
        alert("no");
        }
    else{
        alert('ys');
        seat.reduce(x=> {
            alert('yes');
            x.checked ;
            }),[0]
        var out = document.getElementById('total_seat');
        alert(out);
        out.innerText= x.nextElementSibling.innerText;
        
        
    }
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

function print_ticket(){
    var printContents = document.getElementById('print_area').innerHTML;    
    var originalContents = document.body.innerHTML;      
    document.body.innerHTML = printContents;     
    window.print();     
    document.body.innerHTML = originalContents;
}

 


