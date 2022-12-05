function showContent() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    var date = new Date();
    //var current_time = date.getHours()+":"+date.getMinutes();
    var current_time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    document.getElementById('date-time').innerHTML = current_time;
    }

