# **Mock Server with Real-Time Data Fetching**

This project simulates a mock server that responds to API requests, providing service health data across multiple regions. It includes a frontend React application that fetches and displays this data in real-time, reflecting changes made to the mock server.

## **Features**

### **Mock API Server**
- Responds with service health data in JSON format.
- Supports dynamic updates via a JSON file backend.

### **React Frontend**
- Displays service health data in a table format with color-coded statuses (Healthy, Degraded, Unhealthy).
- Reactively updates the table by fetching new data from the mock API at regular intervals.

### **Automatic Data Refresh**
- The frontend fetches updated data from the server every 5 seconds using polling, ensuring real-time updates for the users.

### **Backend Data Management**
- The server’s data can be modified directly in a JSON file, and the frontend will reflect changes without requiring manual refresh.

### **Simple and Lightweight**
- Built using Express.js for the mock server and React.js for the frontend, making it a great starting point for learning about server-client communication and data handling in web applications.

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
