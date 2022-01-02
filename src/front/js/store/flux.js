const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			detalleCuidador:{},
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			detalleCuidador: async id => {
				const store = getStore();
				await fetch(`https://3001-green-octopus-9ofx02c6.ws-us25.gitpod.io/api/cuidador/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detalleCuidador: data });
					})
					.catch(error => console.log("error", error));
			},
		}
	};
};

export default getState;
