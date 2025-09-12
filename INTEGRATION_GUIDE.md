# 🚀 GitHub + Figma + Storybook 완벽 연동 가이드

이 가이드는 GitHub, Figma, Storybook을 완벽하게 연동하는 방법을 단계별로 설명합니다.

## 📋 목차
1. [현재 설정 상태](#현재-설정-상태)
2. [GitHub Secrets 설정](#github-secrets-설정)
3. [Figma 연동 확인](#figma-연동-확인)
4. [자동화 워크플로우](#자동화-워크플로우)
5. [사용 방법](#사용-방법)
6. [트러블슈팅](#트러블슈팅)

## ✅ 현재 설정 상태

### 이미 완료된 설정들:
- ✅ **Storybook 설치 및 구성**
- ✅ **@storybook/addon-designs 애드온 설치**
- ✅ **Button 컴포넌트에 Figma 디자인 연결**
- ✅ **Chromatic 계정 연결 및 설정**
- ✅ **GitHub 저장소 연결**
- ✅ **GitHub Actions 워크플로우 생성**

### 프로젝트 정보:
- **GitHub 저장소**: `https://github.com/ckwwlaktpdyd/my-app.git`
- **Chromatic 프로젝트 ID**: `68c3661294463ed02348b6d9`
- **Figma 디자인 URL**: 이미 Button.stories.js에 연결됨
- **Storybook 로컬 주소**: `http://localhost:6006`

## 🔐 GitHub Secrets 설정

GitHub Actions가 Chromatic에 자동 배포하려면 프로젝트 토큰이 필요합니다.

### 1단계: Chromatic 프로젝트 토큰 확인
터미널에서 이미 설정된 토큰을 확인할 수 있습니다:
```bash
# package.json에서 토큰 확인
grep "chromatic" package.json
```

### 2단계: GitHub Secrets에 토큰 추가
1. **GitHub 저장소로 이동**: https://github.com/ckwwlaktpdyd/my-app
2. **Settings** 탭 클릭
3. **Secrets and variables** → **Actions** 선택
4. **New repository secret** 버튼 클릭
5. 다음 정보로 Secret 생성:
   - **Name**: `CHROMATIC_PROJECT_TOKEN`
   - **Secret**: `chpt_6b1d9b9fdbdfa15` (package.json에서 확인된 토큰)

### 3단계: GitHub Pages 활성화 (선택사항)
Storybook을 GitHub Pages로 배포하려면:
1. **Settings** → **Pages** 이동
2. **Source**: GitHub Actions 선택
3. 워크플로우가 실행되면 자동으로 배포됩니다.

## 🎨 Figma 연동 확인

### 현재 연동 상태:
```javascript
// stories/Button.stories.js에 이미 설정됨
parameters: {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/7YaZcmb7hUIj0nqV1o0T2E/...'
  }
}
```

### Figma에서 확인할 점들:
1. **파일 접근 권한**: 팀원들이 Figma 파일에 접근할 수 있는지 확인
2. **프레임 이름**: 각 컴포넌트별로 명확한 프레임 이름 설정
3. **링크 공유**: "Anyone with the link" 권한으로 설정

## 🤖 자동화 워크플로우

### 1. Chromatic 배포 워크플로우 (.github/workflows/chromatic.yml)
- **트리거**: main/develop 브랜치 푸시, Pull Request
- **기능**: 
  - Storybook 자동 빌드
  - Chromatic에 자동 배포
  - 시각적 회귀 테스트
  - GitHub Pages 배포

### 2. Figma 동기화 워크플로우 (.github/workflows/figma-sync.yml)
- **트리거**: 수동 실행, 스케줄 실행
- **기능**:
  - Figma 디자인 토큰 추출
  - 자동 커밋 및 푸시
  - Storybook 재빌드

## 🚀 사용 방법

### 일상적인 개발 플로우:

1. **컴포넌트 개발**:
   ```bash
   # Storybook 실행
   npm run storybook
   
   # 브라우저에서 http://localhost:6006 접속
   # Design 탭에서 Figma와 비교하며 개발
   ```

2. **코드 푸시**:
   ```bash
   git add .
   git commit -m "feat: Update Button component"
   git push origin main
   ```

3. **자동화된 프로세스**:
   - GitHub Actions가 자동으로 Chromatic에 배포
   - 시각적 변경사항 감지 및 리뷰 요청
   - GitHub Pages에 Storybook 배포

### Figma 디자인 업데이트 시:

1. **수동 동기화**:
   - GitHub → Actions → "Figma Design Sync" → "Run workflow"

2. **자동 동기화**:
   - 매일 오전 9시 자동 실행 (설정됨)

## 🔍 연동 확인 체크리스트

### Storybook ✅
- [ ] `npm run storybook`으로 실행 가능
- [ ] Button 컴포넌트에서 "Design" 탭 확인
- [ ] Figma 디자인이 올바르게 표시됨

### GitHub Actions ✅
- [ ] `.github/workflows/` 파일들이 생성됨
- [ ] `CHROMATIC_PROJECT_TOKEN` Secret 설정됨
- [ ] 첫 번째 워크플로우 실행 성공

### Chromatic ✅
- [ ] https://www.chromatic.com/build?appId=68c3661294463ed02348b6d9 접속 가능
- [ ] 빌드 히스토리 확인
- [ ] 시각적 테스트 결과 확인

## 🛠 트러블슈팅

### 일반적인 문제들:

1. **Chromatic 토큰 오류**:
   ```bash
   # 토큰 확인
   npx chromatic --project-token=your-token
   ```

2. **Figma 디자인이 로드되지 않음**:
   - Figma 파일 권한 확인
   - URL 형식 확인
   - 네트워크 연결 확인

3. **GitHub Actions 실패**:
   - Secrets 설정 확인
   - 워크플로우 로그 확인
   - Node.js 버전 호환성 확인

### 유용한 명령어들:

```bash
# Storybook 빌드 테스트
npm run build-storybook

# Chromatic 수동 배포
npm run chromatic

# Git 상태 확인
git status
git log --oneline -10
```

## 🎯 다음 단계 제안

1. **추가 컴포넌트에 Figma 연동**:
   - Header, Page 컴포넌트에도 디자인 URL 추가

2. **디자인 토큰 시스템 구축**:
   - Figma Variables를 CSS Custom Properties로 변환
   - 색상, 타이포그래피, 간격 토큰 자동화

3. **고급 테스팅**:
   - 시각적 회귀 테스트 규칙 세밀화
   - 접근성 테스트 추가
   - 성능 모니터링

4. **팀 협업 최적화**:
   - PR 템플릿에 Storybook 링크 자동 추가
   - 디자인 리뷰 프로세스 자동화

---

## 📞 지원 및 문의

문제가 발생하거나 추가 기능이 필요하시면 언제든지 말씀해 주세요!

- **Storybook 공식 문서**: https://storybook.js.org/docs
- **Chromatic 가이드**: https://www.chromatic.com/docs
- **Figma for Developers**: https://www.figma.com/developers
