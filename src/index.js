import _ from 'lodash';
import './style.css';

function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navigation');
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'home-bar');
    home.classList.add('nav');
    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu-bar');
    menu.classList.add('nav');
    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.setAttribute('id', 'contact-bar');
    contact.classList.add('nav');

    header.appendChild(nav);
    nav.append(home, menu, contact);

    return header;
}

function footer() {
    const footer = document.createElement('footer');
    const uList = document.createElement('ul');
    const list1 = document.createElement('li');
    list1.classList.add('list');
    const list2 = document.createElement('li');
    list2.classList.add('list');
    const list3 = document.createElement('li');
    list3.classList.add('list');
    const link1 = document.createElement('a');
    link1.href = '#';
    link1.classList.add('link');
    link1.textContent = 'Link 1'
    const link2 = document.createElement('a');
    link2.href = '#';
    link2.classList.add('link');
    link2.textContent = 'Link 2'
    const link3 = document.createElement('a');
    link3.href = '#';
    link3.classList.add('link');
    link3.textContent = 'Link 3'

    footer.appendChild(uList);
    uList.append(list1, list2, list3);
    list1.appendChild(link1);
    list2.appendChild(link2);
    list3.appendChild(link3);

    return footer;
}

function close() {
    homeBar.classList.remove('open')
    menuBar.classList.remove('open')
    contactBar.classList.remove('open')
    content.innerHTML = '';
}

function home() {
    const openHour = [
        'monday: 9am - 6pm',
        'tuesday: 9am - 6pm',
        'wednesday: 9am - 6pm',
        'thursday: 9am - 6pm',
        'friday: Closed',
        'saturday: 9am - 6pm',
        'sunday: 9am - 6pm',
    ];

    close();
    homeBar.classList.add('open');
    const title = document.createElement('div');
    title.textContent = 'Restaurant Name';
    title.setAttribute('id', 'title');
    title.classList.add('content');
    const description = document.createElement('div');
    description.textContent = 'Description about the restaurant';
    description.setAttribute('id', 'description');
    description.classList.add('content');
    const hourly = document.createElement('div');
    hourly.textContent = 'Open Hour';
    hourly.setAttribute('id', 'Hourly');
    hourly.classList.add('content');
    const unOrder = document.createElement('ul');
    hourly.appendChild(unOrder);
    for (let i = 0; i < openHour.length; i++) {
        const list = document.createElement('li');
        list.textContent = openHour[i];
        list.classList.add('list');
        unOrder.appendChild(list);
    }

    content.append(title, description, hourly);

}

function menu() {
    const foodMenu = [
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
        {
            food: 'Food Name',
            img: '#',
            description: 'Description about the food'
        },
    ]

    close()
    menuBar.classList.add('open');
    const title = document.createElement('div');
    title.textContent = 'Menu List'
    title.setAttribute('id', 'title');
    title.classList.add('content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    for (let i = 0; i < foodMenu.length; i++) {
        const food = document.createElement('div');
        food.classList.add('menu');
        const foodName = document.createElement('div');
        foodName.textContent = foodMenu[i].food;
        const foodImg = document.createElement('img');
        foodImg.src = foodMenu[i].img;
        foodImg.alt = foodMenu[i].img;
        foodImg.classList.add('img-menu');
        const foodDesc = document.createElement('div');
        foodDesc.textContent = foodMenu.description;
        foodDesc.classList.add('menu-description');
        food.append(foodName, foodImg, foodDesc);
        menu.appendChild(food);
    }


    content.append(title, menu);
}

function contact() {

    close()
    contactBar.classList.add('open');
    const title = document.createElement('div');
    title.textContent = 'Contact Information'
    title.setAttribute('id', 'title');
    title.classList.add('content');
    const info = document.createElement('div');
    info.classList.add('content');
    info.setAttribute('id', "info")
    const info1 = document.createElement('div');
    const info2 = document.createElement('div');
    const info3 = document.createElement('div');
    info1.textContent = 'Contact us for reservation';
    info2.textContent = 'Phone: Phone Number';
    info3.textContent = 'E-mail: E-mail';
    info.append(info1, info2, info3);

    content.append(title, info);
}

document.body.appendChild(header());
document.body.appendChild(footer());

const content = document.querySelector('#content');
const homeBar = document.querySelector('#home-bar');
const menuBar = document.querySelector('#menu-bar');
const contactBar = document.querySelector('#contact-bar');

home();

homeBar.addEventListener('click', function () {
    home();
});
menuBar.addEventListener('click', function () {
    menu();
});
contactBar.addEventListener('click', function () {
    contact();
});