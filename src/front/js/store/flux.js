const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cuidadores:[],
			detalleCuidador:{},
			message: null,
			
		},
		actions: {
			
			//Registrar un cliente
			setDatosFormularioCliente: (datosCliente) => {
				fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cliente",
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
			

			//Registrar un cuidador
			setDatosFormularioCuidador: (datosCuidador) => {
				fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cuidador",
				  {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(datosCuidador),
				  }
				)
				  .then((response) => response.json())
				  .then(result => console.log(result))
				  .catch((error) => {
					console.log("El error", error);
				  });
			  },

			//Editar un cuidador
			updateCuidador: (dataToEdit, id) => {
				fetch(
					`https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/editarCuidador/${id}`,
				  {
					method: "PUT",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(dataToEdit),
				  }
				)
				  .then((response) => response.json())
				  .then(result => console.log(result))
				  .catch((error) => {
					console.log("El error", error);
				  });
			  },


			//Ver todos los cuidadores
			obtenerCuidadores: async () => {
				await fetch("https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cuidadores")
					.then(response => response.json())
					.then(data => setStore({ cuidadores: data }))
					.catch(error => console.log("error", error));
			},

			//Eliminar un cuidador
			deleteCuidador: async id  => {
				await fetch(
					`https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cuidador/${id}`,
					{
						method: "DELETE",
						headers: {
						  "Content-Type": "application/json",
						}
					  }
				)
				  .then((response) => response.json())
				  .catch((error) => {
					console.log("El error", error);
				  });
			  },
			  
			//Ver el detalle de un cuidador
			detalleCuidador: async id => {
				await fetch(`https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cuidador/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ detalleCuidador: data })
					})
					.catch(error => console.log("error", error));
			},

			//Crear token cuidador
			setLogin: async (datoslogin) => {
				await fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us25.gitpod.io/api/cuidadorlogin",
				  {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(datoslogin),
				  }
				)
				  .then((resp) => resp.json())
				  .then(data => {
					sessionStorage.setItem("token", data.token)
					setStore({ datos: data })
				  })
				  .catch((error) => console.log("error", error));
				
			  },
			
		}
	};
};

export default getState;
