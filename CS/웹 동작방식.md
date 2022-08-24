## 웹 동작방식
주소창에 주소를 입력한 뒤 엔터를 입력했을 때 일어나는 과정
#### :star:기본 용어 정리:star:
- DNS : Domain Name System Servers
  - `도메인 이름 시스템 서버`로 URL들의 이름과 IP 주소를 저장하고 있는 DB
  - 웹사이트를 기록한 주소록
  - EX) `www.jinyong.com` => 11.111.111.111 
- TCP/IP : Transmission Control Protocol / Internet Protocol
  - **패킷 통신 방식**의 `전송 제어 프로토콜`과 `인터넷 프로토콜`로 이루어진 것
  - IP(인터넷 프로토콜)은 패킷 전달 여부를 보증하지 않고, 패킷을 보낸 순서와 받는 순서가 다를 수 있다
  - TCP(전송 제어 프로토콜)은 IP 위에서 동작하는 프로토콜로써, 데이터의 전달을 보증하고 보낸 순서대로 받게 해주는 역할을 한다
  - IP 주소를 사용해 데이터를 전달하고 해당 데이터가 정상적으로 전달되었는지에 대한 것
- HTTP : Hypertext Transfer Protocol
  - 클라이언트와 서버가 서로 통신할 수 있게 하기 위한 규약
- 관계도
  ![관계도](frontend/image.assets/%EC%9B%B9%20%EB%8F%99%EC%9E%91%EB%B0%A9%EC%8B%9D.PNG)
- 