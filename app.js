const app = Vue.createApp({
	data() {
		return {
			url: "http://www.cameronshadgett.com",
			showBooks: true,
			books: [
				{
					title: "Name of The Wind",
					author: "Patrick Rothfuss",
					img: "assets/NameOfTheWind.jpeg",
				},
				{
					title: "The Way of Kings",
					author: "Brandon Sanderson",
					img: "assets/TheFinalEmpire.jpeg",
				},
				{
					title: "The Final Empire",
					author: "Brandon Sanderson",
					img: "assets/TheWayOfKings.jpeg",
				},
			],
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
	},
});
app.mount("#app");
