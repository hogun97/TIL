# Travis CI

Travis CI는 GitHub에서 소프트웨어 프로젝트를 빌드하고 테스트하는데 사용되는 서비스입니다.

여러가지 사용처를 고려해 Travis에서는 세가지 버젼을 제공한다:
1. 오픈소스 프로젝트는 [여기](www.travis-ci.org)를 클릭해서 무료로 테스트 가능  
2. 개인 프로젝트는 [여기](www.travis-ci.com)를 클릭해서 유료로 테스트 가능
3. 고유 하드웨어에 독점 버젼으로 가능한 TravisPro도 있다

Travis CI는 .travis.yml이라는 파일로 구성돼있는데 이 파일 안에는 다음 항목들이 명시돼있다:
    - 사용되는 프로그래밍 언어 - Travis CI에서는 다양한 언어를 지원 [Wikipedia](https://en.wikipedia.org/wiki/Travis_CI)에서 확인 가능.
    - 원하는 빌드 환경
    - 원하는 테스트 환경 (필요한 패키지 등등)
    - 이 사항들 이외에 필요한 세부사항들

GitHub안에서 원하는 repository에 Travis CI를 적용했을때 새로운 commit이 push되거나 pull request가 생기면 GitHub에서 알림이 온다.
새로운 commit이나 pull request가 생겼을때 Travis CI는 .travis.yml에 명시된 명령어들과 세부사항들을 참고해서 테스트를 돌린다.
테스트가 완료되면 테스트 결과를 사용자에게 보낸다 (보내는 방식은 설정 가능 - 대부분 이메일로 설정).

테스트가 성공하면 좋지만 실패할 경우 Travis CI에서는 실패한 이유를 보여준다.
    - 특히 프로젝트의 사이즈가 커지면서 여러 파일을 바꿨을때 주의해야한다.
    - 그런 경우 로컬에서 모든 변경사항을 테스트 하지않고 commit이나 pull request 보내는 실수를 범할 수도 있다.
    - 이럴때 Travic CI에서 테스트가 실패한다는 결과가 나와도 어떤 부분에서 에러가 뜨는지 알기 쉽지않다.
    - 그런 상황에서 Travis CI의 error log를 쓰면 간단해진다.    
 

