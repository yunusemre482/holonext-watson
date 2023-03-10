const routes = {
	404: {
		template: '/404/404.html',
		title: '404',
		description: 'Page not found',
	},
	'/': {
		template: '/index.html',
		title: 'Home',
		description: 'This is the home page',
	},
	watsons: {
		template: '/watson/index.html',
		title: 'Watson',
		description: 'This is the wartsons page',
	},
	migros: {
		template: '/migros/index.html',
		title: 'Migros',
		description: 'This is the migros page',
	},
};

const locationHandler = async () => {
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = '/';
	}
	// get the route object from the urlRoutes object
	const route = routes[location] || routes['404'];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById('content').innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document.querySelector('meta[name="description"]').setAttribute('content', route.description);
};

const route = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, '', event.target.href);
	locationHandler();
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
