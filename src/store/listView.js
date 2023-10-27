import ShopItem from "./shopItem";
import './listView.css'

export default function ListView(props){
    const { items } = props

    return (
        <div className="listView">
            {
                items.map((item)=>{
                    return <ShopItem card={item}/>
                })
            }
        </div>
    )
}