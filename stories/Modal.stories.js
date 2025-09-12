import { Modal } from './Modal';

export default {
  title: 'Reshaped Design System/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'fullscreen'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    isOpen: true,
    title: 'Default Modal',
    children: 'This is a default modal with some content.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Small = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'small',
    children: 'This is a small modal.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Large = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'large',
    children: 'This is a large modal with more space for content.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const WithoutCloseButton = {
  args: {
    isOpen: true,
    title: 'No Close Button',
    showCloseButton: false,
    children: 'This modal does not have a close button.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const WithoutTitle = {
  args: {
    isOpen: true,
    children: 'This modal does not have a title.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Fullscreen = {
  args: {
    isOpen: true,
    title: 'Fullscreen Modal',
    size: 'fullscreen',
    children: 'This is a fullscreen modal that takes up most of the viewport.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};