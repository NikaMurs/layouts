import ShopCard from "./shopCard";
import './cardsView.css'

export default function CardsView(props) {
    const { cards } = props
    
    return (
        <div className="cardsView">
            {
                cards.map((card)=>{
                    return <ShopCard card={card}/>
                })
            }
        </div>
    );
}