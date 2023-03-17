import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Ana Bergman' },
        { id: 2, name: 'Pavel Tulkin' },
        { id: 3, name: 'Masha Muracheva' },
        { id: 4, name: 'Alexandr Arzhanuknin' },
        { id: 5, name: 'Ekaterina Dolgikh' },
        { id: 6, name: 'Anna Vaganova' },

    ];


    let messages = [
        { id: 1, message: 'Hello there' },
        { id: 2, message: 'Hey, gonna go out today?' },
        { id: 3, message: 'Call me when you will back home' },
        { id: 4, message: 'Whats up cutie' },
        { id: 5, message: 'Look what i found on tik-tok' },
        { id: 6, message: 'That meme is about us lol' }
    ];

    let dialogsElements = dialogs.map (d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map (m => <Message message={m.message} />)
    
    

    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

    export default Dialogs;