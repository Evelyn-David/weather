let obj, api_id, w_desc, w_img;

// 1. get data from API
function weather(cityID){
    var key = '4da3b49350fabe7b63efad3629ab989d';
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`)
    .then(function(resp){return resp.json()}).then(function(data){
        console.log(data);
        obj = data;
        setUI(obj);
        pickImg();
    })
    .catch(function(){
        // TO DO - catch errors
    });
}

// 2. add event listener on choice classes
window.onload = function() {
    let b = document.getElementById('b');
    let ct = document.getElementById('ct');
    let is = document.getElementById('is');
    let ms = document.getElementById('ms');
    let sm = document.getElementById('sm');
    let dj = document.getElementById('dj');
    let ar = document.getElementById('ar');
    let cp = document.getElementById('cp');

    b.addEventListener('click', function(){
        api_id = 683506;
        console.log(api_id);
    });
    ct.addEventListener('click', function(){
        api_id = 680962; 
        console.log(api_id);
    });
    is.addEventListener('click', function(){
        api_id = 675810; 
        console.log(api_id);
    });
    ms.addEventListener('click', function(){
        api_id = 665004; 
        console.log(api_id);
    });
    sm.addEventListener('click', function(){
        api_id = 667872; 
        console.log(api_id);
    });
    dj.addEventListener('click', function(){
        api_id = 679134; 
        console.log(api_id);
    });
    ar.addEventListener('click', function(){
        api_id = 686254; 
        console.log(api_id);
    });
    cp.addEventListener('click', function(){
        api_id = 681624; 
        console.log(api_id);
    });
}

// 3. get and display data when `Get` is hit

let show = document.getElementById('show').addEventListener('click', function(){
    if(!api_id){
        alert("Please pick a choice!");
    }else{
        //update UI with API data!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // weather(api_id);
    }
});

//4. pick right image for weather
function pickImg(){
    w_icon = obj.weather[0].icon;
    w_img = document.getElementById('bg').style.backgroundImage = `url('images/${w_icon}.jpg')`;

}


// 5. set data on UI
function setUI(obj){
    document.getElementById('city').innerHTML = obj.name;

    // sunset
    let apus = obj.sys.sunset;
    let date = new Date(apus * 1000);
    let timestr = date.toLocaleTimeString();
    document.getElementById('sunset').innerHTML = timestr;

    document.getElementById('umid').innerHTML = obj.main.humidity;
    document.getElementById('pres').innerHTML = obj.main.pressure;

    //temp in celsius
    let cel = parseInt(obj.main.temp - 273) + "°";
    document.getElementById('temp').innerHTML = cel;

    document.getElementById('description').innerHTML = obj.weather[0].description;
    document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/w/${obj.weather[0].icon}.png`);
    document.getElementById('title').innerHTML = obj.weather[0].main;
}