"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,Cuidador,Cliente, Favoritos
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime

api = Blueprint('api', __name__)


#Ruta para ver todos los cuidadores
@api.route('/cuidadores', methods=['GET'])
def get_cuidadores():
    Cuidadores=Cuidador.query.all()
    Cuidadores = list(map(lambda x: x.serialize(),Cuidadores))

    return jsonify(Cuidadores), 200

#Ruta para ver un cuidador
@api.route('/cuidador/<int:id>', methods=['GET'])
def get_cuidador(id):
    Cuidador_id = Cuidador.query.get(id)

    return jsonify(Cuidador_id.serialize())


#Ruta para crear un cuidador
@api.route('/cuidador',  methods=['POST'])
def set_cuidador():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    nuevo_cuidador = Cuidador.query.filter_by(email = datos['email']).first()
    if (nuevo_cuidador is None):
        nuevo_cuidador = Cuidador(nombre = datos['nombre'], 
                                  apellido = datos['apellido'],
                                  email = datos['email'], 
                                  password = datos['password'], 
                                  telefono = datos['telefono'], 
                                  comuna = datos['comuna'],
                                  rrss = datos['rrss'],
                                  descripcion = datos['descripcion'],
                                 )
        db.session.add(nuevo_cuidador)
        db.session.commit()
        return 'Usuario Registrado'


#Ruta para editar un cuidador
@api.route('/editarCuidador/<id>', methods=['PUT'])
def update_cuidador(id):
    cuidador = Cuidador.query.get(id)
    datos = request.get_json()
    print(datos)
    cuidador.nombre = datos['nombre'],
    cuidador.apellido = datos['apellido'],
    cuidador.email = datos['email'], 
    cuidador.telefono = datos['telefono'], 
    cuidador.comuna = datos['comuna'],
    cuidador.rrss = datos['rrss'],
    cuidador.descripcion = datos['descripcion']
                                 
    db.session.commit()
    return 'Usuario Registrado'

#Ruta para eliminar un cuidador
@api.route('/cuidador/<id>', methods=['DELETE'])
def delete_cuidador(id):
    Cuidador_id = Cuidador.query.get(id)
    db.session.delete(Cuidador_id)
    db.session.commit()
    return "ok"

#----------------------------------------------------------------------------------------    

#Ruta para ver todos los Clientes
@api.route('/clientes', methods=['GET'])
def get_clientes():
    Clientes=Cliente.query.all()
    Clientes = list(map(lambda x: x.serialize(),Clientes))

    return jsonify(Clientes), 200

#Ruta para ver un cliente
@api.route('/cliente/<int:id>', methods=['GET'])
def get_cliente(id):
    Cliente_id = Cliente.query.get(id)

    return jsonify(Cliente_id.serialize())


#Ruta para editar un cliente
@api.route('/editarCliente/<id>', methods=['PUT'])
def update_cliente(id):
    cliente = Cliente.query.get(id)
    datos = request.get_json()
    cliente.nombre = datos['nombre'],
    cliente.apellido = datos['apellido'],
    cliente.email = datos['email'], 
    cliente.telefono = datos['telefono'], 
    cliente.comuna = datos['comuna'],
    cliente.descripcion = datos['descripcion']
                                 
    db.session.commit()
    return 'Datos Actualizados'

#Ruta para eliminar un cliente
@api.route('/cliente/<id>', methods=['DELETE'])
def delete_cliente(id):
    Cliente_id = Cliente.query.get(id)
    db.session.delete(Cliente_id)
    db.session.commit()
    return "ok"

#Ruta para crear un Cliente
@api.route('/cliente',  methods=['POST'])
def set_cliente():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    nuevo_cliente = Cliente.query.filter_by(email = datos['email']).first()
    if (nuevo_cliente is None):
        nuevo_cliente = Cliente(nombre = datos['nombre'], 
                                  apellido = datos['apellido'],
                                  email = datos['email'], 
                                  password = datos['password'], 
                                  telefono = datos['telefono'], 
                                  comuna = datos['comuna'],
                                  descripcion = datos['descripcion'],
                                 )
        db.session.add(nuevo_cliente)
        db.session.commit()
        return 'Usuario Registrado'


#Ruta para ver los favoritos de un cliente
@api.route('/favorito/<id>', methods=['GET'])
def get_favoritos(id):
    Favorito=Favoritos.query.filter_by(cliente_id = id)
    Favorito = list(map(lambda x: x.serialize(),Favorito))

    return jsonify(Favorito), 200



#-------------- JWT TOKEN y LOGIN------------------------------------------------------------
#Ruta para crear token del cuidador
@api.route('/cuidadorlogin', methods=['POST'])
def setCuidador_login():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    cuidador_login = Cuidador.query.filter_by(email = datos['email']).first()
    if (cuidador_login):
        if(cuidador_login.password == datos['password']):
            expira = datetime.timedelta(minutes=1)
            access_token = create_access_token(identity = cuidador_login.email, expires_delta = expira) 
            data_token = {
                "info_user": cuidador_login.serialize(),
                "token": access_token,
                "expires": expira.total_seconds(),
                "status": True 
            }
            return jsonify(data_token)     
        else:
            return { 'message': 'Clave Invalida'}
    else:
        return "No existe Usuario con ese correo"

#Ruta para crear token del cuidador
@api.route('/clientelogin', methods=['POST'])
def setCliente_login():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    cliente_login = Cliente.query.filter_by(email = datos['email']).first()
    if (cliente_login):
        if(cliente_login.password == datos['password']):
            expira = datetime.timedelta(minutes=1)
            access_token = create_access_token(identity = cliente_login.email, expires_delta = expira) 
            data_token = {
                "info_user": cliente_login.serialize(),
                "token": access_token,
                "expires": expira.total_seconds(),
                "status": True 
            }
            return jsonify(data_token)     
        else:
            return { 'message': 'Clave Invalida'}
    else:
        return "No existe Usuario con ese correo"