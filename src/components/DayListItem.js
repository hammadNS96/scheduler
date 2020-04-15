import React from "react";
import classnames from 'classnames';
import './DayListItem.scss';

export default function DayListItem(props) {

  const dayClass = classnames({
    'day-list_item': true,
    'day-list_item--selected': props.selected,
    'day-list_item--full': props.spots === 0




  });



  const formatSpot = spots => {
    switch (spots) {
      case 0:
        return "no spots remaining";
      case 1:
        return "1 spot remaining";

      default:
        return `${spots} spots remaining`;
    }
  };
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpot(props.spots)}</h3>
    </li>
  );
}