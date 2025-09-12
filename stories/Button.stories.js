import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/%EC%84%9C%EC%8A%B9%EC%97%B0-%EC%8B%A4%EC%8A%B5-%ED%85%9C%ED%94%8C%EB%A6%BF?node-id=1-2419&t=R75x74qcWEmoSdA5-1',
    },
    // 추가 정보나 노트
    docs: {
      description: {
        story: '🎨 **Figma 디자인과 비교**: Design 탭에서 원본 디자인과 구현 결과를 비교해보세요!'
      }
    }
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/%EC%84%9C%EC%8A%B9%EC%97%B0-%EC%8B%A4%EC%8A%B5-%ED%85%9C%ED%94%8C%EB%A6%BF?node-id=1-2419&t=R75x74qcWEmoSdA5-1',
    },
    docs: {
      description: {
        story: '🎨 **Secondary Button**: 보조 버튼의 Figma 디자인과 실제 구현을 비교해보세요.'
      }
    }
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/%EC%84%9C%EC%8A%B9%EC%97%B0-%EC%8B%A4%EC%8A%B5-%ED%85%9C%ED%94%8C%EB%A6%BF?node-id=1-2419&t=R75x74qcWEmoSdA5-1',
    },
    docs: {
      description: {
        story: '🎨 **Large Button**: 큰 사이즈 버튼의 디자인 정확도를 확인해보세요.'
      }
    }
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/%EC%84%9C%EC%8A%B9%EC%97%B0-%EC%8B%A4%EC%8A%B5-%ED%85%9C%ED%94%8C%EB%A6%BF?node-id=1-2419&t=R75x74qcWEmoSdA5-1',
    },
    docs: {
      description: {
        story: '🎨 **Small Button**: 작은 사이즈 버튼의 디자인 구현을 검토해보세요.'
      }
    }
  },
};

// 🧪 테스트용 추가 스토리
export const TestWithMultipleDesigns = {
  args: {
    primary: true,
    label: 'Test Button',
  },
  parameters: {
    design: [
      {
        type: 'figma',
        name: '🎨 Original Design',
        url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/%EC%84%9C%EC%8A%B9%EC%97%B0-%EC%8B%A4%EC%8A%B5-%ED%85%9C%ED%94%8C%EB%A6%BF?node-id=1-2419&t=R75x74qcWEmoSdA5-1',
      },
      // 새로운 디자인 버전이 있다면 여기에 추가
      // {
      //   type: 'figma',
      //   name: '🔄 Updated Design',
      //   url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/...?node-id=NEW-NODE-ID'
      // }
    ],
    docs: {
      description: {
        story: '🧪 **테스트 스토리**: 여러 디자인 버전을 비교할 수 있는 테스트용 스토리입니다.'
      }
    }
  },
};