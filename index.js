function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', addingEventListener);
    return alert('I was clicked!');
}
addingEventListener();
