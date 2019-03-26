# 객체

- 내장 객체: JavaScript 엔진이 객체를 생성할 수 있는 함수가 내장되어, 필요한 경우에 생성하여 사용 가능하다.
    + 수학 객체 (Math Object)
    + 문자열 객체 (String Object)
    + 배열 객체 (Array Object)

```js
var car = new Object();
car.color = "white";
car.price = "10,000,000 KRW";
car.getInfo = function() {
    document("color: ", this.color, "<br>");
    document("price: ", this.price, "<br>");
}

// new 키워드 써서 객체 생성해도 되고 아래처럼 해도 된다.
var car = {
    "color": "white",
    "price": "10,000,000 KRW",
    "getInfo": function() {
        document("color: ", this.color, "<br>");
        document("price: ", this.price, "<br>");
    }
}
```

- 브라우저 객체 (Browser Object Model)
    + window - `document`, `screen`, `location`, `history`, `navigator`

