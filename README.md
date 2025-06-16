# devops-project
project-root/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.js
├── frontend/
│   ├── index.html
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md

# Cloud DevOps Starter Project

A simple full-stack application demonstrating DevOps and cloud deployment on Google Cloud Platform (GCP) using Docker, Kubernetes, Terraform, and GitHub Actions.

## 🔧 Tech Stack
- **Frontend**: HTML/CSS (optional React upgrade)
- **Backend**: Node.js + Express
- **Containerization**: Docker
- **Infrastructure**: Terraform
- **CI/CD**: GitHub Actions
- **Deployment**: Google Kubernetes Engine (GKE)

---

## 🚀 Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cloud-devops-starter.git
cd cloud-devops-starter
```

### 2. Build and run backend locally
```bash
cd backend
npm install
npm start
```

---

## 🐳 Docker
Build the backend Docker image:
```bash
docker build -t your-image-name ./backend
```

---

## ☁️ GCP Deployment (Terraform + GKE)

### 1. Configure Terraform variables
Edit `terraform/variables.tf` and set your GCP project and region.

### 2. Initialize and apply Terraform
```bash
cd terraform
terraform init
terraform apply
```

This creates the GKE cluster and other resources.

---

## 🔁 CI/CD with GitHub Actions

The workflow in `.github/workflows/deploy.yml` does the following:
- Builds and pushes Docker image to Google Container Registry
- Deploys to GKE using `kubectl`

### Environment variables to set in GitHub Actions:
- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GCP_SA_KEY` (base64 encoded service account JSON)

---

## 🧪 Kubernetes Deployment

Create `k8s/deployment.yaml` and `k8s/service.yaml` with your app’s deployment and service configurations.
Then apply them:
```bash
kubectl apply -f k8s/
```

---

## 📊 Monitoring (Optional)
Enable Cloud Monitoring (Stackdriver) to track metrics like CPU, memory, and uptime.

---

## 📁 Folder Overview
See the root project structure at the top of this file.

---

## 📌 To-Do / Enhancements
- Add frontend React version
- Integrate logging
- Add authentication (Firebase or Auth0)

---

## 📃 License
MIT

