from flask import Flask, request
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

todos = {}
parser = reqparse.RequestParser()

class GuetsData(Resource):
    def post(self):
        args = parser.parse_args()
        print(args)
        return args, 201

api.add_resource(GuetsData, '/')

if __name__ == '__main__':
    app.run(debug=True)