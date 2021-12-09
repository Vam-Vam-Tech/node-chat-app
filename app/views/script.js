var socket = io("https://pyaw-ya-aung.herokuapp.com/");

let user;

function onChat() {
  var userName = document.getElementById("name").value;
  user = userName;
  var infoWrapper = document.getElementById("info-wrapper");
  infoWrapper.className = "hidden";
  var messageWrapper = document.getElementById("message-wrapper");
  messageWrapper.className =
    " w-96 bg-purple-300 h-4/5 flex flex-col justify-center items-center overflow-y-scroll rounded";
  socket.emit("user_connected_to_server", { name: userName });
}

function sendMessage() {
  var messageText = document.getElementById("message").value;
  socket.emit("send_message", { message: messageText, user });
}

socket.on("brocast_message", (data) => {
    if (data.data.user !== user) {
      var content = `<div class="mt-2 bg-purple-900 ml-4 mr-16 rounded p-2 text-gray-300">
  <span class="block">
    ${data.data.message}
  </span>
</div>`;
  var contentBox = document.getElementById("content-box");
  contentBox.innerHTML += content;
    } else {
      var content = `<div class="mt-2 bg-purple-200 ml-16 mr-4 rounded p-2 text-purple-900">
      <span class="block">
      ${data.data.message}
      </span>
    </div>
  </div>`;
  var contentBox = document.getElementById("content-box");
  contentBox.innerHTML += content;
    }
  console.log(data);
});

socket.on("user_connected", (data) => {
  var noti = document.getElementById("noti");
  noti.innerText = data.name + " is connected.";
});

socket.on("user_connected", (data) => {
  var noti = document.getElementById("noti");
  noti.innerText = data.name + " is connected.";
});
