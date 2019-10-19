$(() => {
    var socket = io()
    $('.btn').click((e) => {
        e.preventDefault()

        socket.emit('chat message', $('#m').val(), $('#usernameGenerator').val())

        $('#m').val('')
        return false
    })
    
    socket.on('counter', (count) => {
        $('#counter').text(count + " number of online user/s")
    })
    socket.on('chat message', function (msg, user) {
        var text = ""

        
            if (user == $('#usernameGenerator').val()) {
                if ($('#chatbox li:last-child').find('#name').text() == "You") {
                    $('#chatbox li:last-child').find('p').append("<br>" + msg + "<br>")
                } else {
                text = "<li class='d-flex justify-content-between mb-4 pb-3'>" +
                    "<img src='/assets/unknown.jpg' alt='avatar' class='avatar rounded-circle d-flex align-self-center mr-2 z-depth-1' id='userImg'>" +
                    "<div class='chat-body white p-3 ml-2 z-depth-1'>" +
                    "<div class='header'>" +
                    "<strong class='primary-font' id='name'>You</strong>" +
                    "<small class='pull-right text-muted'><i class='far fa-clock'></i> 12 mins ago</small>" +
                    "</div>" +
                    "<hr class='w-100'>" +
                    "<p class='mb-0'>" + msg + "</p>" +
                    "</div>" +
                    "</li>" 
                }
            }else{
                 if($('#chatbox  li').length >1 && $('#chatbox li:last-child').find('#name').text() != "You"){
                    $('#chatbox li:last-child').find('p').append("<br>" + msg + "<br>")
                   
                }else{

                
                text = "<li class='d-flex justify-content-between mb-4'>" +
                    "<div class='chat-body white p-3 z-depth-1'>" +
                    "<div class='header'>" +
                    "<strong class='primary-font' id='name'>" + user + "</strong>" +
                    "<small class='pull-right text-muted'><i class='far fa-clock'></i> 13 mins ago</small>" +
                    "</div>" +
                    "<hr class='w-100'>" +
                    "<p class='mb-0'>" + msg + "</p>" +
                    "</div>" +
                    "<img src='/assets/unknown.jpg' alt='avatar' class='avatar rounded-circle d-flex align-self-center mr-2 z-depth-1' id='userImg'>" +
                    "</li>"
            }
        }
        
        $('#chatbox').append(text);
    })

})