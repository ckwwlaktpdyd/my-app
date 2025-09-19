// Tokens Studio for Figma 설정
module.exports = {
  // Figma 설정
  figma: {
    token: process.env.FIGMA_TOKEN,
    fileId: process.env.FIGMA_FILE_ID,
  },
  
  // 토큰 출력 설정
  output: {
    // CSS 변수로 출력
    css: {
      destination: 'src/design-tokens/tokens.css',
      format: 'css/variables'
    },
    
    // JavaScript 객체로 출력
    js: {
      destination: 'src/design-tokens/tokens.js',
      format: 'javascript/es6'
    },
    
    // JSON 파일로 출력
    json: {
      destination: 'src/design-tokens/tokens.json',
      format: 'json'
    }
  },
  
  // 변환 규칙
  transform: {
    // px 단위 변환
    'size/px': {
      type: 'value',
      matcher: (token) => token.type === 'sizing',
      transformer: (token) => `${token.value}px`
    },
    
    // 색상 변환
    'color/hex': {
      type: 'value', 
      matcher: (token) => token.type === 'color',
      transformer: (token) => token.value
    }
  }
};
