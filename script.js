(function() {
    renderPage(9);
})();

function renderPage(count) {
    if (count <= 0) return;
    var container = document.getElementsByClassName('container');
    if (container) {
        var section = document.createElement('div');
        section.classList.add('section');

        var tabs = document.createElement('ul');
        tabs.classList.add('tabs');

        for (var i = 0; i < count; i++) {
            var li = document.createElement('li');
            li.innerText = "Tab " + (i + 1);
            tabs.appendChild(li);
        }
        var activeTab = tabs.childNodes[0];
        activeTab.classList.add('activeTab');

        var content = document.createElement('div');
        content.classList.add('content');

        for (var j = 0; j < count; j++) {
            var p = document.createElement('p');
            p.innerText = "This is the Conent of Tab" + (j + 1);
            content.appendChild(p);
        }
        var activeContent = content.childNodes[0];
        activeContent.classList.add('activeContent');

        section.appendChild(tabs);
        section.appendChild(content);
        container[0].appendChild(section);
        
    }

}