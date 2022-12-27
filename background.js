chrome.action.onClicked.addListener(handleBrowserActionClicked)

function openLink(link) {
  chrome.tabs.create({
    url: String(link)
  });
}

function handleBrowserActionClicked(tab) {
  let randVal = Math.floor(Math.random() * 602);
  const file = chrome.runtime.getURL("songs.txt");
  fetch(file)
  .then(response => response.text()) 
  .then(txt => { 
    var arr = txt.split("\n");
    openLink(arr[randVal]);
  });
}