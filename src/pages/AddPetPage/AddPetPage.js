// import AddPetButton from 'components/AddPetButton/AddPetButton';

// const AddPetPage = () => {
//   return (
//     <>
//       <AddPetButton />
//     </>
//   );
//   // return <AddPet />;
// };

// export default AddPetPage;

import { useEffect } from 'react';
import AddPetForm from '../../components/AddPet/AddPetForm';

const AddPetPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Add pet';
  });

  return <AddPetForm />;
};

export default AddPetPage;
