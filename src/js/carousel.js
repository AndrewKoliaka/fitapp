var Carousel = (function() {

    function selectElement(serialNumber) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove('active_el');
            this.descriptions[i].style.display = 'none';
        }
        this.elements[serialNumber].classList.add('active_el');
        this.descriptions[serialNumber].style.display = 'block';

        this.current = serialNumber;
    }

    function timerTick() {
        var val = this.current === this.elements.length - 1 ? this.current = 0 : ++this.current;
        selectElement.call(this, val);
    }

    function carousel(el_class, desc_class) {
        this.elements = [].slice.call(document.getElementsByClassName(el_class));
        this.descriptions = [].slice.call(document.getElementsByClassName(desc_class));
        if (!this.elements.length || !this.descriptions.length) {
        	throw 'invalid el_class or desc_class';
        }
        this.current = -1;
        this.timer = null;
        var self = this;
        this.elements.forEach(function(el, index) {
            el.onclick = selectElement.bind(self, index);
        });
    }

    carousel.prototype.start = function(interval) {
        if (this.timer) {
            this.stop();
        }
        this.timer = setInterval(timerTick.bind(this), interval || 4000);
    }

    carousel.prototype.stop = function() {
        clearInterval(this.timer);
        this.timer = null;
    }

    return carousel;
})();
