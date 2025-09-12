import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

// Wrapper component for Modal stories
const ModalWrapper = ({ children, ...modalProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        {children}
      </Modal>
    </div>
  );
};

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
  render: () => (
    <ModalWrapper title="Default Modal">
      <p>This is a default modal with some content. You can close it by clicking the X button or clicking outside the modal.</p>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Small = {
  render: () => (
    <ModalWrapper title="Small Modal" size="small">
      <p>This is a small modal.</p>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Large = {
  render: () => (
    <ModalWrapper title="Large Modal" size="large">
      <p>This is a large modal with more space for content.</p>
      <p>It can contain multiple paragraphs and other elements.</p>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary">Action Button</Button>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const WithoutCloseButton = {
  render: () => (
    <ModalWrapper title="No Close Button" showCloseButton={false}>
      <p>This modal doesn't have a close button. You can only close it by clicking outside.</p>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const WithoutTitle = {
  render: () => (
    <ModalWrapper>
      <p>This modal doesn't have a title.</p>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};

export const Fullscreen = {
  render: () => (
    <ModalWrapper title="Fullscreen Modal" size="fullscreen">
      <p>This is a fullscreen modal that takes up most of the viewport.</p>
      <p>Perfect for complex forms or detailed content.</p>
    </ModalWrapper>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1',
    },
  },
};
