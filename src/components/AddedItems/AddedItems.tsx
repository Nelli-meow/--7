import * as React from 'react';

interface Props {
    itemName: string;
    itemPrice: number;
    itemAmount: number;
    totalPrice: number;
}

const AddedItems: React.FC<Props> = ({itemName, itemPrice, totalPrice,itemAmount}) => {
    return (
        <div>
            <h3 className="item-title">{itemName}</h3>
            <span className="item-ammount">x: {itemAmount}</span>
            <span className="item-price">{itemPrice} KGS</span>
        </div>
    );
};

export default AddedItems;