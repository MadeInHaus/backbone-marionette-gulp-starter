import Marionette from 'backbone.marionette';
import template from 'templates/footer';
import itemViewTemplate from 'templates/random-number';
import { getRandomInt } from 'utils/helpers';
import $ from 'jquery';
import _ from 'underscore';

const ItemView = Marionette.View.extend({

    template: itemViewTemplate,

    ui: {
        number: 'span',
    },

    templateContext() {
        return {
            randomNum: getRandomInt(0, 1000),
        };
    },

    initialize() {
        $(window).on('keydown.randomNumber', _.throttle(this.onKeydown.bind(this), 200));
        this.audio = new Audio();
        this.audio.src = '../audio/coin.mp3';
    },

    onDestroy() {
        $(window).off('.randomNumber');
    },

    onKeydown(e) {
        if (e.keyCode === 32) {
            this.ui.number.html(getRandomInt(0, 1000));
            this.audio.currentTime = 0;
            this.audio.play();
        }
    },

});

export default Marionette.View.extend({

    className: 'footer',

    template,

    regions: {
        randomNumber: '#randomNumber',
    },

    onRender() {
        this.showChildView('randomNumber', new ItemView());
    },

});
