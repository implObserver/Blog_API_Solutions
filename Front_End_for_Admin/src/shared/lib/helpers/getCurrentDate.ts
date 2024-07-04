const today = new Date();
const yyyy = today.getFullYear();
const month = today.toLocaleString('en-US', { month: 'long' });
let mm: number = today.getMonth() + 1; // Months start at 0!
let dd: number = today.getDate();

let mmStr: string = mm.toString();
let ddStr: string = dd.toString();

if (dd < 10) ddStr = '0' + dd;
if (mm < 10) mmStr = '0' + mm;

export const formattedToday = `${month} ${ddStr}, ${yyyy}`;