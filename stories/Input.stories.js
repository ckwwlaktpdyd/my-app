import { Input } from './Input';

export default {
  title: 'Reshaped Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const WithHelperText = {
  args: {
    placeholder: 'Enter your email',
    label: 'Email',
    helperText: 'We will never share your email',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Error = {
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
    error: true,
    helperText: 'This field is required',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Disabled = {
  args: {
    placeholder: 'Disabled input',
    label: 'Label',
    disabled: true,
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
    size: 'small',
    placeholder: 'Small input',
    label: 'Small',
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
    size: 'large',
    placeholder: 'Large input',
    label: 'Large',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password',
    helperText: 'Must be at least 8 characters',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};
