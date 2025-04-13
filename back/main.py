from flask import Flask, request, render_template, jsonify, make_response
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os.path
import json


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///guests.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

api = Api(app)

CORS(app, resources={r"/api/*": {"origins": "*"}})

class Guest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    status = db.Column(db.String(10), unique=True, nullable=False)

    def __repr__(self):
        return f'<Guest {self.name}>'

@app.route('/api/guests_list')
def get_all_guests():
    guests = Guest.query.all()
    guest_data = [{'name': guest.name, 'status': guest.status} for guest in guests]
    for guest in guest_data:
        if guest["status"] == "Да":
            guest["s"] = True
        else:
            guest["s"] = False
    return render_template('index.html', guests=guest_data)

# @app.route("/api/guests", methods=["POST"])
# def post():
#     data  = request.json["guest"]
#     if data is None:
#         return jsonify({"error": "Invalid content type or empty payload"}), 400
#     else:
#         guest = data.get("guest")
#         status = data.get("status")
#         try:
#             new_guest = Guest(name=guest, status=status)
#             db.session.add(new_guest)
#             db.session.commit()
#         except Exception as ex:
#             return make_response(jsonify({"error": ex}), 400)
#     return make_response(jsonify(data), 201)

class Guests(Resource):

    def post(self):
        data  = request.get_data(as_text=True)
        if data is None:
            return jsonify({"error": "Invalid content type or empty payload"}), 400
        else:
            json_data = json.loads(data)
            print(json_data)
            # try:
            new_guest = Guest(name=json_data["guests"], status=json_data["status"])
            db.session.add(new_guest)
            db.session.commit()
            # except Exception as ex:
            #     return {"error": f"{ex}"}
        return data


api.add_resource(Guests, '/api/guests')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host="0.0.0.0")
