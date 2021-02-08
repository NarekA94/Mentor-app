const createEn = {
  create: {
    errors: {
      firstnameError:
        'The First name cannot contain only numbers or only symbols.',
      lastnameError:
        'The Last name cannot contain only numbers or only symbols.',
      firstnameMax: 'The firstname cannot contain more than 20 characters.',
      lastnameMax: 'The lastname cannot contain more than 20 characters.',
      dobMin: 'The age must not be under 14.',
      dobMax: 'The age must not be under 1920',
      dobValid: 'The date cannot be chosen in future time.',
      password:"Password must contain letters, numbers and symbols",
      required: 'This field is required.',
      email: 'Email must be valid.',
      match: 'Passwords must match.',
      min: 'Seems a bit short...',
      max: 'Try a shorter password.',
    },
  },
};

const createAm = {
  create: {
    errors: {
      firstnameError:
        'Անունը չի կարող պարունակել միայն թվեր կամ միայն խորհրդանիշներ.',
      lastnameError:
        'Ազգանունը չի կարող պարունակել միայն թվեր կամ միայն խորհրդանիշներ.',
      firstnameMax: 'Անունը չի կարող պարունակել ավելի քան 20 նիշ.',
      lastnameMax: 'Ազգանունը չի կարող պարունակել ավելի քան 20 նիշ.',
      dobMin: 'Տարիքը չպետք է լինի 14-ից ցածր.',
      dobMax: 'Տարիքը չպետք է լինի 1920 թ.-ից ցածր',
      dobValid: 'Ամսաթիվը չի կարող ընտրվել ապագայում.',
      password:"Գաղտնաբառը պետք է պարունակի տառեր, թվեր և խորհրդանիշներ",
      required: 'Այս դաշտը պարտադիր է.',
      email: 'Էլ.փոստը պետք է վավեր լինի.',
      match: 'Գաղտնաբառերը պետք է համապատասխանեն.',
      min: 'Մի քիչ կարճ է թվում...',
      max: 'Փորձեք ավելի կարճ գաղտնաբառ ընտրել.',
    },
  },
};

export {createAm, createEn};
