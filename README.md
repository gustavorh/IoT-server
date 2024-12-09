API Routes:
Modules:
  - GET /api/modules
  - POST /api/modules
    Body: 
{
    {
  "name": "Monitor-Norte",
  "location": "UPLA Invernadero",
  "microcontroller_id": 1,
  "module_details": 
    [
      {
        "sensor_id": 1,
        "quantity": 1
      },
      {
        "sensor_id": 2,
        "quantity": 1
      },
      {
        "sensor_id": 3,
        "quantity": 1
      }
    ]
}

Sensors:
  - GET /api/sensors
  - POST /api/sensors
    Body:
{
  "name": "MQ-2",
  "type": "Gas"
}

Microcontrollers:
  - GET /api/microcontrollers
  - POST /api/microcontrollers
    Body:
{
  "name": "ESP32",
  "ip": "192.168.0.99",
  "status_id": 1
}

Statuses:
  - GET /api/statuses
  - POST /api/statuses
    Body:
{
  "name": "ACTIVO",
  "description": "EL MICROCONTROLADOR SE ENCUENTRA ACTIVO Y CON ACCESO AL SERVIDOR."
}

IoT:
  - POST /api/iot/send-value
    Body:
{
  "sensor_id": 1,
  "value": 10,
  "unit": "%",
  "date": "2024-02-02"
}

  - GET /api/iot/sensor/1/latest
  - GET /api/iot/sensor/1/all