window.onload = function() {
    console.log('Shadow DOM');
    var shadowHost = document.getElementById('shadow-root');
    var shadowRoot = shadowHost.attachShadow({mode: 'open'});

    let span = document.createElement('span');
    span.setAttribute('id','shadow-span');
    span.innerHTML = 'Shadow DOM';
    shadowRoot.appendChild(span);
    var shadowContent = document.createElement('script');
    shadowContent.setAttribute('id','shadow-content');
    shadowContent.innerHTML = 'console.log("Shadow DOM Content"); let shadow_node = document.getElementById("shadow-span"); let new_span = document.createElement("span"); new_span.innerHTML = "Shadow DOM Content"; shadow_node.parentNode.appendChild(new_span);';
    shadowRoot.appendChild(shadowContent);
}

function one() {
    var shadowHost = document.getElementById('shadow-root');
    var shadowRoot = shadowHost.shadowRoot;
    console.log('One');

}
function two(){
    console.log('Two');
}