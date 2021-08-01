/*Re-resolve a promise . What’s the output of the code below? */

let promise = new Promise(function (resolve, reject) {
   
    resolve(1);

    setTimeout(() => resolve(2), 1000);

});

promise.then(alert);

/*Solution: 1 
The second call to resolve is ignored, 
because only the first call of reject/resolve is taken into account.
Further calls are ignored.*/


/* Delay with a promise
The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms 
milliseconds, so that we can add .then to it, like this:*/

function delay(ms) {

    return newPromise((resolve) => setTimeout(resolve, ms));

}

delay(3000).then(() => alert('runs after 3 seconds'));

  //Please note that in this task resolve is called without
  // arguments. We don’t return any value from delay, just ensure the delay.

  /*Animated circle with promise */

  function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }


  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
        
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
      
            div.addEventListener('transitionend', function handler() {
              div.removeEventListener('transitionend', handler);
              callback(div);
            });
          }, 0);
    })
    
  }