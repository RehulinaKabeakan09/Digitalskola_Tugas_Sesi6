{
  "info": {
    "_postman_id": "f562715a-28d0-445a-a767-951498356058",
    "name": "Rehulina - Batch 14",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "22990132",
    "_collection_link": "https://go.postman.co/collection/22990132-f562715a-28d0-445a-a767-951498356058?source=collection_link"
  },
  "item": [
    {
      "name": "Get_Users",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzcwNzE1MjM3LCJleHAiOjE3NzA3MTg4Mzd9.3VyDfNFMG8nyV_2ayQ7Rx77bQIBKqYtn7SsUvzM7WI8",
            "type": "text"
          }
        ],
        "url": {
          "raw": "https://belajar-bareng.onrender.com/api/users",
          "protocol": "https",
          "host": [
            "belajar-bareng",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "users"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Post_Login",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.collectionVariables.set(\"token\", pm.response.json().token);\r",
              "\r",
              "pm.test(\"Status code is 200\", function () {\r",
              "    pm.response.to.have.status(200);\r",
              "});\r",
              "\r",
              "pm.test(\"Validate Message\", () => {\r",
              "let jsonData = pm.response.json();\r",
              "pm.expect(jsonData.message).to.eql(\"Login successful\");\r",
              "});\r",
              "\r",
              "pm.test(\"Validate Message\", () => {\r",
              "let jsonData = pm.response.json();\r",
              "pm.expect(jsonData.status).to.eql(200);\r",
              "\r",
              "});\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(260);\r",
              "});\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"admin\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://belajar-bareng.onrender.com/api/login",
          "protocol": "https",
          "host": [
            "belajar-bareng",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Post_AddUser",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Status code is 200\", function () {\r",
              "    pm.response.to.have.status(200);\r",
              "});\r",
              "\r",
              "pm.test(\"Status code is 400\", function () {\r",
              "    pm.response.to.have.status(400);\r",
              "});\r",
              "\r",
              "pm.test(\"Validate Message\", () => {\r",
              "let jsonData = pm.response.json();\r",
              "pm.expect(jsonData.username).to.eql(\"cacu\");\r",
              "});\r",
              "\r",
              "pm.test(\"Validate Message\", () => {\r",
              "let jsonData = pm.response.json();\r",
              "pm.expect(jsonData.message).to.eql(\"Username \\\"cacu\\\" already exists!\");\r",
              "});\r",
              "\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{token}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"cacu\",\r\n    \"age\": 21\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://belajar-bareng.onrender.com/api/add-user",
          "protocol": "https",
          "host": [
            "belajar-bareng",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "add-user"
          ]
        }
      },
      "response": []
    }
  ],
  "variable": [
    {
      "key": "token",
      "value": ""
    }
  ]
}