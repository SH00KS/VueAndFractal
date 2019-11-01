(function(){
    console.log('In example JS');
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
})();

//Mount the app
if(document.getElementById('example')){
	new Vue({
      el: '#example',
      data: {
        message: 'Hello Vue!'
    }
})
}
