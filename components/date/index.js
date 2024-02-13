import React from 'react'
import Image from 'next/image'
import fr from 'date-fns/locale/fr';
import { parseISO , format } from 'date-fns';


export default function Date({dateString}) {
    const date = parseISO(dateString);
    const locale = fr;
    
    return (
        <time dateTime={dateString}> {format(date, 'dd/LL/yyyy', {locale})} </time>
        );
 
}