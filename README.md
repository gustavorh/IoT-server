ENDPOINTS:
Statuses:
- GET /api/statuses
- POST /api/statuses
- PUT /api/statuses/:statusId
- DELETE /api/statuses/:statusId

Microcontrollers:
- GET /api/microcontrollers
- POST /api/microcontrollers
- PUT /api/microcontrollers/:microcontrollerId
- DELETE /api/microcontrollers/:microcontrollerId

Sensors:
- GET /api/sensors
- POST /api/sensors
- PUT /api/sensors/:sensorId
- DELETE /api/sensors/:sensorId

Modules:
- GET /api/modules
- POST /api/modules
- PUT /api/modules/:moduleId
- DELETE /api/modules/:moduleId


IoT:
- GET /api/iot/sensor/:sensorId/all
- GET /api/iot/sensor/:sensorId/latest
- POST /api/iot/send-value


Requests Body:
- POST /api/statuses
{
  "name": "ACTIVO",
  "description": "EL MICROCONTROLADOR SE ENCUENTRA ACTIVO Y CON ACCESO AL SERVIDOR."
}

- POST /api/microcontrollers
{
  "name": "ESP32",
  "ip": "192.168.0.99",
  "status_id": 1
}

- POST /api/sensors
{
  "name": "MQ-2",
  "type": "Gas"
}

- POST /api/modules
{
  "name": "Main IoT Module",
  "location": "Building A, Floor 3",
  "microcontroller_id": 1,
  "sensors": [
    {
      "sensorId": 1,
      "quantity": 2
    },
    {
      "sensorId": 2,
      "quantity": 1
    }
  ]
}

- POST /api/iot/send-value
{
    "sensor_id": 1,
    "value": 15,
    "unit": "%",
    "date": "2024-12-04T21:00:30Z"
}