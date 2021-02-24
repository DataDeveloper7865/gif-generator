

//handle submit event - add event listener
$("form").on("submit", function (evt) {
    evt.preventDefault();
    makeAJAXRequest();
})

//handle remove button event - add event listener
$("#remove-images").on("click", function () {
    deleteAllGifs();
})

//function to remove all gif's on element with jQuery
function deleteAllGifs() {
    $(".gif-gallery").empty();
}

//make network request
async function makeAJAXRequest() {
    //grab value from input
    let gifToAppend = $("#input1").val()

    //make network request and store response object
    let response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${gifToAppend}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    )

    //number of elements needed to grab random .gif
    let numElements = response.data.data.length;

    //random number at ith index of response
    let randomNum = Math.floor(Math.random() * numElements)
    
    //add image with jQuery
    let image = $('<img id="dynamic">');
    image.attr('src', response.data.data[randomNum].images.original.url);
    image.attr('width', '200px');
    image.attr('height', '200px');
    $('.gif-gallery').append(image);

    //return the responded object
    return response.data.data[randomNum].images.original.url;
}
