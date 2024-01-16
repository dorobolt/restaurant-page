import _ from 'lodash';
import './style.css';

const container = document.querySelector("#body");

function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navigation');
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'home-bar');
    home.classList.add('nav');
    home.classList.add('open');
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

function home() {

}

function menu() {

}

function content() {

}

container.appendChild(header());
container.appendChild(footer());