

const settings_btn = document.querySelector('#settings_link');
const home_btn = document.querySelector('#home_link');
const home_btn_small = document.querySelector('#home_link_small');
const navbar_toggler = document.querySelector('.navbar-toggler');
const settings_btn_small = document.querySelector('#settings_link_small');
const main_column_main = document.querySelector('#center_column_main');
const main_column_settings = document.querySelector('#center_column_settings');
const main = document.querySelector('#main_content')
const collapse_content = document.querySelector('#collapseContent')

const pages = {
    'home': 'home',
    'settings': 'settings',
    'messages': 'messages',
    'notifications': 'notifications'
}

settings_btn.addEventListener('click', settingsBtnClick);
settings_btn_small.addEventListener('click', settingsBtnSmallClick);
home_btn.addEventListener('click', homeBtnClick);
home_btn_small.addEventListener('click', homeBtnSmallClick);



function settingsBtnClick (e) {
    spa_render('settings',main);

}

function settingsBtnSmallClick (e) {
    settingsBtnClick();
    navbar_toggler.dispatchEvent(new Event('click'));
   
}

function homeBtnClick (e) {
    spa_render('home',main);
}

function homeBtnSmallClick (e) {
    spa_render('home',main);
    navbar_toggler.dispatchEvent(new Event('click'));
}



function spa_render(pageName,container) {
    for (var page in pages){
        if(page == pageName) {
            container.classList.add(pages[page])
        }
        else{
            container.classList.remove(pages[page])
        }
    }
    console.log(container.classList);
}
