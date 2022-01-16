const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cuidadores:[],
			detalleCuidador:{},
			
			clientes:[],
			detalleCliente:{},
			razas: {},
			Imagenes:{}
			//message: null,
			
		},
		actions: {

			//Registrar un cuidador
			setDatosFormularioCuidador: (datosCuidador) => {
				fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cuidador",
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
					`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/editarCuidador/${id}`,
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
				await fetch("https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cuidadores")
					.then(response => response.json())
					.then(data => setStore({ cuidadores: data }))
					.catch(error => console.log("error", error));
			},

			//Eliminar un cuidador
			deleteCuidador: async id  => {
				await fetch(
					`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cuidador/${id}`,
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
				await fetch(`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cuidador/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ detalleCuidador: data })
					})
					.catch(error => console.log("error", error));
			},

//-------------------------------//FETCH CLIENTES---------------------------------
			//Registrar un cliente
			setDatosFormularioCliente: (datosCliente) => {
				fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cliente",
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

			//Ver todos los Clientes
			obtenerClientes: async () => {
				await fetch("https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/clientes")
					.then(response => response.json())
					.then(data => setStore({ clientes: data }))
					.catch(error => console.log("error", error));
			},

			 //Ver un Cliente
			 detalleCliente: async id => {
				await fetch(`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cliente/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ detalleCliente: data })
					})
					.catch(error => console.log("error", error));
			},

			//Editar un Cliente
			updateCliente: (dataToEdit, id) => {
				fetch(
					`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/editarCliente/${id}`,
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
			
			//Eliminar un cliente
			deleteCliente: async id  => {
				await fetch(
					`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cliente/${id}`,
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

			//FAVORITOS Cliente
			favoritesCliente: async id => {
				await fetch(`https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/favorito/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ favoritosCliente: data })
					})
					.catch(error => console.log("error", error));
			},
			

//----------//FETCH API EXTERNA-----------------------------------------------------------------

			getApiGlobal: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  await fetch("https://dog.ceo/api/breeds/list/all", requestOptions)
					.then(response => response.json())
					.then(data => {
						setStore({ razas: data.message})
					})
					.catch(error => console.log('error', error));
			},
			
			getApiImagen: async(datosRaza) => {
				console.log(datosRaza)
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				 await fetch(`https://dog.ceo/api/breed/${datosRaza}/images`, requestOptions)
					.then(response => response.json())
					.then(data =>{
						console.log(data)
						setStore({ Imagenes: data.message})
					})
					.catch(error => console.log('error', error));
			},

			//Crear token cuidador
			setLogin: async (datoslogin) => {
				await fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/cuidadorlogin",
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

			  //Crear token cliente
			setLoginCliente: async (datoslogin) => {
				await fetch(
				  "https://3001-yellow-tarantula-nr4wr9if.ws-us27.gitpod.io/api/clientelogin",
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
