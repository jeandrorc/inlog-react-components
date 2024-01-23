// src/stories/CustomDataGrid.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ImageUpload } from "../../components";
import { ImageUploadProps } from "../../components/ImageUpload/ImageUpload";
import Icon from "../../components/Icons/Icon";

const meta: Meta<ImageUploadProps> = {
  component: ImageUpload,
  argTypes: {
    multiple: { type: "boolean", default: true },
    thumbSize: { type: "number", default: 300 },
  },
};

export default meta;

type Story = StoryObj<ImageUploadProps>;

export const Primary: Story = {
  render: () => (
    <ImageUpload
      reverse
      multiple
      thumbSize={100}
      onFilesUpdate={(files) => console.log("Files" + JSON.stringify(files))}
      onFileChange={(files) =>
        console.log("files blob" + JSON.stringify(files, null, 2))
      }
    />
  ),
  name: "Image Upload Multple",
};


export const Single: Story = {
  render: () => (
    <ImageUpload
      thumbSize={100}
      onFilesUpdate={(files) => console.log("Files" + JSON.stringify(files))}
      onFileChange={(files) =>
        console.log("files blob" + JSON.stringify(files, null, 2))
      }
    />
  ),
  name: "Image Upload Single",
};

const initialFiles = [
  {
    uuid: "1",
    name: "test",
    size: 100,
    type: "image/png",
    url: "https://via.placeholder.com/150",
    lastModified: 0,
  },
  {
    uuid: "2",
    name: "test",
    size: 100,
    type: "image/png",
    url: "https://via.placeholder.com/150",
    lastModified: 0,
  },
]

export const MultipleWithInitialFiles: Story = {

  render: () => (
    <ImageUpload
      multiple
      thumbSize={100}
      onFilesUpdate={(files) => console.log("Files" + JSON.stringify(files))}
      onFileChange={(files) =>
        console.log("files blob" + JSON.stringify(files, null, 2))
      }
      initialFiles={initialFiles}
      uploadIcon={<div>Upload</div>}
    />
  ),
  name: "Image Upload Multiple with initial files",
};


export const MultipleWithMaxFile: Story = {

  render: () => (
    <ImageUpload
      multiple
      thumbSize={100}
      maxFiles={1}
      onFilesUpdate={(files) => console.log("Files" + JSON.stringify(files))}
      onFileChange={(files) =>
        console.log("files blob" + JSON.stringify(files, null, 2))
      }
      initialFiles={initialFiles}
      uploadIcon={<Icon name="upload" size={32} color="red"/>}
    />
  ),
  name: "Image Upload with max files",
};