# Wanted Front-end onBoarding # 6

## Demo Link

🔗 Demo Page :

## 💬 프로젝트 개요

솔라커넥트: 소팅 기능을 가진 프로그램 구현

## 😀 프로젝트 멤버

| 이름   | GitHub                                    | 역할 |
| ------ | ----------------------------------------- | ---- |
| 김승원 | [lumpenop](https://github.com/lumpenop)   | ~    |
| 남택훈 | [tech-hoon](https://github.com/tech-hoon) | ~    |

## 🪄 실행 방법

#### Project setup

`npm install`

#### Compiles and hot-reloads for development

`npm start`

## 🔧 Skills

- React, Styled Components, ES6+

## 🐱‍👤 협업 Tool

- Slack, Github

## 👍🏻 구현 기능 상세

**과제 요약**

- 소팅 기능을 가진 서비스입니다.
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과가 나타납니다.

**과제 조건**

1. 타이머

- [1, 6. 타이머]는 재활용이 가능한 Component로 구성합니다.
- [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)
- [6. 타이머]는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)
- 한국 표준시를 기준으로 나타냅니다.

2. 입력

- 사용자의 입력을 받습니다.
- 입력 데이터의 형식은 “숫자,숫자,숫자…” 입니다. (예> 1,2,3,4)
- 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.

3. 시작

- 사용자가 버튼을 누르면 소팅이 시작됩니다.
- [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 됩니다.

4. 결과

- 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)
- [4. 결과 필드]에서는 오름차순 결과를 나타냅니다.
- [5. 결과 필드]에서는 내림차순 결과를 나타냅니다.
- 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

5. 기타 조건

- ReactJS로 구현합니다.
- 과제를 위한 추가적인 패키지 설치는 자유입니다.
- 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현합니다.
- 상기 조건을 제외한 모든 부분들은 작성자 편의에 맞게 구현합니다.

**추가**

- 과제 수행중에 참고했던 사이트가 있다면 README.md 파일에 출처를 기입합니다.
  - 예> 정렬알고리즘 : https://정렬알고리즘.co.kr

> ### 과제 구현 목록
>
> - [x] FunctionComponent 사용
> - [x] LocalStorage 사용해서 이력을 관리
> - [x] 권한에 따라 접근 페이지 관리
> - [x] 외부 API를 사용하지 않고, Client의 리소스만 사용
> - [x] 편리하게 Storage를 사용할 수 있는 Utils 생성
> - [x] Table, 검색 기능 등 관련 UI 구성

### 2. 프로젝트 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Input.jsx
 ┃ ┣ 📜Result.jsx
 ┃ ┣ 📜StartButton.jsx
 ┃ ┣ 📜Timer.jsx
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┗ 📜sort.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┗ 📜index.js
```

## Reference

정규식: https://regexr.com/

---
