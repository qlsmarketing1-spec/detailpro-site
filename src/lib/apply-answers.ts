/** Shared between the apply forms (client) and /api/apply (server). */

export type AnswerLabel = { id: string; question: string; answer: string };

type Question = { id: string; text: string; options: { value: string; label: string }[] };

/** Turn stored option codes into human-readable question/answer pairs, in question order. */
export function labelAnswers(
  questions: Question[],
  answers: Record<string, string | string[] | undefined>,
): AnswerLabel[] {
  return questions.flatMap((q) => {
    const raw = answers[q.id];
    if (raw === undefined || (Array.isArray(raw) && raw.length === 0)) return [];
    const values = Array.isArray(raw) ? raw : [raw];
    const answer = values.map((v) => q.options.find((o) => o.value === v)?.label ?? v).join('; ');
    return [{ id: q.id, question: q.text, answer }];
  });
}
