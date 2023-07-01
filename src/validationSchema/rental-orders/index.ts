import * as yup from 'yup';

export const rentalOrderValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  tool_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
