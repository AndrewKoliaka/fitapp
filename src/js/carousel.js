var Carousel = (function () {

    function selectElement(serialNumber) {
        this.elements.removeClass('active-el');
        this.descriptions.css('display', 'none');
        $(this.elements[serialNumber]).addClass('active-el');
        $(this.descriptions[serialNumber]).css('display', 'block');

        this.current = serialNumber;
    }

    function timerTick() {
        var val = this.current === this.elements.length - 1 ? this.current = 0 : ++this.current;
        selectElement.call(this, val);
    }

    function carousel(el_class, desc_class) {
        this.elements = $('.' + el_class);
        this.descriptions = $('.' + desc_class);
        if (!this.elements.length || !this.descriptions.length) {
            throw 'invalid el_class or desc_class';
        }
        this.current = -1;
        this.timer = null;
        var self = this;
        this.elements.each(function (index, el) {
            $(el).click(selectElement.bind(self, index));
        });
    }

    carousel.prototype.start = function (interval) {
        if (this.timer) {
            this.stop();
        }

        this.timer = setInterval(timerTick.bind(this), interval || 5000);
    }

    carousel.prototype.stop = function () {
        clearInterval(this.timer);
        this.timer = null;
    }

    return carousel;
})();