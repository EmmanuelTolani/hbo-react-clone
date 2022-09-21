import React from "react";

import Card from "./Card";

export default {
  title: "UI/Card",
  component: Card,
};

const Template = (args) => {
  return <Card {...args} />;
};

export const defaultState = Template.bind({});
defaultState.args = {
  title: "Pikachu",
  imageUrl:
    "https://cdn1.dotesports.com/wp-content/uploads/2018/09/09005337/pikachu.jpg",
};
