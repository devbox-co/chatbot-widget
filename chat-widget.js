document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.innerHTML = `
  .hidden {
    display: none;
  }
  #chat-widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
  }
  #chat-popup {
    height: 75vh;
    max-height: 75vh;
    transition: all 0.3s;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    #chat-popup {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
    }
  }
  .dot-falling {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    box-shadow: 9999px 0 0 0 #9880ff;
    animation: dot-falling 1s infinite linear;
    animation-delay: 0.1s;
  }
  .dot-falling::before, .dot-falling::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-falling::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-falling-before 1s infinite linear;
    animation-delay: 0s;
  }
  .dot-falling::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-falling-after 1s infinite linear;
    animation-delay: 0.2s;
  }
  @keyframes dot-falling {
    0% {
      box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%, 50%, 75% {
      box-shadow: 9999px 0 0 0 #9880ff;
    }
    100% {
      box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-before {
    0% {
      box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%, 50%, 75% {
      box-shadow: 9984px 0 0 0 #9880ff;
    }
    100% {
      box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-after {
    0% {
      box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%, 50%, 75% {
      box-shadow: 10014px 0 0 0 #9880ff;
    }
    100% {
      box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  .widget-w-16 {
    width: 4rem;
  }
  .widget-h-16 {
      height: 4rem;
  }
  .widget-bg-gray-800 {
      background-color: rgb(0 0 0 / 1);
      color: #f9fafb;
  }
  .widget-rounded-full {
      border-radius: 9999px;
  }
  .widget-flex {
      display: flex;
  }
  .widget-items-center {
      align-items: center;
  }
  .widget-justify-center {
      justify-content: center;
  }
  .widget-mb-3{
      margin-bottom: 10px;
  }
  .cursor-pointer {
      cursor: pointer;
  }
  .widget-text-3xl {
      font-size: 1.875rem;
  }
  .widget-w-10 {
      width: 2.5rem;
  }
  .widget-h-10 {
      height: 2.5rem;
  }
  .widget-text-white {
      color: #ffffff;
  }
  .hidden {
      display: none;
  }
  .widget-absolute {
      position: absolute;
  }
  .widget-bottom-20 {
      bottom: 5rem;
  }
  .widget-right-0 {
      right: 0;
  }
  .widget-w-96 {
      width: 30rem;
  }
  .widget-bg-white {
      background-color: #ffffff;
  }
  .widget-rounded-md {
      border-radius: 0.375rem;
  }
  .widget-shadow-md {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .widget-flex-col {
      flex-direction: column;
  }
  .widget-justify-between {
      justify-content: space-between;
  }
  .widget-p-4 {
      padding: 1rem;
  }
  .widget-rounded-t-md {
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
  }
  .widget-m-0 {
      margin: 0;
  }
  .widget-text-lg {
      font-size: 1.125rem;
  }
  .widget-h-6 {
      height: 1.5rem;
  }
  .widget-w-6 {
      width: 1.5rem;
  }
  .widget-bg-transparent {
      background-color: transparent;
  }
  .widget-border-none {
      border: none;
  }
  .widget-flex-1 {
      flex: 1;
  }
  .widget-overflow-y-auto {
      overflow-y: auto;
  }
  .widget-border-t {
      border-top-width: 1px;
  }
  .widget-border-gray-200 {
      border-color: #e2e8f0;
  }
  .widget-space-x-4 {
      margin-right: 1rem;
      margin-left: 1rem;
  }
  .widget-border {
      border-width: 1px;
  }
  .widget-border-gray-300 {
      border-color: #e2e8f0;
  }
  .widget-px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
  }
  .widget-py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
  }
  .widget-outline-none {
      outline: none;
  }
  .widget-w-75 {
      width: 75%;
  }
  .widget-text-xs {
      font-size: 0.75rem;
  }
  .widget-pt-4 {
      padding-top: 1rem;
  }
  .widget-text-indigo-600 {
      color: #4f46e5;
  }
  .widget-rounded-lg {
      border-radius: 0.5rem;
  }
  .widget-max-w-[70%] {
      max-width: 70%;
  }
  .widget-bg-gray-200 {
      background-color: #edf2f7;
  }
  .widget-text-black {
      color: #000000;
  }
  .widget-justify-end {
    justify-content: flex-end;
  }
  .widget-z-index-99{
    z-index: 99999;
  }
  .widget-ml-1{
    margin-left: 10px;
  }
  .disabled{
    background-color: #808080 !important;
  }
  .chat-icons{
    height: 40px;
    width: 40px;
    display: flex;
    padding: 0px !important;
    justify-content: center;
    align-items: center;
    background-color: rgb(243 244 246 / 1);
    border-radius: 50%;
    margin: 0px 10px;
  }
  .widget-h-30px{
    height: 30px;
  }
  #chat-messages::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  #chat-messages::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
  }
  #chat-messages::-webkit-scrollbar-thumb
  {
    background-color: #000000;
  }
  }
  `;

  document.head.appendChild(style);
  const chatWidgetContainer = document.createElement('div');
  chatWidgetContainer.id = 'chat-widget-container';
  document.body.appendChild(chatWidgetContainer);

  chatWidgetContainer.innerHTML = `
    <div id="chat-bubble" class="widget-w-16 widget-h-16 widget-bg-gray-800 widget-rounded-full widget-flex widget-items-center widget-justify-center cursor-pointer widget-text-3xl widget-z-index-99">
      <svg xmlns=" http://www.w3.org/2000/svg" class="widget-w-10 widget-h-10 widget-text-white" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="widget-text-white block widget-border-gray-200 align-middle">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="widget-border-gray-200">
        </path>
      </svg>
    </div>
    <div id="chat-popup" class="hidden widget-absolute widget-bottom-20 widget-right-0 widget-w-96 widget-bg-white widget-rounded-md widget-shadow-md widget-flex widget-flex-col transition-all text-sm">
      <div id="chat-header" class="widget-flex widget-justify-between widget-items-center widget-p-4 widget-bg-gray-800 widget-text-white widget-rounded-t-md">
        <h3 class="widget-m-0 widget-text-lg">Chat Widget by Devbox</h3>
        <button id="close-popup" class="widget-bg-transparent widget-border-none widget-text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="widget-h-6 widget-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div id="chat-messages" class="widget-flex-1 widget-p-4 widget-overflow-y-auto"></div>
      <div id="chat-input-container" class="widget-p-4 widget-border-t widget-border-gray-200">
        <div class="widget-flex widget-space-x-4 widget-items-center">
          <input type="text" id="chat-input" class="widget-flex-1 widget-border widget-border-gray-300 widget-rounded-md widget-px-4 widget-py-2 widget-outline-none widget-w-75" placeholder="Type your message...">
          <button id="chat-submit" class="widget-bg-gray-800 widget-text-white widget-rounded-md widget-px-4 widget-py-2 cursor-pointer widget-ml-1">Send</button>
        </div>
        <div class="widget-flex text-center widget-text-xs widget-pt-4">
          <span class="widget-flex-1">Prompted by <a href="https://devbox.co/" target="_blank" class="widget-text-indigo-600">@devbox</a></span>
        </div>
      </div>
    </div>
  `;

  const chatInput = document.getElementById('chat-input');
  const chatSubmit = document.getElementById('chat-submit');
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.getElementById('chat-bubble');
  const closePopup = document.getElementById('close-popup');
  chatSubmit.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
    onUserRequest(message);
  });

  chatInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener('click', function() {
    togglePopup();
  });

  closePopup.addEventListener('click', function() {
    togglePopup();
  });

  function togglePopup() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.classList.toggle('hidden');
    if (!chatPopup.classList.contains('hidden')) {
      document.getElementById('chat-input').focus();
    }
  }

  function onUserRequest(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'widget-flex widget-justify-end widget-mb-3';
    messageElement.innerHTML = `
    <div class="widget-bg-gray-800 widget-text-white widget-rounded-lg widget-py-2 widget-px-4 widget-max-w-[70%]">
    ${message}
    </div>
    <div class="chat-icons">
      <svg stroke="none" fill="black" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
        </path>
      </svg>
    </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
    apiCall(message)
  }

  function replyLoader() {
    const chatMessages = document.getElementById('chat-messages');
    const replyLoaderElement = document.createElement('div');
    replyLoaderElement.id = 'reply-loader';
    replyLoaderElement.className = 'widget-flex widget-mb-3';
    replyLoaderElement.innerHTML = `
      <div class='widget-flex widget-justify-end widget-mb-3'>
        <div class="chat-icons">
          <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
            </path>
          </svg>
        </div>
        <div class="widget-bg-gray-200 widget-text-black widget-rounded-lg widget-py-2 widget-px-4 widget-max-w-[70%] widget-h-30px">
          <div class="dot-falling"></div>
        </div>
      </div>
    `;
    chatMessages.appendChild(replyLoaderElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function reply(message) {
    const chatMessages = document.getElementById('chat-messages');
    const chatSubmit = document.getElementById('chat-submit');
    const typingElement = document.createElement('div');
    typingElement.className = 'widget-flex widget-mb-3';
    typingElement.innerHTML = `
        <div>
          <div class="chat-icons">
            <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg>
          </div>
        </div>
        <div>
          <div class="widget-flex widget-bg-gray-200 widget-text-black widget-rounded-lg widget-py-2 widget-px-4 widget-max-w-[70%] typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    `;
    chatMessages.appendChild(typingElement);
    const typingIndicator = typingElement.querySelector('.typing-indicator span');

    let index = 0;
    animateScrollToBottom()
    const typingInterval = setInterval(() => {
        typingIndicator.textContent += message[index];
        index++;
        if (index === message.length) {
            clearInterval(typingInterval);
            chatSubmit.disabled = false;
            chatSubmit.classList.remove('disabled');
        }
    }, 50);
  }

  function animateScrollToBottom() {
    const scrollStep = chatMessages.scrollHeight / 20;
    let scrollPosition = 0;

    function scrollToBottom() {
        scrollPosition += scrollStep;
        chatMessages.scrollTop = scrollPosition;

        if (scrollPosition < chatMessages.scrollHeight) {
            requestAnimationFrame(scrollToBottom);
        } else {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    requestAnimationFrame(scrollToBottom);
  }

  function apiCall(message){
    const scriptTag = document.querySelector('script[src*="chat-widget.js"]');
    const apiUrl = scriptTag.getAttribute('data-api-url');
    chatSubmit.disabled = true;
    chatSubmit.classList.add('disabled');
    replyLoader()
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var requestBody = JSON.stringify({
      message: message
    });

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById('reply-loader').remove()
          reply(xhr.responseText)
        } else {
          document.getElementById('reply-loader').remove()
        }
      }
    };
    xhr.send(requestBody);
  }
});

