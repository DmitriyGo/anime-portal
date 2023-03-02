// import { showErrorToast } from '@/components';
import { IApiError } from '@/models/apiError.model';

const showApiErrors = ({ message, errors }: IApiError) => {
  console.warn('=====> message, errors', message, errors);
  if (errors) {
    return Object.values(errors).map((value) =>
      console.error({ message: value || message }),
    );
  }

  return console.error({ message });
};

export default showApiErrors;
