# `log.fatalln()` vs `panic`

## `log.fatalln()`
- `log.fatalln()`은 os.Exit(1)로 error log를 출력한다.
- Error log 출력 후에 프로그램을 완전히 종료한다.
- 프로그램이 종료될때 call stack없이 종료된다. 

## `panic`
- `panic`은 시간과 error log를 둘다 출력한다
- 한 함수 안에서 `panic`이 호출되면 그 함수의 실행은 멈추고 다른 defer된 함수가 실행된다. Runtime error라고 볼 수 있다.
- Recover 함수를 만날 경우 `panic` 상태를 제거하고 다시 동작한다. 
- Defer된 함수들이 실행되고나서 call stack이 전부 출력된다.

## 결론
- Call stack의 유무 때문에 디버깅하는 입장에서는 `panic`을 선호하게 된다. 함수가 어디서 죽었는지, 왜 에러가 나는지 추적하기가 더 쉽기 때문.
- `log.Fatalln()`은 recover 불가능하기 때문에 에러가 나도 프로그램을 종료하지 않고 디버깅을 시도하려고 할때는 `panic`이 더 좋은 선택이다. 
