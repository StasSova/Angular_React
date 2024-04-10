import React from "react";
import css from "./CardList.module.scss";
import Card from "../Card/Card";

function CardList() {
  const cards = [
    {
      id: "archer",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png",
      level: "Level 5",
      name: "The Archer",
      description:
        "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",
      stats: {
        training: "25S",
        speed: 24,
        cost: 300,
      },
    },
    {
      id: "barbarian",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png",
      level: "Level 4",
      name: "The Barbarian",
      description:
        "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.",
      stats: {
        training: "20S",
        speed: 16,
        cost: 150,
      },
    },
    {
      id: "archer",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png",
      level: "Level 5",
      name: "The Archer",
      description:
        "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",
      stats: {
        training: "25S",
        speed: 24,
        cost: 300,
      },
    },
    {
      id: "giant",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
      level: "Level 5",
      name: "The Giant",
      description:
        "Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you'll see their fury unleashed!",
      stats: {
        training: "2M",
        speed: 12,
        cost: 2250,
      },
    },
    {
      id: "wizard",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png",
      level: "Level 6",
      name: "The Wizard",
      description:
        "The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      stats: {
        training: "5M",
        speed: 16,
        cost: 4000,
      },
    },
    {
      id: "barbarian",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png",
      level: "Level 4",
      name: "The Barbarian",
      description:
        "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.",
      stats: {
        training: "20S",
        speed: 16,
        cost: 150,
      },
    },
    {
      id: "goblin",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png",
      level: "Level 5",
      name: "The Goblin",
      description:
        "These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",
      stats: {
        training: "30S",
        speed: 32,
        cost: 100,
      },
    },
    {
      id: "wizard",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png",
      level: "Level 6",
      name: "The Wizard",
      description:
        "The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
      stats: {
        training: "5M",
        speed: 16,
        cost: 4000,
      },
    },
    {
      id: "goblin",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png",
      level: "Level 5",
      name: "The Goblin",
      description:
        "These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",
      stats: {
        training: "30S",
        speed: 32,
        cost: 100,
      },
    },
  ];

  let collection = cards.map((el) => <Card card={el} />);

  return <div className={css.card_container}>{collection}</div>;
}

export default CardList;
