window.alert = $.noop
window.prompt = $.noop
window.confirm = $.noop
window.print = $.noop
window.open = $.noop

window.addEventListener('message', function(e, b){
    $('body').html(JSON.stringify(e))

//    $('body').html(e.data);
//    if (e.origin == 'null'){
//    }
});

