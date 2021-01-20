$(document).ready(function() {
    AOS.init( {
    }); 
  });
  
  
var btn = $('#topBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

var m=0,r=0,a=0;
var flag=true;


function mudou(){
    flag=true;
    /* if ($("#r").val() != ""){
      r=parseInt($("#r").val());
    }else {
      r=0;
    } */
    r=$("#r").val() != "" ? parseInt($("#r").val()) : 0;
    a=$("#a").val() != "" ? parseInt($("#a").val()) : 1;

    var c=$("#c").val()
    m=(parseInt($("#c").val())+(12*r))* Math.pow((1+($("#j").val()/100)),(parseFloat($("#p").val())*a));
    console.log(parseFloat($("#p").val()))
    $("#m").val(m.toFixed(2)+"€");

}
function mudoum(){
    flag=false;
    r=$("#r").val() != "" ? parseInt($("#r").val()) : 0;
    a=$("#a").val() != "" ? parseInt($("#a").val()) : 1;
   

    m=(parseInt($("#m").val())+(12*r))/( Math.pow((1+($("#j").val()/100)),(parseFloat($("#p").val())*a)));
    $("#c").val(m.toFixed(2)+"€");
    

}
function jp(){
    if(flag){
        mudou();

    }else{
        mudoum();

    }
}
var doc = new jsPDF()
$( "#downloadBtn" ).click(function() {
    doc.text("Os valores de retorno são: \n montante " + $("#m").val() + "\n capital " + $("#c").val() + "\n juros " + $("#j").val() + "\n periodo " + $("#p option:selected").text() + "\n reforço " +$("#r").val(), 10, 10)
    doc.save('dados.pdf')
});