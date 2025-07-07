# Statement on SAP HANA XS Classic Migration Approach  
## API Compatibility & Legal Compliance  

At **codbex**, our migration of SAP HANA XS Classic applications maintains **full functional equivalence** while ensuring **strict adherence** to licensing and intellectual property boundaries.  

## 1. What We Do  

### ✅ XS Classic API Support  
- We provide **compatible implementations** of XS Classic APIs:  
  - **Identical signatures** for all public interfaces  
  - **Independent codebase** (no SAP binaries or libraries)  
  - **Open specifications** used for reference (no reverse engineering)  

### ✅ HDB* & XS* Artefact Processing  
- We implement our own **processors/compilers** for:  
  - `.hdbprocedure`, `.hdbtable`, `.hdbview`, `.hdbdd`, `.xsaccess`, `.xsprivileges` etc.  
  - **No SAP runtime dependencies** in compilation or execution  

### ✅ Full Stack Independence  
- Deploys to **any cloud/on-prem** environment:
  - Kubernetes, Cloud Foundry, or bare metal
  - **No HANA runtime required** post-migration  

## 2. What We Do Not Do  

### ❌ No SAP Runtime Usage  
- We **never**:  
  - Bundle SAP’s `.jar`/`.so` files  
  - Require HANA for execution  
  - Call proprietary SAP internal APIs  

### ❌ No SAP Toolchain Dependency  
- Our processors:  
  - Don’t use SAP’s `hdbsql`/`hdbcli`  
  - Don’t invoke `XS Engine` or `HANA DI`  

### ❌ No Metadata Extraction  
- All artefact definitions are:  
  - **Customer-authored** (from your repo)  
  - **Never scraped** from SAP systems  

## 3. Legal Safeguards  

### Key Differentiators  

| SAP Component       | Our Approach |  
|---------------------|-------------|  
| XS Classic APIs     | Clean-room reimplementation |  
| HDB* Artefacts      | Own parser/compiler |  
| XSJS/XSODATA        | Transpiled to Node.js/Java |  

### Compliance Highlights
1. **No derivative works** – All code is original
2. **No copyleft contamination** – MIT-licensed toolchain
3. **Patent mitigation** – Alternative algorithms where applicable

## 4. Technical Benefits

- **Zero-Risk Licensing** – No SAP IP incorporated
- **Multi-Cloud Ready** – Runs on AWS/Azure/GCP
- **Modern Tooling** – Web IDE, Git, CI/CD native

## 5. Disclaimer  

This describes codbex’s technical implementation. **Not legal advice.** Review your SAP agreements and consult counsel.  
