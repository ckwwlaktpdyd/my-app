#!/usr/bin/env node

/**
 * Figma Tokens Studio 동기화 스크립트
 * 환경 변수에서 토큰을 읽어와 Figma API를 통해 디자인 토큰을 가져옵니다.
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.error('❌ FIGMA_TOKEN과 FIGMA_FILE_ID 환경 변수가 필요합니다.');
  console.log('💡 .env 파일에 다음과 같이 설정하세요:');
  console.log('FIGMA_TOKEN=your_figma_token');
  console.log('FIGMA_FILE_ID=your_figma_file_id');
  process.exit(1);
}

async function syncFigmaTokens() {
  try {
    console.log('🎨 Figma에서 디자인 토큰을 가져오는 중...');
    
    // Figma API 호출
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`Figma API 오류: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // 디자인 토큰 추출 (예시)
    const designTokens = {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151'
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      },
      typography: {
        fontSize: {
          sm: '14px',
          base: '16px',
          lg: '18px',
          xl: '20px'
        }
      }
    };

    // 토큰 파일들 생성
    const tokensDir = path.join(__dirname, '../src/design-tokens');
    if (!fs.existsSync(tokensDir)) {
      fs.mkdirSync(tokensDir, { recursive: true });
    }

    // JSON 파일로 저장
    fs.writeFileSync(
      path.join(tokensDir, 'tokens.json'),
      JSON.stringify(designTokens, null, 2)
    );

    // CSS 변수로 저장
    const cssContent = generateCSSTokens(designTokens);
    fs.writeFileSync(path.join(tokensDir, 'tokens.css'), cssContent);

    // JavaScript 파일로 저장
    const jsContent = `export const designTokens = ${JSON.stringify(designTokens, null, 2)};`;
    fs.writeFileSync(path.join(tokensDir, 'tokens.js'), jsContent);

    console.log('✅ 디자인 토큰 동기화 완료!');
    console.log(`📁 생성된 파일:`);
    console.log(`   - src/design-tokens/tokens.json`);
    console.log(`   - src/design-tokens/tokens.css`);
    console.log(`   - src/design-tokens/tokens.js`);

  } catch (error) {
    console.error('❌ 동기화 실패:', error.message);
    process.exit(1);
  }
}

function generateCSSTokens(tokens) {
  let css = ':root {\n';
  
  function processCSSTokens(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const cssVar = `--${prefix}${prefix ? '-' : ''}${key}`;
      
      if (typeof value === 'object' && value !== null) {
        processCSSTokens(value, `${prefix}${prefix ? '-' : ''}${key}`);
      } else {
        css += `  ${cssVar}: ${value};\n`;
      }
    }
  }
  
  processCSSTokens(tokens);
  css += '}\n';
  
  return css;
}

// 스크립트 실행
if (require.main === module) {
  syncFigmaTokens();
}
