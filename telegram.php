<?php

/* https://api.telegram.org/bot1304474631:AAHDr2hshCFi_zYpkf_gqCSB8LsuoFYXjWE/getUpdates,
где, 1304474631:AAHDr2hshCFi_zYpkf_gqCSB8LsuoFYXjWE - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "1304474631:AAHDr2hshCFi_zYpkf_gqCSB8LsuoFYXjWE";
$chat_id = "-419955866";
$arr = array(
  'Имя заказчика: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {

} else {
  echo "Error";
}
?>