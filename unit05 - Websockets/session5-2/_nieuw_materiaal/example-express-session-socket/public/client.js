(function () {
  const messages = document.querySelector("#messages");
  const wsButton = document.querySelector("#wsButton");
  const wsSendButton = document.querySelector("#wsSendButton");
  const logout = document.querySelector("#logout");
  const login = document.querySelector("#login");

  function showMessage(message) {
    messages.textContent += `\n${message}`;
    messages.scrollTop = messages.scrollHeight;
  }

  async function handleResponse(response) {
    return response.ok
      ? response.json().then((data) => JSON.stringify(data, null, 2))
      : Promise.reject(new Error("Unexpected response"));
  }

  login.onclick = () => {
    fetch("/login", { method: "POST", credentials: "same-origin" })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };

  logout.onclick = () => {
    fetch("/logout", { method: "DELETE", credentials: "same-origin" })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };

  let ws;

  wsButton.onclick = function () {
    if (ws) {
      ws.onerror = ws.onopen = ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket("ws://localhost:3000");

    ws.onerror = function () {
      showMessage("WebSocket error");
    };
    ws.onopen = function () {
      showMessage("WebSocket connection established");
    };
    ws.onmessage = (messageEvent) => {
      showMessage(`Client Websocket Received: ${messageEvent.data}`);
    };
    ws.onclose = function () {
      showMessage("WebSocket connection closed");
      ws = null;
    };
  };

  wsSendButton.onclick = function () {
    if (!ws) {
      showMessage("No WebSocket connection");
      return;
    }

    ws.send("Hello World!");
    showMessage('Client WebSocket Sent "Hello World!"');
  };
})();
