let socket = io('//localhost:3000');

$('#message').keypress(function (e) {
  if(e.which === 13){
    let val = $('#message').val();

    socket.emit('message', {
      message: val
    });
    $('#message').val("");
    return false
  }
});

socket.on('message', function (data) {
  let templete =  ' <div class="message col-xs-12"> ' +
                  '   <div class="col-xs-6 col-md-1 avatar"> ' +
                  '     <h2>L</h2> ' +
                  '   </div> ' +
                  '   <p class="col-xs-6 col-md-11 text">'+ data.message + '</p> '+
                  ' </div>'
  $('.conversation').append(templete);
});

