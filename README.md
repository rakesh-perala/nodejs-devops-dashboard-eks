# 🚀 Node.js DevOps Dashboard on Kubernetes (EKS)

A full-stack DevOps project demonstrating deployment of a **Node.js + React application** on Kubernetes using AWS EKS with CI/CD, Ingress, and Auto Scaling.

---

## 🏗️ Architecture

```
User → ALB → Ingress → Frontend → Backend → Pods
                             ↓
                      Auto Scaling (HPA)
```

---

## 🧰 Tech Stack

* Node.js (Backend API)
* React (Frontend UI)
* Docker (Containerization)
* Kubernetes (EKS)
* Jenkins (CI/CD)
* AWS ECR (Image Registry)
* Ingress (ALB)

---

## 📦 Features

✅ Full-stack application (Node.js + React)
✅ Kubernetes deployment (EKS)
✅ Ingress routing (ALB)
✅ Auto scaling using HPA
✅ CI/CD pipeline using Jenkins
✅ Dockerized microservices

---

## 📁 Project Structure

```
nodejs-devops-dashboard-eks/
├── backend/
├── frontend/
├── k8s/
├── terraform/
├── jenkins/
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/rakesh-perala/nodejs-devops-dashboard-eks.git
cd nodejs-devops-dashboard-eks
```

---

### 2. Build Docker Images

```
docker build -t backend ./backend
docker build -t frontend ./frontend
```

---

### 3. Push Images

```
docker tag backend <your-dockerhub>/backend:latest
docker tag frontend <your-dockerhub>/frontend:latest

docker push <your-dockerhub>/backend:latest
docker push <your-dockerhub>/frontend:latest
```

---

### 4. Deploy to Kubernetes

```
kubectl apply -f k8s/
```

---

### 5. Access Application

```
kubectl get ingress
```

👉 Open the ALB DNS in browser

---

## 📈 Scaling Demo

```
kubectl scale deployment backend --replicas=5
```

👉 Refresh UI to see different pod hostnames 🔥

---

## 🔄 CI/CD Pipeline

* Jenkins pipeline builds Docker images
* Pushes images to DockerHub / ECR
* Deploys to Kubernetes using kubectl

---

## You need: Softwares

Node.js + npm
Docker
kubectl
AWS CLI
eksctl
Git
Jenkins (optional for CI/CD)

## 🎥 Demo

(Add your YouTube video link here)

---

## 📸 Screenshots

(Add screenshots here)

---

## 👨‍💻 Author

Rakesh Perala

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
