from http.server import BaseHTTPRequestHandler
import json
from openai import OpenAI
import os

openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            workflow_id = os.environ.get("WORKFLOWID")
            if not workflow_id:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "WORKFLOWID environment variable is not set"}).encode())
                return
            
            session = openai_client.chatkit.sessions.create(
                workflow={"id": workflow_id},
                user="default_user"
            )
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"client_secret": session.client_secret}).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
