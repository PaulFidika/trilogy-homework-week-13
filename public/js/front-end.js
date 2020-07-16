$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: '/api',
        success: (data) => {
            data.forEach((burger) => {
                if (!burger.alreadyEaten) {
                    let htmlString = `<li class="list-group-item">${burger.name} <button class="eatMe" data-id=${burger.id}>Eat me!</button></li>`
                    $("#toEat").append(htmlString)
                }
                else {
                    $("#alreadyEaten").append($(`<li class="list-group-item">`).text(`${burger.name}`))
                }
            });

            $(".eatMe").on("click", function (event) {
                event.preventDefault()
                $.ajax({
                    type: 'PUT',
                    url: '/api',
                    data: {
                        id: $(this).data("id")
                    },
                    success: (data) => {
                        location.reload() // reload the page
                    }
                })
            })
        },
        error: (err) => {
            console.log('failed to get burger database')
        }
    })

});
