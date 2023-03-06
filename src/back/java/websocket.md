# WebSocket

## 1,引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

## 2,开启WebSocket支持

```java

@Configuration
public class WebSocketConfig {
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
```

## 3,编写WebSocket服务端

```java

@Slf4j
@Component
@ServerEndpoint(value = "/websocket")
public class WebSocketServer {
    //用来统计连接客户端的数量
    private static final AtomicInteger OnlineCount = new AtomicInteger(0);
    // concurrent包的线程安全Set，用来存放每个客户端对应的Session对象。
    private static CopyOnWriteArraySet<Session> SessionSet = new CopyOnWriteArraySet<>();

    @OnOpen
    public void onOpen(Session session) {
        SessionSet.add(session);
        int cnt = OnlineCount.incrementAndGet();
        System.out.println("有新连接加入！当前在线人数为" + cnt);
    }

    @OnClose
    public void onClose(Session session) {
        SessionSet.remove(session);
        int cnt = OnlineCount.decrementAndGet();
        System.out.println("有一连接关闭！当前在线人数为" + cnt);
    }

    @OnMessage
    public void onMessage(String message, Session session) throws IOException {
        System.out.println("来自客户端的消息:" + message);
        sendMessage(session, "Echo消息内容："+message);
    }

    private static void sendMessage(Session session, String message) throws IOException {

        session.getBasicRemote().sendText(String.format("%s (From Server，Session ID=%s)",message,session.getId()));

    }
    /**
     * 出现错误
     */
    @OnError
    public void onError(Session session, Throwable error) {
        log.error("发生错误：{}，Session ID： {}",error.getMessage(),session.getId());
    }

    /**
     * 群发自定义消息
     * */
    public static void sendInfo(String message) throws IOException {
        for (Session session : SessionSet) {
            if(session.isOpen()) {
                sendMessage(session, message);
            }
        }
    }
}
```

## 4,编写WebSocket客户端

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>websocket测试</title>
    <style type="text/css">
        h3,h4{
            text-align:center;
        }
    </style>
</head>
<body>

<h3>请输入要发送给服务器端的消息：</h3><br/>

<label for="text">输入发送信息</label><input id="text" type="text" />
<button onclick="sendToServer()">发送服务器消息</button>
<button onclick="closeWebSocket()">关闭连接</button>
<br>
信息:
<span id="message">

</span>
<script type="text/javascript">
    var socket;
    if (typeof (WebSocket) == "undefined") {
        console.log("遗憾：您的浏览器不支持WebSocket");
    } else {
        socket = new WebSocket("ws://192.168.0.177:8080/websocket");
        //连接打开事件
        socket.onopen = function() {
            console.log("Socket已打开");
        };
        //收到消息事件
        socket.onmessage = function(msg) {
            document.getElementById('message').innerHTML += msg.data + '<br/>';
        };
        //连接关闭事件
        socket.onclose = function() {
            console.log("Socket已关闭");
        };
        //发生了错误事件
        socket.onerror = function() {
            alert("Socket发生了错误");
        };

        //窗口关闭时，关闭连接
        window.unload=function() {
            socket.close();
        };
    }

    //关闭连接
    function closeWebSocket(){
        socket.close();
    }

    //发送消息给服务器
    function sendToServer(){
        var message = document.getElementById('text').value;
        socket.send(message);
    }
</script>

</body>
</html>
```
