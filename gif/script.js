


class gif(debug) {
  constructor(width,height,src) {
    this.src=    src;
    this.width=  width;
    this.height= height;
    this.div=    document.html.body.createElement('div');
    this.extension= this.src.match(/(gif|png|jpg|jpeg|mpv|mov|mp4)$/);
    this.div.innerHTML= (this.extension.match(/(?:gif|png|jpg|jpeg)$/)? `<img src="${this.src}" class="gif">` : `<video controls><source src="${this.src}" type="video/${this.extension}"></video>`);
    
    if (gif.debug) console.log(`div: ${this.div} extension: ${this.extension} src: ${this.src}`);
  }
}

