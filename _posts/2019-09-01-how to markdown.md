---
layout: post
title: "마크다운 작성 요령"
---

상단이 표기법 하단이 출력값 입니다.

```
# 제목
## 제목
### 제목
#### 제목
##### 제목
###### 제목
```

# 제목
## 제목
### 제목
#### 제목
##### 제목
###### 제목

<br>

```
---
***
___ (underline)
```

---
***
___

<br>

```
문단은 그냥 작성하면 된다.

문단의 구분은
한칸의 공백으로 한다.
```

문단은 그냥 작성하면 된다.

문단의 구분은
한칸의 공백으로 한다.

<br>

```
참고 : [링크](https://baejino.com/jekyll/markdown)

[제목](#제목)으로 이동
```

참고 : [링크](https://baejino.com/jekyll/markdown)

[제목](#제목)으로 이동

<br>

```
![이미지 설명](/assets/images/posts/jekyll.png)
```

![이미지 설명](http://baealex.run.goorm.io/image/react/%EC%95%84%EC%9D%B4%EC%9C%A0%20%EA%B7%B8%EB%82%A0%EC%97%94.gif)

<br>

```
*이탤릭* **볼드** ***이탤릭볼드***

_이탤릭_ __볼드__ ___이탤릭볼드___
```

*이탤릭* **볼드** ***이탤릭볼드*** 

_이탤릭_ __볼드__ ___이탤릭볼드___

<br>

```
~~취소선~~
```

~~취소선~~

<br>

```
> 인용문구

> 인용문구
>> 중첩 인용문구
```

> 인용문구

> 인용문구
>> 중첩 인용문구

<br>

```
- 순서없는 과일의 종류
  - 포도
  - 사과
  - 오렌지
```

- 순서없는 과일의 종류
  - 포도
  - 사과
  - 오렌지

<br>

```
- 순서있는 과일먹는 방법
  1. 과일을 씻는다.
    - 혹시모를 농약을 제거하기 위함
  1. 껍질을 제거한다.
  1. 맛있게 먹는다.
```

- 순서있는 과일먹는 방법
  1. 과일을 씻는다.
    - 혹시모를 농약을 제거하기 위함
  1. 껍질을 제거한다.
  1. 맛있게 먹는다.

<br>

```
| 구분 | 남자 | 여자 |
|-----|-----|-----|
| 1 | 30 | 30 |
| 2 | 30 | 30 |
| 3 | 30 | 30 |
```

| 구분 | 남자 | 여자 |
|-----|-----|-----|
| 1 | 30 | 30 |
| 2 | 30 | 30 |
| 3 | 30 | 30 |

<br>

```
`int i = 0`으로 변수를 초기화 한다.
```

`int i = 0`으로 변수를 초기화 한다.

<br>
<div class="highlighter-rouge">
<div class="highlight">
<pre class="highlight">
```c
#include &lt;stdio.h&gt;

int main(void) {
    printf("Hello World!");
    return 0;
}
```
</pre>
</div>
</div>

```c
#include <stdio.h>

int main(void) {
    printf("Hello World!");
    return 0;
}
```

<br>

```
<span style="color:red;">빨간색</span>으로 글자 표시
```

<span style="color:red;">빨간색</span>으로 글자 표시

<br>

```
<p style="text-align:center">글자 중앙에 배치</p>
```

<p style="text-align:center">글자 중앙에 배치</p>

<br>

```
<br>
```

줄바꿈