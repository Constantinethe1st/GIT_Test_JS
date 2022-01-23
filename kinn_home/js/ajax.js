$('#my_form').submit(function(){
    $.post(
        'post.php', // адрес обработчика
        $("#my_form").serialize(), // отправляемые данные

        function(msg) { // получен ответ сервера
            $('#my_form').hide('slow');
            $('#my_message').html(msg);
            let input = document.querySelector('input');
            console.log(input.value);
        }
    );
    return false;
});