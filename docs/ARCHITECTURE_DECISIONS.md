# 🧠 Architecture Decisions

## Purpose

This document explains key architectural decisions made during system design.

---

## 1. MERN Stack Selection

Chosen because:

- Fast development cycle
- JavaScript end-to-end
- Strong ecosystem
- Easy deployment

---

## 2. Service-Based Backend

Instead of monolithic logic, services were separated:
```
    services/
    ├── aiScoringService
    ├── decisionService
    ├── fatigueService
    └── duplicateService
```

## Benefits:
- Maintainability
- Testability
- Scalability

---

## 3. Rule-Based AI Approach

A scoring-based AI engine was selected because:

- Transparent decisions
- Explainable AI
- Deterministic outputs
- Meets real-AI requirement

---

## 4. MongoDB Usage

Reasons:
- Flexible schema
- Fast logging storage
- JSON compatibility

---

## 5. Context API for State

Used instead of Redux because:
- Lightweight
- Simple global state
- Suitable for dashboard scale

---

## 6. Fail-Safe Design

Fallback mechanisms ensure:
- System never crashes
- Notifications always processed
- Safe defaults applied

---

## 7. Deployment Strategy

Frontend → Vercel  
Backend → Render  
Database → MongoDB Atlas

Ensures scalable cloud architecture.

---

## Conclusion

Architecture prioritizes:

✅ Reliability  
✅ Explainability  
✅ Scalability  
✅ Deployment readiness