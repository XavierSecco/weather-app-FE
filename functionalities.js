// function submitform(){

//     //get the form from DOM (Document object model) 
//     var form = document.getElementById('request-form');
//     form.onsubmit = function(event){
//         console.log("hola")
//         var xhr = new XMLHttpRequest();
//         var data = new FormData(form);
//         //open the request
//         xhr.open('POST','http://localhost:5000/get-weather-data')
//         xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         var json = JSON.stringify(Object.fromEntries(formData));
//         console.log(json)
//         xhr.send(json);

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == XMLHttpRequest.DONE) {
//                 form.reset(); //reset form after AJAX success.
//             }
//         }

//         //Dont submit the form.
//         return false; 
//     }
// }



    var form = document.getElementById("request-form");

    form.addEventListener("submit", function(e){
        // prevent auto submision of the form
        e.preventDefault()

        fetch('https://calm-tor-07487.herokuapp.com/https://checking-my-city-weather.herokuapp.com/get-weather-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                city: document.getElementById('city-name').value,
                measurement_unit: document.getElementById('measurement-unit').value
            })
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })

    })


// formElem.onsubmit = async (e) => {
//     e.preventDefault();

//     var form = document.querySelector("#request-form");
//     let form = document.forms[0];

//     data = {
//     city : form.querySelector('input[city="cityname"]').value,
//     measurement_unit : form.querySelector('input[measurement-unit="unit"]').value,
//     }

//     let response = await fetch('http://localhost:5000/get-weather-data', {
//         method: 'POST', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//             },
//         body: JSON.stringify(data),
//        })

//     xhr.open(form.method, form.action, true);
//     let text = await response.text(); // read response body as text
//     document.querySelector("#decoded").innerHTML = text;
// };