import { Card } from './Card';

export default {
  title: 'Reshaped Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    bordered: {
      control: 'boolean',
    },
    hoverable: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: (
      <div>
        <h3>Card Title</h3>
        <p>This is a default card with some content. Cards are used to group related information and actions.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    shadow: 'large',
    children: (
      <div>
        <h3>Elevated Card</h3>
        <p>This card has an elevated appearance with a larger shadow for more prominence.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    shadow: 'none',
    bordered: true,
    children: (
      <div>
        <h3>Outlined Card</h3>
        <p>This card uses borders instead of shadows for a cleaner, outlined look.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Hoverable = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3>Hoverable Card</h3>
        <p>Hover over this card to see the interactive effect. Perfect for clickable content.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
  },
};