# 원티드 프리온보딩(프론트엔드) - 솔라커넥트

## 프로젝트 개요
- 정렬과 타이머 기능을 가진 프로그램 구현
- [솔라커넥트](https://www.solarconnect.kr/)에서 제공하는 케이스형 과제

## 데모 링크
[https://pob-coconut.github.io/Assignment6-TH-SW](https://pob-coconut.github.io/Assignment6-TH-SW)

## 프로젝트 멤버

| 이름   | GitHub                                    | 역할 |
| ------ | ----------------------------------------- | ---- |
| 김승원 | [lumpenop](https://github.com/lumpenop)   | 정렬 |
| 남택훈 | [tech-hoon](https://github.com/tech-hoon) | 타이머, 유효성 검증, CSS|

## 실행 방법

#### Setup

`npm install`

#### Run

`npm start`

## 구현 기능
1. 정규표현식을 이용한 `input`의 유효성 검사 및 예외 처리
```javascript
const regex = /([0-9]+,){1,}([0-9+]+)/
```
2. 한국 시간에 맞게 `Date` 객체 생성 
```javascript
const UTC = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
const KST = UTC + TIME_OFFSET; // OFFSET = 9h
const KR_TIME = new Date(KST).toLocaleDateString(type, options);
```
3. `Merge Sort`를 통한, 오름/내림차순 정렬 구현 
4. `useInput`, `useTimer` 등 custom hook
5. 재사용 가능한 `Timer`, `Result` 컴포넌트 구성

## 데모 영상
![sorting-demo](https://user-images.githubusercontent.com/19265753/129859843-1e95a2e6-1f91-4644-b909-756087bebad4.gif)

## 참고
Regular Expression: https://regexr.com/

Date object: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

---
