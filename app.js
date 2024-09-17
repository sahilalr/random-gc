
document.addEventListener('DOMContentLoaded', (event) => {
    const linkInput = document.getElementById('linkInput');
    const linkList = document.getElementById('linkList');
    const links = JSON.parse(localStorage.getItem('links')) || [];

    function updateLinkList() {
        linkList.innerHTML = '';
        links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.textContent = link;
            anchor.target = '_blank';
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });
    }

    function addLink() {
        const link = linkInput.value.trim();
        if (link && !links.includes(link)) {
            links.push(link);
            localStorage.setItem('links', JSON.stringify(links));
            updateLinkList();
            linkInput.value = '';
        } else if (links.includes(link)) {
            alert('Link is already in the list');
        }
    }

    document.querySelector('button').addEventListener('click', addLink);

    updateLinkList(); // Initial call to populate the list on page load
});
