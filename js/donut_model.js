import Backbone from 'backbone';

let DonutModel = Backbone.Model.extend({
	urlRoot: 'https://api.parse.com/1/classes/Donuts',
	idAttribute: 'objectId'

});
export default DonutModel;


 
