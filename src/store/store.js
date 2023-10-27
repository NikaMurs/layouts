import IconSwitch from './iconSwitch'
import СardsView from './cardsView'
import ListView from './listView';
import React, { useState } from 'react';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export default function Store() {
    let [icon, setIcon] = useState('view_list');
    return (
        <div className='store'>
            <IconSwitch icon={icon} onSwitch={() => { setIcon(icon === 'view_list' ? icon = 'view_module' : icon = 'view_list') }} />
            {/* <СardsView cards={products}/> */}
            {/* <ListView items={products}/> */}
            {(icon === 'view_list' ? <ListView items={products}/> : <СardsView cards={products}/>)}
        </div>
    );
}
