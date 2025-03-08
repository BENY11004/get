let hot = "https://api.sampleapis.com/coffee/hot";
let ice = "https://api.sampleapis.com/coffee/iced";

document.getElementById("nav").style.display = "none";
document.getElementById("animation").style.display = "none";

let value;

function SelectTypeOfCoffe() {
    
    let Radiovalue = document.getElementById("radiobutton").checked;
    let Radiovalue1 = document.getElementById("radio").checked
    
    function ss(){

    }
    
    console.log(Radiovalue)
    if (Radiovalue == true && Radiovalue1 == false) {
        value = hot;
        document.getElementById("animation").style.display = "flex";
        document.getElementById("box").style.display = "flex";
        document.getElementById("modal").style.display = "none";
        document.getElementById("radiobutton1").checked = true
        response();
    } else if (Radiovalue == false && Radiovalue1 == true) {
        value = ice;
        document.getElementById("animation").style.display = "flex";
        document.getElementById("box").style.display = "flex";
        document.getElementById("modal").style.display = "none";
        document.getElementById("radio1").checked = true
        response();
    }else if(Radiovalue == false && Radiovalue1 == false){
        alert("please select you'r favorite type")

    }
}

function SelectTypeOfCoffeInPage(){

    let RadioValueInPage = document.getElementById("radiobutton1").checked;
    
    if (RadioValueInPage == true) {
        value = hot;
        document.getElementById("animation").style.display = "flex";
        document.getElementById("box").style.display = "flex";
        response();
    } else if (RadioValueInPage == false) {
        value = ice;
        document.getElementById("animation").style.display = "flex";
        document.getElementById("box").style.display = "flex";
        response();
    }
}

function response() {
    fetch(value).then((res) => {
        res.json().then((res) => {
            for (let i of res) {
                let mainBox = document.getElementById("box");
                let myElement = document.createElement("div");
                myElement.setAttribute("id", `card${i.id}`);
                myElement.classList.add("card-style");
                mainBox.appendChild(myElement);
                let field = "";

                for (let ingredient of i.ingredients) {
                    field += `<div class="px-3 py-[3px] bg-gray-100 border rounded-full cursor-pointer hover:bg-gray-200">${ingredient}</div>`;
                }
                document.getElementById(
                    `card${i.id}`
                ).innerHTML = `<div class="lg:w-[40%] w-full"><img src="${i.image}" id="img" loading="lazy" class="h-full"/></div><div class="flex flex-col justify-between lg:w-[70%] w-full"><div class=" w-full lg:px-6 flex flex-col items-center lg:pb-0 pb-8"><span class="text-xl font-semibold mt-5">${i.title}</span><p class="lg:text-left text-center lg:mx-2 mx-5 lg:mt-5 mt-8">${i.description}</p></div><div class="px-6 pb-8"><span class="font-semibold block w-full text-left lg:px-2 px-6 pt-2">ingredients</span><div class="text-xs mt-6 lg:px-2 px-6 w-full text-left flex flex-wrap gap-3">${field}</div></div></div></div>`;
            }
            document.getElementById("nav").style.display = "flex";
            document.getElementById("animation").style.display = "none";
        });
    });
}
