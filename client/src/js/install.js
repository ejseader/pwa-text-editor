const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event X
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';


// TODO: Implement a click event handler on the `butInstall` element X
butInstall.addEventListener('click', async () => {
  await event.prompt();
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});
});

// TODO: Add an handler for the `appinstalled` event X
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});
