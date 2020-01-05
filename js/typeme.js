class TextTyper {
  constructor(el, minTypingTime=30, randomTypingTime=175) {
    this.container = el;
    this.cursorBlinkerTimeoutId;
    this.waitCharacters = '.?!';

    this.minTypingTime = minTypingTime;
    this.randomTypingTime = randomTypingTime;

    this.stopAnimation = false;
    this.currPromiseChain = Promise.resolve();
  }

  type(text) {
    for( let char of text ) { 
      this.typeLetter(char);
      if (this.waitCharacters.includes(char)) this.wait(1000);
    }
    return this;
  }

  typeLetter(char) {
    this.chain( () => new Promise( resolve => {
      if (this.stopAnimation) return resolve();

      setTimeout( () => {
        this.container.innerText += char;
        this.stopCursorBlinking();
        resolve();
      }, this.getRandomTimeout());
    }));
    return this;
  }

  getRandomTimeout() {
    // simulates real person's typing
    return Math.random() * this.randomTypingTime + this.minTypingTime; 
  }

  stopCursorBlinking() {
    this.container.classList.add('typing');
    clearTimeout( this.cursorBlinkerTimeoutId );
    this.cursorBlinkerTimeoutId = setTimeout( () => {
      this.container.classList.remove('typing');
    }, 200);
  }

  remove(num) {
    for( let i = 0; i < num; i++ ) {
      this.removeLetter();
    }
    return this;
  }

  removeLetter() {
    this.chain( () => new Promise( resolve => {
      if (this.stopAnimation) return resolve();

      setTimeout( () => {
        let currText = this.container.innerText;
        this.container.innerText = currText.slice( 0, currText.length - 1);
        this.stopCursorBlinking();
        resolve();
      }, this.getRandomTimeout() / 2.5);
      // removing characters is usually much faster than typing

    }))
    return this;
  }

  chain( callback ) {
    this.currPromiseChain = this.currPromiseChain.then( callback );
    return this;
  }
  wait( time ) {
    this.chain( () => new Promise( resolve => {
      if (this.stopAnimation) return resolve();
      setTimeout(resolve, time)
    }));
    return this;
  }
  clear() {
    this.chain( () => this.container.innerText = '');
    return this;
  }
  stop() {
    this.stopAnimation = true;
    this.chain( () => this.stopAnimation = false );
    return this;
  }
  clearNow() {
    this.stop().clear();
    return this;
  }
  // Looping logic
  loop() {
    this.loop = this.options().loop;
    this.loopCount = this.options().loopCount;
    this.curLoop() = 0;
  }

}


let typer = new TextTyper( document.getElementById('type-me') );


const init = () => {
  // typing is devided into a few function calls just to demonstrate flexibility
  typer
    .clearNow()
    .wait(100)
    .type(' Data ')
    .type('Scientist')
    .wait(500)
    .remove('Data Scientist'.length)
    .wait(300)
    .type(' Statistician')
    .wait(500)
    .remove('Statistician'.length)
    .wait(300)
    .type(' Avid ')
    .type('Reader')
    .wait(300)
    .remove(' Avid Reader'.length)
    .wait(200)
    .type(' Explorer')
    .wait(300)
    .remove('Explorer'.length)
    .wait(200)
    .type(' Dog ')
    .type('Mom')
    .wait(300)
    .remove('Dog Mom'.length)
    .wait(200)
    .type(' Aspiring ')
    .type('Developer')
    .wait(300)
    .remove('Aspiring Developer'.length)
    .wait(200)
    .type(' Curious ')
    .type('Human')
    .wait(500);
    //.clear();
}
init();
