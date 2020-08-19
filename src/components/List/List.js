import React, { useState } from 'react';
import { ListItem } from "../ListItem/ListItem";
import './list.css';

import Button from '../Button/Button';

const List = () => {

    const [ items, setItems ] = useState([
        {text: 'Learn Angular', complete: false},
        {text: 'Learn React', complete: false},
        {text: 'Learn Vue', complete: false},
    ]);

    const [inputValue, setInputValue] = useState("");

    const onButtonClick = () => {
        if(inputValue === "") return;
        const newItems = [...items, {text: inputValue}];
        setItems(newItems);
        resetInput();
    };

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const resetInput = () => {
      setInputValue("");
    };

    const handleItemCheck = (index) => {
        // We have to create a new array that has the elements of the old state.
        // If we simply set todos equal to items, we aren't creating new state, and thus React won't update the DOM
        const todos = [...items];
        todos[index].complete = true;
        setItems(todos);
    };

    const handleItemDelete = (index) => {
        const todos = [...items];
        // The splice method can be used to add or remove elements to an array.
        // In this case, we can use it to remove an item at an index.
        // This method takes 3 parameters
        // The 1st is the index - an integer that specifies at what position to add/delete items.
        // The 2nd argument tells the function how many elements to delete from the array.
        // The 3rd argument is optional and is the new item(s) to be added to the array. Since we don't want to add any elements to the array, we leave this argument blank.
        todos.splice(index, 1);
        setItems(todos);
    };

    return (
        <>
            <div className="list__container">
                <div className="list__container-content">
                    <h1 className="list__container-title">Reminders</h1>
                    {
                        items.map((item, index) => (
                            <div key={index} className={`list__container-content-item`}>
                                <ListItem item={item} handleItemCheck={handleItemCheck} handleItemDelete={handleItemDelete} id={index} index={index}/>
                            </div>
                        ))
                    }
                </div>
                <input className="input" type="text" onChange={onInputChange} value={inputValue}/>
                <div>
                    <Button buttonText={"Add Todo"} onButtonClick={onButtonClick} />
                </div>
            </div>
        </>
    )
};

export default List;
