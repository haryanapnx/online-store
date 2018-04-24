let myFetch = fetch('http://localhost:9999/products');

myFetch.then(function (res) {
    return res.json()
}).then(result => {
    result.map(dat => {
        $('#products').append(
            `<div class="col-sm-4">
                <div class="panel panel-info text-center">
                    <div class="panel-heading"><input type="hidden" value="${dat.id}" id="produk_id"><a href="#" class="active" name="name">${dat.name}</a></div>
                    <div class="panel-body"><input type="hidden" value="${dat.stock}" id="produk_id"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div>
                    <div class="panel-footer text-center" name="price">Rp. ${dat.price}</div>
                    <div class="panel-footer text-center">
                    <button class="btn btn-warning"  data-target="#myModal" title="Add to cart" onclick=add(${dat.id},'${dat.name}',${dat.price},${dat.stock})> Buy</button></div>
            </div>`
        )
    })
})

let basket = JSON.parse(localStorage.getItem("basket")) || []
let sum = 0;
let total = function () {
    basket.forEach(e => {
        sum += (e.price * e.qty)
    });
    return sum
}
$(document).ready(function () {
    basket.map(data => {
        $('#cart_list').append(
            `<tr class="tr1" id=row${data.id}>
            <td></td>
            <td>${data.name}</td>
            <td width='200'>Rp. ${data.price}</td>
            <td class='count'>
            <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number btn-sm"  data-type="minus" onclick=apus(${data.id})>
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="${data.qty}" min="1" max="100">
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number btn-sm" data-type="plus" data-field="quant[2]" onclick=add(${data.id},'${data.name}',${data.price},${data.stock})>
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
          </td>
            <td>${parseInt(data.price) * parseInt(data.qty)}</td>
          </tr>`
        )
    })
    $('#subtotal').text(total())
    $('#count').text()
})


function add(id_produk, name, price, stock) {
    let qty = 1;
    const fin = basket.find(i => i.id == id_produk)

    if (fin && basket[basket.indexOf(fin)].stock == 0) {
        alert("stock abis")
    } else {
        if (fin) {
            basket[basket.indexOf(fin)].qty++
            let qt = $(`#row${id_produk} .count .input-number`).val()
            console.log(qt)
            $(`#row${id_produk} .count .input-number`).val(parseInt(qt) + 1)
            basket[basket.indexOf(fin)].stock--
            $(`#row${id_produk} .subtotal`).text($(`#row${id_produk} .count`).text() * price)

        } else {
            stock -= qty
            basket.push({ id: id_produk, name: name, price: price, qty: qty, stock: stock });

            $('#cart_list').append(
                `<tr id=row${id_produk}>
                <td></td>
                <td>${name}</td>
                <td width='200'>Rp. ${price}</td>
                <td class='count'>
            <span class="input-group-btn">
            <button type="button" class="btn btn-danger btn-number btn-sm"  data-type="minus" onclick=apus(${id_produk})>
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="${qty}" min="1" max="100">
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number btn-sm" data-type="plus" onclick=add(${id_produk},'${name}',${price},${stock})>
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
          </td>
                <td>${qty * price}</td>
           
            <tr>`

            )
        }
        saveBasket()
    }
    $('#subtotal').text(total())
    $('#count').text()
}

$('body').on("click", ".dropdown-menu", function (e) {
    $(this).parent().is(".open") && e.stopPropagation();
});

function apus(id_produk, name, price, stock) {
    let qty = 1;
    const fin = basket.find(i => i.id == id_produk)

    if (fin && basket[basket.indexOf(fin)].stock == 0) {
        alert("stock abis")
    } else {
        if (fin) {
            basket[basket.indexOf(fin)].qty--
            let qt = $(`#row${id_produk} .count .input-number`).val()
            $(`#row${id_produk} .count .input-number`).val(parseInt(qt) - 1)
            basket[basket.indexOf(fin)].stock++
            $(`#row${id_produk} .subtotal`).text($(`#row${id_produk} .count`).text() * price)

        } else {
            qty -= stock
            basket.push({ id: id_produk, name: name, price: price, qty: qty, stock: stock });

            $('#cart_list').append(
                `<tr id=row${id_produk}>
                <td></td>
                <td>${name}</td>
                <td width='200'>Rp. ${price}</td>
                <td class='count'>
            <span class="input-group-btn">
            <button type="button" class="btn btn-danger btn-number btn-sm"  data-type="minus" onclick=apus(${id_produk})>
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="${qty}" min="1" max="100">
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number btn-sm" data-type="plus" onclick=add(${id_produk},'${name}',${price},${stock})>
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
          </td>
                <td>${qty * price}</td>
           
            <tr>`

            )
        }
        saveBasket()
    }
    $('#subtotal').text(total())
    $('#count').text()
}

function hapus(id_produk, qty, price) {

    for (var i in basket) {
        this.qty = qty
        this.price = price
        if (basket[i].id === id_produk) {
            basket[i].qty--;
            basket[i].stock++;
            if (basket[i].qty === 0) {
                basket.splice(i, 1);
                console.log("mampus di apus");
                $(`#row${id_produk}`).remove()

            }
            break;
        }
    }
    saveBasket();
}
function saveBasket() { localStorage.setItem('basket', JSON.stringify(basket)) }

function checkout() { 

//    letlocalStorage.setItem('total', parseInt($('#subtotal').text()))
   let ambil_id=JSON.parse(localStorage.getItem('token')).id 
   let baskt=JSON.parse(localStorage.getItem('basket'))
      
   const data={
       id_user: ambil_id,
       data:baskt,
       total:parseInt($('#subtotal').text())

   }
   $.ajax({
    method: "POST",
    url: "http://localhost:9999/orders/create",
    data: data,
    success: function (result) {
        window.open(result.redirect_url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=600"); 
       
        
    }
})
   
}


