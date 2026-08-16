# TAC Healthcare — EHR Case Study
NFN Labs · Healthcare EHR · UX Design

---

TAC Healthcare is an electronic health record (EHR) application built for a healthcare provider based in Scotland — covering the full loop of running a clinic day to day: booking patients in, keeping their records, running consultations, assigning follow-up programs, and managing the staff and clinics behind all of it. The real design problem wasn't any single one of those screens — it was getting a lot of different roles (front desk, clinician, admin) to share one system without each of them having to think about what the others were doing. Below is a walkthrough of how that holds together, screen by screen.

## 1. Appointments & Booking

The **Appointments** list is the front door — a table of every booked slot, filterable by date, clinic, clinician, role, and status. Each row shows the patient, time, clinic, and clinician, with quick actions to start, edit, delete, or duplicate an appointment.

![Appointments list](images/appointments-list.webp)

New appointments go through a single detailed form: appointment date, patient, clinic, appointment type (video call, face to face, telephone, or paper screen review), plus optional add-ons like assessments, vaccinations, questionnaires, and client packages. Confirmation emails toggle per channel — personal or work address — since a patient's preferred contact method isn't always their only one.

![New appointment form](images/new-appointment.webp)

Not every patient arrives ready to book, though. A **To Book** queue sits alongside the calendar with two tabs: **Referral**, for patients who've come in via referral and still need a slot, and **Reminder**, for patients due a follow-up within a set window. Both feed into the same booking form, so a referral or reminder converts straight into a normal appointment instead of becoming a separate thing to track.

![To Book — Referral tab](images/to-book-referral.webp)
![To Book — Reminder tab](images/to-book-reminder.webp)

## 2. Patient Management

The **Patients** list shows everyone on file — ID, name, gender, age, blood group, current treatment — with search and the usual view/edit/delete actions.

![Patients list](images/patient-list.webp)

Adding a patient is a 3-step form:
1. **Basic Details** — name, date of birth, gender, contact info, nationality, GP details, and employer/contract fields, since this is an occupational health context and job data sits alongside personal details
2. **Contact Address** — address plus a "Book Appointment Now" checkbox, so a new patient can go straight into booking without leaving the form
3. **Job History** — employer, role, dates, department, location

![Add Patient — Basic Details](images/add-patient-basic-details.webp)
![Add Patient — Contact Address](images/add-patient-contact-address.webp)
![Add Patient — Job History](images/add-patient-job-history.webp)

Once a patient exists, everything about them lives under **Patient Details**, organized into a left-hand tab list:

- **Critical Information** — Allergies, Medical History, and Declared Medication, each its own sub-tab with a status toggle per entry, so something like a resolved allergy stays on record without cluttering what's currently relevant

![Critical Information — Allergies](images/critical-info-allergies.webp)

- **Past Records** — split into *Uploaded Docs* (a searchable file list) and *Appointment Details* (every past visit — vitals, urinalysis, visual acuity, exam checklists, questionnaires, assessments, certificates, clinical notes — downloadable as a PDF)

![Past Records — Appointment Details](images/past-records-appointment-details.webp)

- **Clinical Notes**, **Advise Notes**, **Admin Notes** — three note types sharing one interface: a rich-text editor plus a "Recommend Image/Video/Docs" panel pulling from the shared media Library, so a clinician writing a note can attach supporting material without leaving it

![Clinical Notes](images/clinical-notes.webp)

- **Prescription** — a medication form (name, dosage, duration, timing, before/after food) that appends to a running history rather than overwriting it

![Prescription](images/prescription.webp)

- **Programs** — see below
- **Upload File** — a document table (name, comments, date) with drag-and-drop and tagging
- **Summary** — everything above rolled into one long, read-only page — a printable patient overview for handoffs

![Patient Summary](images/summary.webp)

- **Wellness Profile** — the patient's own health metrics (weight, heart rate, calories, steps, sleep, workout type, water intake, blood pressure, blood sugar), each with a trend line, so a single reading is never read in isolation

![Wellness Profile](images/wellness-profile.webp)

## 3. Programs

**Programs** is where clinical staff assign a treatment or exercise plan to a patient — hip-strengthening exercises after an injury, a yoga or physiotherapy routine — delivered as image or video rather than text, because a patient following a home exercise plan needs to see the movement, not read a description of it.

![Programs tab](images/programs.webp)

That content comes from a shared **Library** — a media grid filterable by type and organized with custom labels ("Yoga," "Cycling," "Aerobics," "Weight loss") — so clinical staff attach existing, vetted media to a patient's Program instead of sourcing fresh content every time.

![Media Library](images/library.webp)

A Program can also surface a completed patient questionnaire — a Weight Loss Program screening with the patient's answers, timestamp, and completion status — which is typically what triggers the program being assigned in the first place.

## 4. Admin & Access Control

The **Admin** section configures the clinic itself, kept separate from day-to-day patient work:

- **Organization Profile** — the provider's own details (name, address, logo, contact info)

![Organization Profile](images/admin-org-profile.webp)

- **Users** — everyone with access, with role and status. Adding or editing a user covers basic info plus a long, granular permissions checklist across Admin, Patient, Appointment, Others, Settings, and Inventory

![Admin — Users list](images/admin-users.webp)
![Admin — Add New User](images/admin-add-user.webp)

- **RBAC** — that same permission checklist, saved as a reusable named role ("Jr. Doctor," "Network Doctor," "Counsellor," "Account Manager") instead of set per person, so a new hire gets assigned a role rather than having permissions built from scratch

![Admin — RBAC roles](images/admin-rbac.webp)

- **Clinics** — every clinic in the network (name, type, contact, staff count), with an Add Clinic form for hours, address, and escalation configuration

![Admin — Clinics](images/admin-clinics.webp)

- **Library (admin side)** — the same shared media Library, but this is where content actually gets uploaded and labeled before clinical staff can assign it

## How it fits together

Everything above shares one thread: content and permissions set up on the admin side — roles, clinics, library media — flow down into what clinical staff can see and do on the patient side. A patient's actual journey — referral or booking, consultation, notes and prescriptions, an assigned program, ongoing wellness tracking — sits on top of that admin layer without either side needing to think about the other directly. That separation, configure once on the admin side, use everywhere on the clinical side, is what kept the system coherent as more roles, clinics, and content got added to it over time.
