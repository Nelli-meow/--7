import * as React from 'react';
import './AddedItems.css';

interface Props {
    itemName: string,
    itemPrice: number,
    itemAmount: number,
    totalPrice: number,
    key?: number
}

const AddedItems: React.FC<Props> = ({itemName, itemPrice, itemAmount, key}) => {
    return (
        <div key={key} className="added-item">
            <h3 className="item-title">{itemName}</h3>
            <span className="item-ammount">× {itemAmount}</span>
            <span className="item-price">{itemPrice} KGS</span>
        </div>
    );
};

export default AddedItems;