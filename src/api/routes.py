"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,Cuidador,Cliente, Favoritos
from api.utils import generate_sitemap, APIException

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




#Ruta para ver todos los Clientes
@api.route('/clientes', methods=['GET'])
def get_clientes():
    Clientes=Cliente.query.all()
    Clientes = list(map(lambda x: x.serialize(),Clientes))

    return jsonify(Clientes), 200

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
@api.route('/favorito', methods=['GET'])
def get_favoritos():
    Favorito=Favoritos.query.filter_by(cliente_id = 1)
    Favorito = list(map(lambda x: x.serialize(),Favorito))

    return jsonify(Favorito), 200