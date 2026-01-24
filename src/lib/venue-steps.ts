// Utility functions for managing venue addition step completion

const SESSION_KEY = "venue_add_session";
const STEPS = {
  SELECT_SERVICE: 1,
  DETAILS: 2,
  DESCRIPTION: 3,
  FEATURES: 4,
  GALLERY: 5,
  BOOKING: 6,
  SUMMARY: 7,
  KYC: 8,
} as const;

type StepNumber = typeof STEPS[keyof typeof STEPS];

interface StepSession {
  completedSteps: StepNumber[];
  startedAt: number;
}

/**
 * Initialize or get the current session
 */
export function getSession(): StepSession {
  if (typeof window === "undefined") {
    return { completedSteps: [], startedAt: Date.now() };
  }

  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Invalid JSON, create new session
    }
  }

  const newSession: StepSession = {
    completedSteps: [],
    startedAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
  return newSession;
}

/**
 * Mark a step as completed
 */
export function markStepComplete(step: StepNumber): void {
  if (typeof window === "undefined") return;

  const session = getSession();
  if (!session.completedSteps.includes(step)) {
    session.completedSteps.push(step);
    session.completedSteps.sort((a, b) => a - b);
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

/**
 * Check if a step is completed
 */
export function isStepComplete(step: StepNumber): boolean {
  const session = getSession();
  return session.completedSteps.includes(step);
}

/**
 * Check if all previous steps are completed
 */
export function arePreviousStepsComplete(step: StepNumber): boolean {
  const session = getSession();
  
  // Step 1 has no previous steps
  if (step === STEPS.SELECT_SERVICE) {
    return true;
  }

  // Check if all steps before the current one are completed
  for (let i = STEPS.SELECT_SERVICE; i < step; i++) {
    if (!session.completedSteps.includes(i as StepNumber)) {
      return false;
    }
  }
  
  return true;
}

/**
 * Get the first incomplete step
 */
export function getFirstIncompleteStep(): StepNumber {
  const session = getSession();
  
  for (let i = STEPS.SELECT_SERVICE; i <= STEPS.KYC; i++) {
    if (!session.completedSteps.includes(i as StepNumber)) {
      return i as StepNumber;
    }
  }
  
  // All steps completed, return the last step
  return STEPS.KYC;
}

/**
 * Get the URL for the first incomplete step
 */
export function getFirstIncompleteStepUrl(): string {
  const firstIncomplete = getFirstIncompleteStep();
  return getStepUrl(firstIncomplete);
}

/**
 * Clear the session (useful when starting fresh or after completion)
 */
export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Get the step number from a pathname
 */
export function getStepFromPath(pathname: string): StepNumber | null {
  if (pathname === "/add-venue" || pathname === "/add-venue/") {
    return STEPS.SELECT_SERVICE;
  }
  if (pathname.startsWith("/add-venue/details")) {
    return STEPS.DETAILS;
  }
  if (pathname.startsWith("/add-venue/description")) {
    return STEPS.DESCRIPTION;
  }
  if (pathname.startsWith("/add-venue/features")) {
    return STEPS.FEATURES;
  }
  if (pathname.startsWith("/add-venue/gallery")) {
    return STEPS.GALLERY;
  }
  if (pathname.startsWith("/add-venue/step-6-booking")) {
    return STEPS.BOOKING;
  }
  if (pathname.startsWith("/add-venue/step-8-summary")) {
    return STEPS.SUMMARY;
  }
  if (pathname.startsWith("/add-venue/step-9-kyc")) {
    return STEPS.KYC;
  }
  return null;
}

/**
 * Get the URL for a step
 */
export function getStepUrl(step: StepNumber, params?: Record<string, string>): string {
  const baseUrls: Record<StepNumber, string> = {
    [STEPS.SELECT_SERVICE]: "/add-venue",
    [STEPS.DETAILS]: "/add-venue/details",
    [STEPS.DESCRIPTION]: "/add-venue/description",
    [STEPS.FEATURES]: "/add-venue/features",
    [STEPS.GALLERY]: "/add-venue/gallery",
    [STEPS.BOOKING]: "/add-venue/step-6-booking",
    [STEPS.SUMMARY]: "/add-venue/step-8-summary",
    [STEPS.KYC]: "/add-venue/step-9-kyc",
  };

  const baseUrl = baseUrls[step];
  if (params && Object.keys(params).length > 0) {
    const query = new URLSearchParams(params).toString();
    return `${baseUrl}?${query}`;
  }
  return baseUrl;
}

export { STEPS };
export type { StepNumber };
