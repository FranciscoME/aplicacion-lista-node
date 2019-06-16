var socket = io();

var searchParams = new URLSearchParams(window.location.search);


if(!searchParams.has('escritorio')){
    window.location= 'index.html';
    throw new Error('El escritorio es necesario fe');
    
}

var escritorio= searchParams.get('escritorio');
var label = $('small')
console.log(escritorio);
$('h1').text('En escritorio: '+escritorio);


$('button').on('click',function(){
    socket.emit('atenderTicket',{escritorio:escritorio},function(resp){
        console.log(resp);

        if(resp ==='No hay tickets'){
            $('small').text(resp);
            alert(resp);
            return;
        }

       $('small').text('Ticket: '+resp.numero);
    })
})