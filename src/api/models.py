from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cuidador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    telefono = db.Column(db.String(80), unique=False, nullable=False)
    comuna = db.Column(db.String(80), unique=False, nullable=False)
    rrss = db.Column(db.String(80), unique=False, nullable=True)
    descripcion = db.Column(db.String, unique=False, nullable=False)
    
    # def __repr__(self):
    #     return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "password": self.password,
            "telefono": self.telefono,
            "comuna": self.comuna,
            "rrss": self.rrss,
            "descripcion": self.descripcion,

            # do not serialize the password, its a security breach
        }

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    telefono = db.Column(db.String(80), unique=False, nullable=False)
    comuna = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String, unique=False, nullable=False)
    
    # def __repr__(self):
    #     return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "password": self.password,
            "telefono": self.telefono,
            "comuna": self.comuna,
            "descripcion": self.descripcion,

        }

class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeingKey('cliente.id'))
    cuidador_id = db.Column(db.Integer, db.ForeingKey('cuidador.id'))
    cliente = db.relationship(Cliente)
    cuidador_id = db.relationship(Cuidador)

    
    def serialize(self):
        return {
            "id": self.id,
            "cliente_id":self.user_id,
            "cuidador_id": self.cuidador_id,
        }

class Contrato(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeingKey('cliente.id'))
    cuidador_id = db.Column(db.Integer, db.ForeingKey('cuidador.id'))
    fecha = db.Column(db.Date, unique=False, nullable=False)
    servicio = db.Column(db.String, unique=False, nullable=False)
    cliente = db.relationship(Cliente)
    cuidador_id = db.relationship(Cuidador)

    
    def serialize(self):
        return {
            "id": self.id,
            "cliente_id":self.user_id,
            "cuidador_id": self.cuidador_id,
            "fecha": self.fecha,
            "servicio": self.servicio,
        }