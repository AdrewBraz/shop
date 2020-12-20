import * as Yup from 'yup';

export default Yup.object().shape({
  fromYear: Yup.string().ensure().required(),
  fromMonth: Yup.string().ensure().required(),
  toYear: Yup.string().ensure().required(),
  toMonth: Yup.string().ensure().required(),
});
