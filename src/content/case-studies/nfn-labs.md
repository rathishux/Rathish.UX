# TAC Healthcare — EHR Case Study

TAC Healthcare is an electronic health record (EHR) application built for a healthcare provider based in Scotland. It covers the full loop of running a clinic day-to-day: booking patients in, keeping their records, running consultations, assigning follow-up programs, and managing the staff and clinics behind it all.

Below is a walkthrough of how the product actually works, screen by screen.

## 1. Appointments & Booking

The **Appointments** list is the front door — a table of every booked slot, filterable by date, clinic, clinician, role, and status. Each row shows the patient, time, clinic, and clinician, with quick actions to start, edit, delete, or duplicate an appointment.

![Appointments list](images/appointments-list.jpg)

New appointments are booked through a single detailed form: appointment date, patient, clinic, appointment type (video call, face to face, telephone, or paper screen review), plus optional add-ons like assessments, vaccinations, questionnaires, and client packages. Confirmation emails can be toggled on a per-channel basis (personal or work address).

![New appointment form](images/new-appointment.jpg)

Alongside the calendar-driven Appointments list, there's a separate **To Book** queue with two tabs:
- **Referral** — patients who've come in via referral and still need a slot booked
- **Reminder** — patients due for a follow-up within a set window (with a due date and end date)

Both feed back into the same booking form, so a referral or reminder converts into a normal appointment.

![To Book — Referral tab](images/to-book-referral.jpg)
![To Book — Reminder tab](images/to-book-reminder.jpg)

## 2. Patient Management

The **Patients** list shows every patient on file — ID, name, gender, age, blood group, and current treatment — with search and the usual view/edit/delete actions.

![Patients list](images/patient-list.jpg)

Adding a patient is a 3-step form:
1. **Basic Details** — name, date of birth, gender, contact info, nationality, GP details, and employer/contract fields (this is an occupational health context, so job and employer data sits alongside personal details)
2. **Contact Address** — address plus a "Book Appointment Now" checkbox, so a new patient can go straight into the booking flow without leaving the form
3. **Job History** — employer, role, dates, department, and location

![Add Patient — Basic Details](images/add-patient-basic-details.jpg)
![Add Patient — Contact Address](images/add-patient-contact-address.jpg)
![Add Patient — Job History](images/add-patient-job-history.jpg)

Once a patient exists, everything about them lives under **Patient Details**, which is organized into a left-hand tab list:

- **Critical Information** — Allergies, Medical History, and Declared Medication, each as its own sub-tab with a status toggle per entry (active/inactive)

![Critical Information — Allergies](images/critical-info-allergies.jpg)

- **Past Records** — split into *Uploaded Docs* (a searchable file list) and *Appointment Details* (a full record of every past visit — vitals, urinalysis, visual acuity, medical exam checklists, questionnaires completed, assessments, certificates issued, and clinical notes, all downloadable as a PDF)

![Past Records — Appointment Details](images/past-records-appointment-details.jpg)

- **Clinical Notes**, **Advise Notes**, **Admin Notes** — three separate note types that all share the same interface: a rich-text editor plus a "Recommend Image/Video/Docs" panel pulling from the shared media Library

![Clinical Notes](images/clinical-notes.jpg)

- **Prescription** — a medication form (name, dosage, duration, timing, before/after food) that appends to a running prescription history

![Prescription](images/prescription.jpg)

- **Programs** — see below
- **Upload File** — a document table (name, comments, date) with its own upload modal supporting drag-and-drop and tagging
- **Summary** — every section above rolled into one long, read-only page — effectively a printable patient overview

![Patient Summary](images/summary.jpg)

- **Wellness Profile** — a dashboard of the patient's own health metrics: weight, heart rate, calories, steps, sleep, workout type, water intake, blood pressure, and blood sugar, each with a trend line

![Wellness Profile](images/wellness-profile.jpg)

## 3. Programs

"Programs" is where clinical staff assign a treatment or exercise plan to a specific patient — for example, hip-strengthening exercises after an injury, or a yoga or physiotherapy routine. This content is delivered as image or video files rather than text instructions.

![Programs tab](images/programs.jpg)

The content itself comes from a shared **Library**: a media grid (images, videos, documents) that can be filtered by type and organized with custom labels (e.g. "Yoga," "Cycling," "Aerobics," "Weight loss"). Clinical staff browse the Library and attach relevant media to a patient's Program, rather than uploading fresh content each time.

![Media Library](images/library.jpg)

The Programs tab can also surface a completed patient questionnaire — for instance, a Weight Loss Program screening with the patient's answers, timestamp, and completion status — which is typically what triggers a program being assigned in the first place.

## 4. Admin & Access Control

The **Admin** section is where the clinic itself gets configured, separate from day-to-day patient work:

- **Organization Profile** — the provider's own details (name, address, logo, contact info), viewable and editable

![Organization Profile](images/admin-org-profile.jpg)

- **Users** — a list of everyone with access, with role and status. Adding or editing a user covers basic info (name, contact, qualifications, clinics they work at) plus a long, granular permissions checklist split into Admin, Patient, Appointment, Others, Settings, and Inventory categories

![Admin — Users list](images/admin-users.jpg)
![Admin — Add New User](images/admin-add-user.jpg)

- **RBAC** — the same permission checklist, but saved as a reusable named role (e.g. "Jr. Doctor," "Network Doctor," "Counsellor," "Account Manager") instead of being set per-person. New users get assigned one of these roles rather than having permissions configured from scratch

![Admin — RBAC roles](images/admin-rbac.jpg)

- **Clinics** — a list of every clinic in the network (name, type, contact, staff count), with an Add Clinic form covering hours, address, and escalation configuration

![Admin — Clinics](images/admin-clinics.jpg)

- **Library (admin side)** — the same shared media Library described above, but this is where content actually gets uploaded and labeled by admin staff before it's available for clinical staff to assign

## How it fits together

The system has one shared thread running through it: content and permissions set up on the admin side (roles, clinics, library media) flow down into what clinical staff can see and do on the patient side (booking, notes, programs). A patient's journey — referral or booking, consultation, notes and prescriptions, an assigned program, ongoing wellness tracking — sits on top of that admin layer without either side needing to think about the other directly.
