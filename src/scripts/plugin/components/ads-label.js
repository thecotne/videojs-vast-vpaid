

const dom = require('../../utils/dom');

const element = document.createElement('div');

element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

const AdsLabelFactory = function (baseComponent) {
  return {
    /** @constructor */
    init: function init (player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(() => {
        const currentTimeComp = player.controlBar && (player.controlBar.getChild('timerControls') || player.controlBar.getChild('currentTimeDisplay'));

        if (currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement () {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;
