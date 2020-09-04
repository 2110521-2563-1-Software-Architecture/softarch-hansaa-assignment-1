# softarch-hansaa-assignment-1  
  
### รายชื่อสมาชิกในกลุ่ม  
6031035821 Budsakorn Khosagrid  
6030097521 Janejira Aroonnual  
6030090021 Chirapa Peisiripatana  
6031036421 Palmmanee Thapphachaya  
6031038721 Prawsang Chayakulkeeree 

## Contents  
This contains the source code for REST api, client for the REST api, gRPC, and gRPC's client for a book record service. The directories and described below:  
1. /client - This is the client that calls the RESTful APIs
2. /gRPC - Contains both the client and server using gRPC
3. /rest - This is the source code for the RESTful APIs

## Screenshots of Swagger 
![Screenshots of Swagger](https://github.com/2110521-2563-1-Software-Architecture/softarch-hansaa-assignment-1/blob/master/images/swagger1.png?raw=true)

## Comparision between calling the methods based on gRPC and REST API
For RESTful Apis, the clients makes a request to the server by using HTTP protocol. The server then matches the uri given from the client to see which function will be exectuted. The function then returns a response for the client also using the HTTP protocol.

| Functions     | gRPC          | Rest  |
| ------------- |:-------------:| -----:|
| List All Books|               |       |
| Get One Book  |               |       |
| Add a Book    |               |       |
| Remove a Book |               |       |

What are the main differences between REST API and gRPC?

REST API จะส่ง Request ด้วย HTTP Protocol เพื่อให้ server ทำงาน แล้วส่ง Response กลับมา แต่ gRPC จะเรียกใช้ procedure จาก server ที่ทำงานอยู่โดยตรง

What is the benefits of introduce interface in front of the gRPC and REST API of the book services?
Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side, e.g. in a table format as shown below.
| Functions     | gRPC          | Rest  |
| ------------- |:-------------:| -----:|
| List All Books|               |       |
| Get One Book  |               |       |
| Add a Book    |               |       |
| Remove a Book |               |       |

Draw a component diagram representing the book services with and without interfaces.

![component diagram of RestApi with interface](https://github.com/2110521-2563-1-Software-Architecture/softarch-hansaa-assignment-1/blob/master/images/Component%20(4).png)
