function changeOpenSubmenuTo(id) {
    let btns = document.getElementsByClassName('submenu-btn');
    let divs = document.getElementsByClassName('submenu');

    for (let i = 0; i < 4; i++) {
        btns[i].classList.remove('hidden');
        divs[i].classList.add('hidden');
    }

    let divId = id + "-menu"
    document.getElementById(id).classList.add('hidden');
    document.getElementById(divId).classList.remove('hidden');
}

function onSubmenuMouseOver(id) {
    const timeoutMs = 200;
    setTimeout(changeOpenSubmenuTo, timeoutMs, id);
}

// const el = document.querySelectorAll()
