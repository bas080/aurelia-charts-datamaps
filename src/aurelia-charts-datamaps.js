import {getLogger} from 'aurelia-logging';

/* charts */
export {Chart} from './chart/base';
export {Choropleth} from './chart/choropleth';
export Datamap from 'datamaps';

const logger = getLogger('aurelia-charts-datamaps');

export function configure(config) { }

export {logger};
