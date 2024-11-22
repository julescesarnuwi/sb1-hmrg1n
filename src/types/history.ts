import { z } from 'zod';

export const historyEntrySchema = z.object({
  id: z.string(),
  formType: z.enum(['child', 'reunification', 'medical']),
  formId: z.string(),
  timestamp: z.string(),
  userId: z.string(),
  action: z.enum(['created', 'updated', 'archived']),
  changes: z.array(z.object({
    field: z.string(),
    oldValue: z.any(),
    newValue: z.any()
  })),
  notes: z.string().optional()
});

export type HistoryEntry = z.infer<typeof historyEntrySchema>;