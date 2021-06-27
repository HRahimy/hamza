export type FormStatus =
  'PURE'
  | 'VALID'
  | 'INVALID'
  | 'SUBMISSION_IN_PROGRESS'
  | 'SUBMISSION_STARTED'
  | 'SUBMISSION_SUCCESS'
  | 'SUBMISSION_FAILURE';

export const FormStatus = {
  Pure: 'PURE' as FormStatus,
  Valid: 'VALID' as FormStatus,
  Invalid: 'INVALID' as FormStatus,
  SubmissionInProgress: 'SUBMISSION_IN_PROGRESS' as FormStatus,
  SubmissionStarted: 'SUBMISSION_STARTED' as FormStatus,
  SubmissionSuccess: 'SUBMISSION_SUCCESS' as FormStatus,
  SubmissionFailure: 'SUBMISSION_FAILURE' as FormStatus
};
