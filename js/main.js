import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'ArfUTTlnt1lekXLgIqevIji2DQwtV8q4E3poa3f2';
const API_KEY = 'ADsAdbJnSBER3ild38oVNiDWLLr7ouLEGiHFXQVo';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': APP_ID,
		'X-Parse-REST-API-Key': API_KEY
	}
});

import DonutTemplate from './donut_template';
import DonutCollection from './donut_collection';

let donut = new DonutCollection();

function populateDonuts() {
	console.log(donut);
	let $div = $('<div></div>');
	donut.each(function(doni){
		let info = doni.toJSON();

		let $p = $( DonutTemplate(info) );

		$div.append($p);
	});

	$('body').html($div);
}

donut.fetch().then(populateDonuts);



console.log('Hello, World');
