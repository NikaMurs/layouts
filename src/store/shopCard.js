import './shopCard.css'

export default function ShopCard(props) {
    const { name, price, color, img } = props.card
    return (
        <div className="shopCard">
            <h2 className='shopCardTitle'>{name}</h2>
            <p className='shopCardColor'>{color}</p>
            <img className='shopCardImg' alt={name+'_'+color} src={img}></img>
            <div className='shopCardBottom'>
                <p className='shopCardPrice'>${price}</p>
                <button className='shopCardButton'>Add to cart</button>
            </div>
        </div>
    );
}