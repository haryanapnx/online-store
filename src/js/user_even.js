$("#form_login").submit(e => {
    let data = $("#form_login").serializeArray();
    $.ajax({
        method: "POST",
        url: "http://localhost:9999/users/auth",
        data: data,
        success: function (result) {
            if (result) {
                localStorage.setItem("token", JSON.stringify({token:result.token, id:result.id}))
                console.log('Anda berhasil login');
                window.location = 'http://localhost:9999/home';
            } else {
                alert('Check Username and Password !');
            }
        }
    })
    e.preventDefault();
})
$("#form").submit(e => {
    let data = $("#form").serializeArray();
    $.ajax({
        method: "POST",
        url: "http://localhost:9999/users/auth",
        data: data,
        success: function (result) {
            if (result) {
                console.log(result);
                console.log('Anda berhasil login');
                window.location = 'http://localhost:9999/';
            } else {
                alert('Check Username and Password !');
            }
        }
    })
    e.preventDefault();
})

$("#logout").click(e => {
    let data = $("#logout").serializeArray();
    $.ajax({
        method: "POST",
        url: "http://localhost:9999/logout",
        data: data,
        success: function (result) {
            localStorage.clear();
            alert('Anda berhasil logout');
            window.location = 'http://localhost:9999/';

        }
    })
    e.preventDefault();
})

$("#alert_log").click(e => {
    let data = $("#alert_log").serializeArray();
    $.ajax({
        data: data,
        success: function (result) {
            alert('Please Login !');
        }
    })
    e.preventDefault();
})