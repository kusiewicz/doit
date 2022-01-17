export const getDate = () => {
  const date = new Date();

  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  const month = date.getMonth();

  const days = ['Nd', 'Pon', 'Wto', 'Śr', 'Czw', 'Pt', 'Sob'];
  const months = [
    'Sty',
    'Lut',
    'Mar',
    'Kwi',
    'Maj',
    'Cze',
    'Lip',
    'Sie',
    'Wrz',
    'Paz',
    'Lis',
    'Gru',
  ];

  return `${days[dayOfWeek]} ${dayOfMonth} ${months[month]}`;
};
