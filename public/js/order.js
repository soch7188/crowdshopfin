function getCartItems (){
	$.ajax(URL + "/api/v1/cart/get_cart_items", {
		method: 'GET',
		data: null,
		crossDomain: true,
		redirect: 'follow',
		xhrFields: {
			withCredentials: true
		},
		success:function(res){
			console.log('ajax call error');
			console.log("cart talbe loading success");
			for (let i = 0; i < res.length; i++) {

				$('#cart-table').append('<tr><td scope="row"><label type="text" for="cart_id">' +  res[i].cart_id + '</label></td>' +
					'<td><label type="text" for="mall">' + res[i].mall + '</label></td>' +
					'<td><label type="text" for="product">' + res[i].product + '</label></td>' +
					'<td><label type="text" for="option">' + res[i].option + '</label></td>' +
					'<td><label type="text" for="quantity">' + res[i].quantity + '</label></td>' +
					'<td><label type="text" for="price">' + res[i].price + '</label></td>' +
					"<td><button class='removeConditionBtn' name='removeConditionBtn' class='btn btn-default' style='border: none; background-color: transparent; box-shadow: none; outline: none;'>x</button></td>" +
					'</tr>')
			}
		},
		error: function(e){
			console.log('ajax call error');
			console.log('status: ' + e.status + ', message: ' + e.message);
			// alert("Error loading cart table");
		}
	});
}

function cartSubmitReq() {
	window.location.href = '/order/confirm'
}

$(document).ready(function () {

	// Check if user is logged in. Only logged in users can access this page.
	$.ajax(URL + "/api/v1/users/verify_token", {
		method: 'GET',
		data: null,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		success:function(res){
			console.log('ajax call success');
			console.log(res);

			// data.redirect contains the string URL to redirect to
			if (res.success){
				getCartItems();
			} else {
				alert('Please Log in.')
				window.location.href = '/login'
			}
		},
		error: function(e){
			console.log('ajax call error');
			console.log('status: ' + e.status + ', message: ' + e.message);
			alert('Please Log in.')
			window.location.href = '/login';
		}
	});

	$("#cart-table").on("click", ".removeConditionBtn", function() {
		// let cart_id = $(this).closest("tr").find('th[scope="row"]').val()
		let cart_id = $(this).closest("tr").find('td').find('label').html()
		console.log('cart_id: ' + cart_id)
		$.ajax(URL + "/api/v1/cart/delete_cart_item", {
			method: 'POST',
			data: {
				cart_id: cart_id
			},
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			success:function(res){
				console.log('ajax call success')
				console.log('status: ' + res.status + ', message: ' + res.message)
				console.log("remove item from cart with cart_id: " + cart_id + " success.")
				// window.location.reload();
				},
			error: function(e){
				console.log('ajax call error');
				console.log('status: ' + e.status + ', message: ' + e.message);
				alert("Error updating cart: contact (zwkim@connect.ust.hk) or Kakaotalk(ustz).");
			}
		});
		$(this).closest("tr").remove();
	});

	$('#add-btn').click(function () {
		console.log('add-btn Called.');

		// $('#cart-table').append('<tr><th scope="row">' + activityNumber + '</th>' +
		// 	'<td><label type="text">asdf</label></td>' +
		// 	'<td><label type="text">asdf</label></td>' +
		// 	'<td><label type="text">asdf</label></td>' +
		// 	'<td><label type="text">asdf</label></td>' +
		// 	'<td><label type="text">asdf</label></td>' +
		// 	// '<td><button id="delete-btn' + activityNumber + '" type="delete-btn" class="btn-delete" value="1" onclick="deleteRow()">삭제</button></td>' +
		// 	"<td><button class='removeConditionBtn' name='removeConditionBtn' class='btn btn-default'>삭제</button></td>" +
		// 	'</tr>')
		// activityNumber++;

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

	$("#understand-btn").bind('click', function () {
		window.location.href = '/order/first';
	})

	// $("#forbidden-btn").bind('click', function () {
	// 	window.location.href = '/order/first';
	// })

	$("#first-yes-btn").bind('click', function () {
		window.location.href = '/order/second';
	})
})
