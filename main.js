const pic = document.getElementById('pic');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const btn = document.querySelector('.btn');

let url = "https://dog.ceo/api/breeds/image/random"
window.addEventListener('DOMContentLoaded', function () {
    fetch(url)
    .then((yubor) => {
        let javob = yubor.json()
        return javob
    })
    .then((date) => {
        pic.src = date.message
    })
    fetch(url)
    .then((yubor) => {
        let javob = yubor.json()
        return javob
    })
    .then((date) => {
        pic2    .src = date.message
    })
    fetch(url)
    .then((yubor) => {
        let javob = yubor.json()
        return javob
    })
    .then((date) => {
        pic3.src = date.message
    })
    btn.addEventListener('click', function() {
        fetch(url)
        .then((yubor) => {
            let javob = yubor.json()
            return javob
        })
        .then((date) => {
            pic.src = date.message
        })
        fetch(url)
        .then((yubor) => {
            let javob = yubor.json()
            return javob
        })
        .then((date) => {
            pic2.src = date.message
        })
        fetch(url)
        .then((yubor) => {
            let javob = yubor.json()
            return javob
        })
        .then((date) => {
            pic3.src = date.message
        })
        fetch(url)
        .then((yubor) => {
            let javob = yubor.json()
            return javob
        })
        .then((date) => {
            pic.src = date.message
        })
    })
})
const select = document.getElementById('select');
const changeurl = "https://dog.ceo/api/breeds/list/all";
window.addEventListener('DOMContentLoaded', () => {
    fetch(changeurl)
    .then((yobor) => {
        let jav = yobor.json()
        return jav
    })
    .then((forurl) => {
        let acc = forurl.message
        let kingiston = Object.keys(acc)
        for (let i = 0; i < kingiston.length; i++) {
            const option = document.createElement('option')
            option.value = kingiston[i];
            option.innerHTML += kingiston[i]
            select.appendChild(option)
        }
    })
})
select.addEventListener('change', (e) => {
    e.preventDefault()
        let sel = select.value
        let api = `https://dog.ceo/api/breed/${sel}/images/random`;
        fetch(api)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic.src = da.message;
        })
        fetch(api)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic2.src = da.message;
        })
        fetch(api)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic3.src = da.message;
        })
})
const inputsrch = document.getElementById('inp');
const control = document.querySelector('.p')
const topbtn = document.querySelector('.top')
inputsrch.addEventListener("input", function(e) {
    let names = e.target.value;
    control.innerHTML = names
});
top.addEventListener('click', () => {
    let top = inputsrch.value
    if (top) {
        let apii = `https://dog.ceo/api/breed/${top}/images/random`;
        fetch(apii)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic.src = da.message;
        })
        fetch(apii)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic2.src = da.message;
        })
        fetch(apii)
        .then((yobor) => {
        let jav = yobor.json()
        return jav})
        .then((da) => {
        pic3.src = da.message;
        })
    }else{
        control.innerHTML = "It Turi Yozing"
    }
})

