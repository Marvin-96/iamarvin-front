import React from 'react';
import { parseISO, format } from 'date-fns';
import fr from 'date-fns/locale/fr';

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, 'dd/LL/yyyy', { locale: fr })}</time>
  );
}

export function DateYear({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, 'yyyy', { locale: fr })}</time>
  );
}
