# Typescript로 리팩토링 과제

[원본 프로젝트](https://github.com/wsdx123/todo-sparta)

<br>
<br>

## 🚀 배포

업로드 예정

<br>
<br>

## 🔧 기술 스택

- Typescript
- Styled-components
- Redux
- React-router-dom

<br>
<br>

## 📌 실행 방법

```
git clone https://github.com/wsdx123/ts-todo.git
```

```
yarn install && yarn start
```

<br>
<br>

## 🐝 어려웠던 점

- root가 있는 index.js 파일을 ts로 리팩토링 시, **무조건** .tsx확장자로 선언해줘야 한다. js와 달리 ts는 자동으로 tsx 변환을 시키지 못하여 redux provider나 react-router가 사용할수 없게 된다.

- 타입스크립트로 리팩토링 하는것 외적으로, git 이 파일/폴더의 대소문자를 구분하지 못한다. 그래서 폴더명을 변경하고 git에 push 했을때 약간의 문제가 있었다. 터미널에 `git config core.ignorecase false` 라는 명령어를 사용하면 대소문자도 감지할수 있게 세팅된다. ( `git rm -r --cached` 라는 명령어도 이후에 입력하고 add/commit/push를 해야 오류를 방지할 수 있다)
