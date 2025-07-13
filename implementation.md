## 🧑‍🎓 DevOps Project: AWS S3 Static Website Hosting using GitHub Actions

### 🔧 Step-by-Step Implementation by Student

#### ✅ 1. Created an IAM User

* Created an IAM user via [AWS IAM Console](https://console.aws.amazon.com/iam/)
* Attached the **AmazonS3FullAccess** policy to the user
* Generated **Access Key** and **Secret Key** for GitHub integration
<img width="2940" height="1912" alt="Screenshot 2025-07-13 at 5 05 18 PM" src="https://github.com/user-attachments/assets/9491d25e-35ee-4630-8711-c0ab05656ded" />



---

#### 🪣 2. Created an S3 Bucket

* Opened [AWS S3 Console](https://s3.console.aws.amazon.com)
* Created a new S3 bucket with a **globally unique name**
* Selected the **Asia Pacific (Mumbai)** region
* Enabled public access for static website hosting
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 4 39 21 PM" src="https://github.com/user-attachments/assets/d5c7af3b-30c4-4df8-8678-479fc71f1a8b" />
  

---

#### 🌐 3. Enabled Static Website Hosting

* Configured **index.html** and **error.html** as website entry points
* Enabled static hosting through the bucket's **Properties tab**
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 4 40 00 PM" src="https://github.com/user-attachments/assets/3235dc83-db69-4e0d-b6b4-b4a4cac3bbd3" />

---

#### 🔓 4. Allowed Public Access

* Disabled all **Block Public Access** settings in **Permissions**
* Confirmed via warning acknowledgment
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 4 40 20 PM" src="https://github.com/user-attachments/assets/4e8f9c99-b4aa-4641-ba0d-e85e7625370f" />


---

#### 👥 5. Set Object Ownership

* Enabled **ACLs**
* Selected **Bucket owner preferred** to manage permissions
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 4 59 43 PM" src="https://github.com/user-attachments/assets/2431307d-2e31-4b50-8c6e-0b3db22d2e0e" />


---

#### 🛡 6. Attached Bucket Policy

* Used the [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html)
* Created a public read policy:

```json
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::your-unique-bucket-name/*"
}
```

* Attached the policy under **Bucket permissions**

---

#### 🔑 7. Generated IAM Access Keys

* Copied the **Access Key ID** and **Secret Access Key**
* Used them to configure GitHub Actions secrets
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 4 49 55 PM" src="https://github.com/user-attachments/assets/060b41c9-7b55-4497-a5d3-a2b74637aa0c" />


---

#### 🚀 8. Set up GitHub Actions Workflow

* In the `.github/workflows/` directory, created a file `main.yml`
* Configured CI/CD pipeline using the following workflow:


---

#### 🔐 9. Added Repository Secrets in GitHub

* Added the following secrets under GitHub `Settings > Secrets and Variables`:

  * `AWS_ACCESS_KEY_ID`
  * `AWS_SECRET_ACCESS_KEY`
  * `AWS_S3_BUCKET_NAME`

---

### 📦 Outcome

* The student successfully deployed a portfolio website on **AWS S3** using a **CI/CD pipeline with GitHub Actions**
* The site updates automatically whenever code is pushed to the `master` branch
  
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 5 07 49 PM" src="https://github.com/user-attachments/assets/1c4eea54-6539-49d0-87bf-eebce053b4ec" />
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 5 07 53 PM" src="https://github.com/user-attachments/assets/7daa0aa6-3512-48cf-af64-d4494de31e58" />
  <img width="2940" height="1912" alt="Screenshot 2025-07-13 at 5 07 56 PM" src="https://github.com/user-attachments/assets/0a3d2024-a371-47e4-96a8-2ffb31174ea7" />



