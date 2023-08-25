// src/stories/CustomDataGrid.stories.tsx

import React, { useRef } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalHandle, ModalProps } from "../../components/Modal/Modal";
import { Button, Container, Grid } from "@mui/material";

const meta: Meta<ModalProps> = {
  component: Modal,
  argTypes: {
    children: { type: "symbol", default: "Modal" },
  },
};

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
  const modalRef = useRef<ModalHandle>(null);

  const handleOpen = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ref={modalRef} {...args}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <h1>Conteudo do modal</h1>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Modal Title",
  subtitle: "Modal Subtitle",
  draggable: false,
  children: "This is the content of the Modal.",
  actions: [
    {
      label: (<Button variant="outlined">Cancelar</Button>),
      color: "info",
      id: 1,
      onClick: () => {
        alert("You clicked the close modal button!");
      },
    },
    {
      label: "Submit",
      color: "info",
      id: 1,
      onClick: () => {
        alert("You clicked the close modal button!");
      },
    },
  ],
};
