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
					isFav: true,
				},
				{
					title: "The Way of Kings",
					author: "Brandon Sanderson",
					img: "assets/TheFinalEmpire.jpeg",
					isFav: false,
				},
				{
					title: "The Final Empire",
					author: "Brandon Sanderson",
					img: "assets/TheWayOfKings.jpeg",
					isFav: true,
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
