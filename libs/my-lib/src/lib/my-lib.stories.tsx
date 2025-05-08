import type { Meta, StoryObj } from '@storybook/react';
import { MyLib } from './my-lib';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MyLib> = {
  component: MyLib,
  title: 'MyLib',
};
export default meta;
type Story = StoryObj<typeof MyLib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyLib!/gi)).toBeTruthy();
  },
};
