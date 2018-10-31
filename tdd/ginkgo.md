# Ginkgo

## TDD

BDD (Behavior Driven Development)의 설명을 보면 TDD (Test Driven Development)와 흡사함을 넘어 한 한 종류라는 것을 알 수 있다.
TDD는 테스트 케이스를 먼저 작성하고 (결과물의 스펙 정의) 작업을 하는 개발 방식을 말한다.
주로 TDD를 논할때 3단계로 나눠서 설명을 한다:
    
    1. RED: 실패하는 테스틀 먼저 작성
    
    2. GREEN: 실패하는 테스트를 성공하게끔 코드로 구현
    
    3. REFACTOR: 구현된 코드를 가독성/성능을 높이기 위해 수정

## BDD
Ginkgo는 Golang에서 지원하는 BDD (Behavior Driven Development) 테스팅 프레임워크다. 
말 그대로 행위 주도된 개발이기 때문에 지금 작업이 무슨 의도로, 어떤 "행위"를 수행하는지를 인지하고 테스트 케이스를 작성해야한다.

    - Describe: 시나리오의 전반적인 흐름을 위해 큰 틀을 잡아주는 역할 ("무엇을 테스트 하는가?")
    - BeforeEach: 만약 같은 코드가 중복으로 구현되야 할 경우 상위 BeforeEach에 넣어주면 중복을 제거할 수 있다. ("Describe 단위에서 fixture 정리") 
    - Context: Describe 하위에 생길 수 있는 케이스들을 나눠서 나열하는 기능. ("어떤 조건에서 테스트 하는가?")
    - It: 실질적인 테스팅 단위 ("Describe에 나온 무엇이 어떤 액션을 취해야 테스트를 통과하는가?")

이런 요소들이 존재하지만 테스팅에 있어서 딱히 정답은 없다.
이 요소들을 효율적으로, 적절한 용도에 써서 테스트 코드의 가독성 최대한 높이는게 BDD의 목적이다.

## Installation
이 [링크](https://onsi.github.io/ginkgo/)를 통해서 Ginkgo를 설치하는 방법을 알 수 있다.

