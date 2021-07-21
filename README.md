# react-recoil-cookiecutter

이름은 거창한데 뭐 하나 테스트 할 때 하나하나 셋업하기 귀찮아서 만듦🐸


사용된 패키지 : 
- CRA (ts)
- storybook
- recoil
- dart-sass
- react-router-dom
- i18next
- prettier


## 프로젝트 구조에 대해

Atomic design을 따르고 있음.
https://brunch.co.kr/@ultra0034/63

다만 지나치게 많이 나누는 것은 불편하기 떄문에 molecules와 organisms를 하나로 합쳐 module로 통합, atom - module - template - page의 4단계로 분리하고 있다.

실제 사용되지 않으나 만들 필요가 있는 컴포넌트가 있을 시에는 components/etc에 대충 던져놓을 것.

