# 🚀 CI/CD Pipeline with GitHub Actions & AWS S3

This project showcases a complete **CI/CD pipeline** for deploying a static website to **Amazon S3** using **GitHub Actions**. It automates every step from pushing code to production deployment, offering a modern, DevOps-oriented workflow.

---

## 📌 Overview

The goal was to automate the deployment of a static site so that every commit to the `master` branch would automatically update the live version hosted on S3. This eliminates the need for manual uploads or build commands.

---

## 🛠 Key Features

| Feature                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| 🔁 Full CI/CD Workflow | Automates build and deployment using GitHub Actions     |
| ☁️ AWS S3 Hosting      | Hosts static files with global scalability              |
| 🔐 Secure IAM Setup    | Uses fine-grained IAM permissions via GitHub Secrets    |
| 🚀 Instant Deployment  | Every commit results in a live, production-ready update |
| ✅ File Validation      | Ensures all required files exist before deployment      |

---

## 🔍 Real-World Applications

This pipeline is ideal for:

* Personal portfolios
* MVPs and landing pages
* Static documentation (e.g., Docusaurus, MkDocs)
* Hackathons and quick demo sites
* Frontend-heavy production deployments

---

## ✅ What I Learned

* Setting up **GitHub Actions workflows** from scratch
* Creating and attaching **IAM roles/policies** for S3
* Using **GitHub secrets** for secure authentication
* Troubleshooting CI/CD issues (e.g., build failures, access denied errors)
* Thinking like a **DevOps engineer** by automating repeatable steps

---

## 🤔 Challenges Faced

* Misconfigured IAM permissions initially caused access issues
* Workflow failed due to missing files — solved using pre-deployment validation
* Deployment sync delays were resolved with proper cache invalidation steps

---

## ✅ Final Thoughts

This project gave me hands-on experience with real-world CI/CD concepts and AWS services. It’s a foundational setup for anyone looking to implement **automated deployments** for static websites.

---

### ✍️ Author: Vyshnavi Kusukuntla

📬 https://www.linkedin.com/in/vyshnavi-kusukuntla-339867297/ • 💻 vyshnavi1411
