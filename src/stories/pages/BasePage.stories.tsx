import React, { useRef } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalHandle, ModalProps } from "../../components/Modal/Modal";
import { Button, Container, FormControl, Grid, TextField } from "@mui/material";
import BasePage, { BasePageProps } from "../../pages/BasePage/BasePage";


const meta: Meta<BasePageProps> = {
  component: BasePage,
  argTypes: {
    children: { type: "symbol", default: "BasePage" },
  },
};

export default meta;

const Template: StoryFn<BasePageProps> = (args) => {

  return (
    <BasePage {...args}>
        <div><h1>Pagina base</h1></div>
    </BasePage>
  );
};

export const Primary = Template.bind({});
Primary.args = {
 
};
