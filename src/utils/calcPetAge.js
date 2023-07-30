// import moment from 'moment';

// export const calcPetAge = birthdate => {
//   const birthDate = moment(birthdate, 'DD-MM-YYYY');
//   const currentDate = moment();

//   console.log(birthDate);
//   console.log(currentDate);

//   const yearsDiff = currentDate.diff(birthDate, 'years');
//   const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
//   const totalMonths = yearsDiff * 12 + monthsDiff;

//   if (totalMonths < 12) {
//     return `${totalMonths} m`;
//   }

//   if (totalMonths >= 12 && totalMonths < 24) {
//     return `1 year`;
//   }

//   return `${yearsDiff} years`;
// };

export const calcPetAge = bd => {
  const now = new Date(),
    birthdate = new Date(bd),
    diff = now.getTime() - birthdate.getTime(),
    years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
    months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * (365.25 / 12))
    );

  let termin = '';

  if (years) {
    termin = years === 1 ? 'year' : 'years';
  } else {
    termin = 'mon';
  }

  const age = years ? `${years} ${termin}` : `${months} ${termin}`;

  return age;
};
