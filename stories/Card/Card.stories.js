import { fn } from '@storybook/test';
import { Card } from './Card';

export default {
  title: 'Reshaped Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '🎨 **Reshaped Design System**의 Card 컴포넌트입니다. 콘텐츠를 그룹화하고 시각적으로 구분하는데 사용됩니다.'
      }
    }
  },
  tags: ['autodocs'],
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
    children: {
      control: 'text',
    },
  },
  args: { onClick: fn() },
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
    docs: {
      description: {
        story: '🎨 **Default Card**: 기본적인 카드 스타일입니다.'
      }
    }
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
    docs: {
      description: {
        story: '🎨 **Elevated Card**: 더 강한 그림자로 강조된 카드입니다.'
      }
    }
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
    docs: {
      description: {
        story: '🎨 **Outlined Card**: 테두리를 사용한 깔끔한 스타일의 카드입니다.'
      }
    }
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
    docs: {
      description: {
        story: '🎨 **Hoverable Card**: 호버 효과가 있는 인터랙티브한 카드입니다.'
      }
    }
  },
};

export const Clickable = {
  args: {
    hoverable: true,
    onClick: fn(),
    children: (
      <div>
        <h3>Clickable Card</h3>
        <p>This card is clickable and will trigger an action when clicked. Check the Actions panel!</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Clickable Card**: 클릭 가능한 카드로 액션을 실행할 수 있습니다.'
      }
    }
  },
};

// Padding variations
export const SmallPadding = {
  args: {
    padding: 'small',
    children: (
      <div>
        <h3>Small Padding</h3>
        <p>This card has small padding for compact layouts.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Small Padding**: 작은 패딩을 사용한 컴팩트한 카드입니다.'
      }
    }
  },
};

export const LargePadding = {
  args: {
    padding: 'large',
    children: (
      <div>
        <h3>Large Padding</h3>
        <p>This card has large padding for more spacious layouts with breathing room.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Large Padding**: 큰 패딩을 사용한 여유로운 카드입니다.'
      }
    }
  },
};

export const Playground = {
  args: {
    variant: 'default',
    padding: 'medium',
    shadow: 'medium',
    bordered: false,
    hoverable: true,
    children: (
      <div>
        <h3>Card Playground</h3>
        <p>Use the controls panel to experiment with different card properties and see how they affect the appearance and behavior.</p>
      </div>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🧪 **Playground**: 모든 카드 속성을 자유롭게 테스트해볼 수 있습니다.'
      }
    }
  },
};
