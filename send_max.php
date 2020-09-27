<?php
// Файлы phpmailer
require './assets/libs/phpmailer/PHPMailer.php';
require './assets/libs/phpmailer/SMTP.php';
require './assets/libs/phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'info@digital-frog.ru'; // Логин на почте
    $mail->Password   = 'ms1mXdn9'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@digital-frog.ru', 'Команда DIGITAL FROG'); // Адрес самой почты и имя отправителя
    $mail->addAddress('info@digital-frog.ru'); // Ещё один, если нужен
        $mail->isHTML(true);

        $mail->Subject = 'Заявка на рассмотрение проекта';
        $mail->Body    = "
        <b>Телефон:</b> $phone<br><br>
        <b>Имя:</b> $name<br><br>
        <b>Почта:</b> $email<br><br>
        <b>Заявка на обсуждение проекта";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}