import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Reshaped Design System/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: '🎨 **Reshaped Design System**에서 가져온 Button 컴포넌트입니다. Design 탭에서 원본 Figma 디자인과 비교해보세요!'
      }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Primary Button**: 가장 중요한 액션에 사용되는 기본 버튼입니다. Figma 디자인과 비교해보세요!'
      }
    }
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Secondary Button**: 보조적인 액션에 사용되는 버튼입니다.'
      }
    }
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    size: 'medium',
    children: 'Outline Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Outline Button**: 테두리만 있는 버튼으로 덜 강조되는 액션에 사용됩니다.'
      }
    }
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'medium',
    children: 'Ghost Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Ghost Button**: 배경이 투명한 최소한의 스타일 버튼입니다.'
      }
    }
  },
};

// Size variations
export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Small Size**: 작은 크기의 버튼입니다.'
      }
    }
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Large Size**: 큰 크기의 버튼으로 중요한 액션에 사용됩니다.'
      }
    }
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
    },
    docs: {
      description: {
        story: '🎨 **Disabled State**: 비활성화된 상태의 버튼입니다.'
      }
    }
  },
};

// Interactive playground
export const Playground = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Playground Button',
    disabled: false,
  },
  parameters: {
    design: [
      {
        type: 'figma',
        name: '🎨 Reshaped Design System',
        url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=10201-4&t=X7TETj9XjKVcev9y-1',
      }
    ],
    docs: {
      description: {
        story: '🧪 **Playground**: 모든 속성을 자유롭게 테스트해볼 수 있는 플레이그라운드입니다. Controls 패널에서 다양한 옵션을 시도해보세요!'
      }
    }
  },
};
