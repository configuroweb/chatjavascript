

$(function(){

    const socket = io();

    // obtaining DOM interface

    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');


    // obtaining DOM nicknameForm

    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');

    const $users = $('#usernames');


    $nickForm.submit(e => {

        e.preventDefault();
        socket.emit('new user', $nickname.val(), data =>{
            if (data) {

                $('#nickWrap').hide();
                $('#contentWrap').show();
            } else {
                $nickError.html(`
                
                <div class="alert alert-danger"> El usuario actualmente existe </div>`
                
                );
                
            }

            $nickname.val('');


        });
    })

    // events

    $messageForm.submit( e => {

        e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function(data) {

       $chat.append(data + '<br/>');

    });

    socket.on('usernames', data =>{

        let html='';
        for (let i = 0; i < data.length; i++) {
            html += `<p><i class="fas fa-user"></i>${data[i]}</p>`
        }

        $users.html(html);

    });




})