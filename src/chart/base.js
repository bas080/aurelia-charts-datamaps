import {chart, Chart as BaseChart} from 'aurelia-charts';
import Datamap from 'datamaps';

@chart('DataMaps')
export class Chart extends BaseChart {

  settings = {}

  create() {
    this.settings.element = this.element;
    this.instance         = new Datamap(this.settings);
  }

  update() {
    ['updateChoropleth', 'updatePopup', 'bubbles'].forEach(method => {
      if (this.settings[method]) {
        this.instance[method](this.settings[method] || {});
      }
    });
  }

  destroy() {
    /* does not have a destroy method */
  }

}
