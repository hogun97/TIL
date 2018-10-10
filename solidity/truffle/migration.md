# Migration

README에 설명되어있듯, Migration은 Truffle에서 제공하는 편리한 기능 중 하나입니다.

실제 이더리움 네트워크에서는 계약을 배포할때마다 수수료를 지불해야하는 부담이 존재한다. 그와 다르게 Truffle 환경은 가상환경이라 사용자는 본인에게 무한히 많은 가스를 지불할 수 있게끔 설정 할 수 있다.
그리고 블록체인 상에서 계약을 배포하는 행위는 거래와 똑같이 취급되며 한번 거래가 이루어지면 철회가 불가능하다.

Migration은 그 부분을 해결하기 위한 구조다:
계약 작성자가 새 내용을 추가할때 기존 버전에서 바뀐 부분만 배포할 수 있는 환경을 제공한다.

## Initial Migration

Solidity와 Truffle을 이용해서 개발을 시작할때 "truffle init"으로 Migrations.sol 파일이 생성된다. 
Migrations.sol 파일에는:
    uint public last-completed-migration
    function setCompleted(uint completed) public restricted
    function upgrade(address new-address) public restricted 
등의 변수와 함수들이 존재하고 이들을 이용해서 migration의 버전 컨트롤을 한다.
