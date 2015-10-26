import Backbone from 'backbone';
import DonutModel from './donut_model';

let DonutCollection = Backbone.Collection.extend({

	url: 'https://api.parse.com/1/classes/Donuts',

	model: DonutModel,

	parse: function(data) {
		return data.results;
	}

});

export default DonutCollection;