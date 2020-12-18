import * as Yup from 'yup';

export default Yup.object({
    fromYear: Yup.string().required(),
    fromMonth: Yup.string().required(),
    toYear: Yup.string().required(),
    toMonth: Yup.string().required()       
}).test('ok', 'error', (value) => console.log(value))