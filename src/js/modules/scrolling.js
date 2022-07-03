const scrolling = (selector) => {
  
  const upElem = document.querySelector(selector);

  window.addEventListener('scroll', ()=> {

    if(document.documentElement.scrollTop > 1600) {
        upElem.classList.add('animated', 'fadeIn');
        upElem.classList.remove('fadeOut');
    } else {
        upElem.classList.add('fadeOut');
        upElem.classList.remove('fadeIn');
    }
  });
    const element = document.documentElement,
            body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if(this.hash !== '') {
                event.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;
                
            
                while(hashElement.offsetParent) {
                    console.log(hashElement, 'hashElement')
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        })
    }

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if(to > from) {
            speed = 30
        } else {
            speed = -30;
        }
        
        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            if(
                prevScrollTop === scrollTop ||
                ( to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
              clearInterval(move);
              console.log('equa;l')
              history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                console.log( prevScrollTop, ' prevScrollTop');
                console.log( scrollTop, ' scrollTop')
                prevScrollTop = scrollTop;
            }
        }, timeInterval)
    }

    calcScroll();
}



export default scrolling;