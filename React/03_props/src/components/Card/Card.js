import React from "react";
import css from "./Card.module.scss";

function Card({ card }) {
  return (
    <div className={css.wrapper}>
      <div className={`${css.clash_card} ${css[card.id]}`}>
        <div
          className={`
              ${css.clash_card__image} 
              ${css["clash_card__image__" + card.id]}
            `}
        >
          <img src={card.image} alt={card.name} />
        </div>

        <div
          className={`
            ${css.clash_card__level} 
            ${css["clash_card__level__" + card.id]}
          `}
        >
          {card.level}
        </div>
        <div className={css.clash_card__unit_name}>{card.name}</div>
        <div className={css.clash_card__unit_description}>
          {card.description}
        </div>

        <div
          className={`
            ${css.clash_card__unit_stats} 
            ${css["clash_card__unit_stats__" + card.id]}
            ${css.clearfix}
          `}
        >
          <div className={css.one_third}>
            <div className={css.stat}>{card.stats.training}</div>
            <div className={css.stat_value}>Training</div>
          </div>

          <div className={css.one_third}>
            <div className={css.stat}>{card.stats.speed}</div>
            <div className={css.stat_value}>Speed</div>
          </div>

          <div className={`${css.one_third} ${css.no_border}`}>
            <div className={css.stat}>{card.stats.cost}</div>
            <div className={css.stat_value}>Cost</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
