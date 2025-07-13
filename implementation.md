## 🧑‍🎓 DevOps Project: AWS S3 Static Website Hosting using GitHub Actions

### 🔧 Step-by-Step Implementation by Student

#### ✅ 1. Created an IAM User

* Created an IAM user via [AWS IAM Console](https://console.aws.amazon.com/iam/)
* Attached the **AmazonS3FullAccess** policy to the user
* Generated **Access Key** and **Secret Key** for GitHub integration

---

#### 🪣 2. Created an S3 Bucket

* Opened [AWS S3 Console](https://s3.console.aws.amazon.com)
* Created a new S3 bucket with a **globally unique name**
* Selected the **Asia Pacific (Mumbai)** region
* Enabled public access for static website hosting

---

#### 🌐 3. Enabled Static Website Hosting

* Configured **index.html** and **error.html** as website entry points
* Enabled static hosting through the bucket's **Properties tab**

---

#### 🔓 4. Allowed Public Access

* Disabled all **Block Public Access** settings in **Permissions**
* Confirmed via warning acknowledgment

---

#### 👥 5. Set Object Ownership

* Enabled **ACLs**
* Selected **Bucket owner preferred** to manage permissions

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
* The site updates automatically whenever code is pushed to the `main` branch
