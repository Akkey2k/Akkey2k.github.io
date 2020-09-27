$(document).ready(function (){
    $('#form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Ваша заявка оправлена!')
                    $('#form').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });

        $.ajax({
            url: 'send_max.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('#form').trigger('reset'); // очистка формы
                } else {
                }
            }
        });

        $.ajax({
            url: 'telegram.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('#form').trigger('reset'); // очистка формы
                } else {
                }
            }
        });
    });
});
