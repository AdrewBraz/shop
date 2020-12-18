import * as Yup from 'yup';

export default Yup.object().shape({
  fromYear: Yup.string().required(),
  fromMonth: Yup.string().required(),
  toYear: Yup.string().required(),
  toMonth: Yup.string().required(),
});
