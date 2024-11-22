import { z } from 'zod';

export const childSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(1, "Le prénom est requis"),
    lastName: z.string().min(1, "Le nom est requis"),
    dateOfBirth: z.string().min(1, "La date de naissance est requise"),
    placeOfBirth: z.string().min(1, "Le lieu de naissance est requis"),
    gender: z.enum(["M", "F"]),
    nationality: z.string().min(1, "La nationalité est requise"),
  }),
  origin: z.object({
    socialCategory: z.string().min(1, "La catégorie sociale est requise"),
    previousResidence: z.string().min(1, "La résidence précédente est requise"),
    reasonForAdmission: z.string().min(1, "La raison d'admission est requise"),
  }),
  education: z.object({
    currentLevel: z.string(),
    schoolName: z.string(),
    lastAttendedYear: z.string(),
    performanceNotes: z.string(),
  }),
  medical: z.object({
    healthStatus: z.string(),
    chronicConditions: z.string(),
    medications: z.string(),
    allergies: z.string(),
    lastCheckup: z.string(),
  }),
  admission: z.object({
    admissionDate: z.string(),
    admittedBy: z.string(),
    centerName: z.string(),
    registrationNumber: z.string(),
  }),
  familyInfo: z.object({
    fatherName: z.string(),
    fatherStatus: z.string(),
    motherName: z.string(),
    motherStatus: z.string(),
    familyAssets: z.string(),
    siblings: z.array(z.object({
      name: z.string(),
      age: z.string(),
      status: z.string(),
    })),
  }),
  evaluation: z.object({
    teamDecision: z.string(),
    proposedInterventions: z.string(),
    followUpNotes: z.string(),
  }),
});

export const reunificationSchema = z.object({
  childInfo: z.object({
    registrationNumber: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
  }),
  guardianInfo: z.object({
    firstName: z.string(),
    lastName: z.string(),
    relationship: z.string(),
    idNumber: z.string(),
    address: z.string(),
    phone: z.string(),
  }),
  reunificationDetails: z.object({
    date: z.string(),
    location: z.string(),
    witnesses: z.array(z.object({
      name: z.string(),
      role: z.string(),
    })),
    conditions: z.string(),
  }),
  verification: z.object({
    staffName: z.string(),
    staffPosition: z.string(),
    date: z.string(),
    notes: z.string(),
  }),
});

export type ChildForm = z.infer<typeof childSchema>;
export type ReunificationForm = z.infer<typeof reunificationSchema>;