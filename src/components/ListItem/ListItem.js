import React from 'react';
import './listItem.css';

const CompleteButton = ({text, handleClick}) => {
    return (
        <div className="completeButton" onClick={handleClick}>
            {text}
        </div>
    )
};

const DeleteButton = ({text, handleDelete}) => {
    return (
        <div className="deleteButton" onClick={handleDelete}>
            {text}
        </div>
    )
};

const ListItem = ({item, handleItemCheck, handleItemDelete, id}) => {
    return (
        <div className={`listitem ${item.complete ? 'listitem__checked' : ''}`}>
            <h4>{item.text}</h4>

            {
                !item.complete ? <div className="listitem__buttons">
                    <DeleteButton text={"Delete"} handleDelete={() => handleItemDelete(id)}/>
                    <CompleteButton text={"Complete"} handleClick={() => handleItemCheck(id)}/>
                </div> : null
            }
        </div>
    )
};

export {ListItem, CompleteButton};
