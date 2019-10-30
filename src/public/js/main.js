

$(function(){

    const socket = io();

    // obtaining DOM

    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // events

    $messageForm.submit( e => {

        e.preventDefault();
        console.log($messageBox.val());
    });


})