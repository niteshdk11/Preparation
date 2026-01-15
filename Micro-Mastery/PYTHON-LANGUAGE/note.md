# **Python Virtual Environment Notes**

### **1. Create a Virtual Environment**

```bash
python3 -m venv myenv
```

### **2. Activate the Virtual Environment**

- **Linux/Mac:**
  ```bash
  source myenv/bin/activate
  ```
- **Windows:**
  ```bash
  .\myenv\Scripts\activate
  ```

### **3. List Installed Packages (Incorrect)**

```bash
pip list > requirement.txt
```

⚠️ _This method is not valid for generating `requirements.txt`. Use the correct method below._

### **4. Correct Way to Generate `requirements.txt`**
```bash
pip freeze > requirements.txt
```

### **5. Install Packages from `requirements.txt`**

```bash
pip install -r requirements.txt
```

### **6. Deactivate Virtual Environment**

```bash
deactivate
```
