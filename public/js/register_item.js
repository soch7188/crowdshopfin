$(document).ready(function () {

    $('#add-btn').click(function () {

        $.ajax(URL + "/api/v1/cart/add_to_cart", {
            method: 'POST',
            data: {
                mall: $("#mall").val(),
                product: $("#product").val(),
                option: $("#option").val(),
                quantity: $("#quantity").val(),
                price: $("#price").val(),
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success:function(res){
                console.log('ajax call success');
                $('#cart-table').append('<tr><td scope="row"><label type="text" for="cart_id">' +  res.cart_id + '</label></td>' +
                    '<td><label type="text" for="mall">' + res.mall + '</label></td>' +
                    '<td><label type="text" for="product">' + res.product + '</label></td>' +
                    '<td><label type="text" for="option">' + res.option + '</label></td>' +
                    '<td><label type="text" for="quantity">' + res.quantity + '</label></td>' +
                    '<td><label type="text" for="price">' + res.price + '</label></td>' +
                    "<td><button class='removeConditionBtn' name='removeConditionBtn' class='btn btn-default' style='border: none; background-color: transparent; box-shadow: none; outline: none;'>x</button></td>" +
                    '</tr>')
                alert("성공적으로 등록되었습니다.")
                window.location.href = '/home'
            },
            error: function(e){
                console.log('ajax call error');
                console.log('status: ' + e.status + ', message: ' + e.message);
                alert("Error updating cart: contact (zwkim@connect.ust.hk) or Kakaotalk(ustz).");
            }
        });
        // rest the order form for next input
        document.getElementById("order-form").reset();
    });


    $("#cart-submit-btn").bind('click', function () {
        cartSubmitReq();
    })
})


function registerItem(){
    alert("성공적으로 등록되었습니다.")

    window.location.href = '/buy_item'

    //
    // $.ajax(URL + "/api/v1/cart/add_to_cart", {
    //     method: 'POST',
    //     data: {
    //         mall: $("#mall").val(),
    //         product: $("#product").val(),
    //         option: $("#option").val(),
    //         quantity: $("#quantity").val(),
    //         price: $("#price").val(),
    //     },
    //     crossDomain: true,
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     success:function(res){
    //         console.log('ajax call success');
    //         alert("성공적으로 등록되었습니다.")
    //         window.location.href = '/home'
    //     },
    //     error: function(e){
    //         console.log('ajax call error');
    //         console.log('status: ' + e.status + ', message: ' + e.message);
    //         alert("Error updating cart: contact (zwkim@connect.ust.hk) or Kakaotalk(ustz).");
    //     }
    // });

}