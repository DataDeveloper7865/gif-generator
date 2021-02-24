console.log("Let's get this party started!");

//function to grab the form input value

let $gifToAppend = $('#input1').val()
//take the input value to make the network request

$("form").on("submit", function (evt) {
    evt.preventDefault();
    makeAJAXRequest();
    //appendToGallery(gifToAppend);
})

$("#remove-images").on("click", function () {
    deleteAllGifs();
})

async function makeAJAXRequest() {
    let gifToAppend = $("#input1").val()
    console.log(gifToAppend);
    let response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${gifToAppend}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    )
    console.log("Returned response: ", response.data.data[0]);
    
    let image = $('<img id="dynamic">');
    image.attr('src', response.data.data[0].url);
    $('.gif-gallery').append(image);


    return response.data.data[0];
}

// function appendToGallery(gif) {
//     console.log(gif.url);
//     let image = $('<img id="dynamic">');
//     image.attr('src', gif.url);
//     $('.gif-gallery').append(image);

//     // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
//     // img.attr('src', responseObject.imgurl);
//     // img.appendTo('#imagediv');
// }
//using jquery put into the document


//delete button clears all gifs

function deleteAllGifs() {
    $(".gif-gallery").empty();
}
