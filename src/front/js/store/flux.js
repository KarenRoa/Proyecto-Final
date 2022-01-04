const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					nombre:"Josefina",
					apellido: "Gomez",
					email: "j.gomez@gmail.com",
					initial: "white"
				},
				{
					nombre:"Mariano",
					apellido: "Constanzo",
					background: "white",
					initial: "white"
				},
				{
					nombre:"Umai",
					apellido: "Chhascona",
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
			
		}
	};
};

export default getState;
