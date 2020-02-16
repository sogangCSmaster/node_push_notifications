console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "앙 테스트띠",
    icon: "http://www.cheogajip.co.kr/data/file/menu/thumb-2109327413_7UoQ5MZh_52aa908ff16e5953e32e77d84adb98bbc1e736dd_290x297.jpg"
  });
});
