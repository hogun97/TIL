# RSpec - Better Spec

TDD를 지향하면 test case를 먼저 만들고 그 test case들을 통과시키는 코드를 구현하는걸 목표로 둔다.

Test case를 짜는 과정에서 목표하는 결과물의 사양(Spec) 정의를 더 명확하게 명시하기 위해 RSpec을 쓴다.

RSpec에서 제시하는 키워드는 세가지다:

1. describe: 한 unit 테스트의 주어를 가르키는 키워드 (무엇)
2. context: describe에서 명시하는 주어를 어떤 특수한 경우에서 테스트 할지 나타내는 키워드 (언제)
    - 전치사로 시작한다: 주로 'when'
3. it: it은 describe를 대체한다
    - it 다음에 오늘 시나리오는 describe의 주어가 어떤 결과를 보여줘야 테스트가 성공하는지 알려준다 (어떻게)

---

Ex) 만약 "사용자는 HP가 충분해야 공격할 수 있다"를 테스트하고 싶다면:

```
describe('character')
    context('when HP is enough')
        it('can attack')
    context('when HP is not enough')
        it('can not attack')
```

위 예시에서 사용자가 HP가 충분/부족할 때를 둘다 테스트한다. 두 경우 모두 키워드들을 뺀 시나리오 문장으로써도 명확하다.
- character, when HP is enough, can attack
- character, when HP is not enough, can not attack
