const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			detalleCuidador:{},
			message: null,
<<<<<<< HEAD
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
=======
			
>>>>>>> 5060df1e1156184f559df9cea79b0728b58a9d33
		},
		actions: {
			
			//Ruta para registrar un cliente
			setDatosFormularioCliente: (datosCliente) => {
				fetch(
				  "https://3001-green-octopus-9ofx02c6.ws-us25.gitpod.io/api/cliente",
				  {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(datosCliente),
				  }
				)
				  .then((response) => response.json())
				  .then(result => console.log(result))
				  .catch((error) => {
					console.log("El error", error);
				  });
			  },
			
			//Ruta para ver el detalle de un cuidador
			detalleCuidador: async id => {
				await fetch(`https://3001-green-octopus-9ofx02c6.ws-us25.gitpod.io/api/cuidador/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ detalleCuidador: data })
					})
					.catch(error => console.log("error", error));
			},
			
		}
	};
};

export default getState;
