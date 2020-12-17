function calculate () {

    var amount = $('#amount').val();
    var percentage = $('#percentage').val();
    var vat = amount * (percentage / 100);
    var total = Number(amount) + vat;

    $('#vat').val( vat.toFixed(2))
    $('#total').val( total.toFixed(2));

    return false
}

$('#form__calc').submit( calculate );

console.log(amount)
console.log(percentage)
console.log(vat)
console.log(total)