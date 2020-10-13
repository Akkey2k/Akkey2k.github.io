$(document).ready(function (){
    //Теоритическое API
    var countries = [
        {
            code: 1,
            name: 'Россия'
        },
        {
            code: 2,
            name: 'Австралия'
        },
        {
            code: 3,
            name: 'Белиз'
        },
        {
            code: 4,
            name: 'Индия'
        },
        {
            code: 5,
            name: 'Ирландия'
        },
        {
            code: 6,
            name: 'Канада'
        }
    ]

    for (var country of countries){
        $('.form__select').append('<option value='+country.code+'>'+country.name+'</option>')
    }
    $('.form__select').niceSelect();
});

