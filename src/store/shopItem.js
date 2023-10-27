import './shopItem.css'

export default function shopItem(props) {
    const { name, price, color, img } = props.card
    return (
        <div className="shopItem">
            <img className='shopItemImg' alt={name + '_' + color} src={img}></img>
            <h2 className='shopItemTitle'>{name}</h2>
            <p className='shopItemColor'>{color}</p>
            <p className='shopItemPrice'>${price}</p>
            <button className='shopItemButton'>Add to cart</button>
        </div>
    );
}