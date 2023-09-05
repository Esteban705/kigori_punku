import { format, compareAsc, add } from 'date-fns'


export const handleTime = (setfirst) => {
    const fecha = format(new Date(), 'MM/dd/yyyy');


      setfirst(fecha)

 }

