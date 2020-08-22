import React from 'react';
import classnames from "classnames";
import styles from "./Item.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
    <ListItem>
        <Checkbox 
            onClick={() => onClickDone(id)}
        />
        <div className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>  
            {value}
        </div>
        <ListItemSecondaryAction>
            <DeleteRoundedIcon 
                onClick={() => onClickDelete(id)}
            /> 
        </ListItemSecondaryAction>
    </ListItem>);

export default Item;
