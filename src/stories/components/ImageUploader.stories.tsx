// src/stories/CustomDataGrid.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ImageUpload } from "../../components";
import { ImageUploadProps } from "../../components/ImageUpload/ImageUpload";

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
