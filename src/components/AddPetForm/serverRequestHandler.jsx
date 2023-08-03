import sendRequest from './sendRequest';

const serverRequestHandler = async (data, fileInputRef) => {
  const { birth, type, comments, name, option } = data;

  if (option !== 'pet') {
    let { addTitle, location, option, sex, price } = data;

    switch (option) {
      case 'hands': {
        option = 'for-free';
        break;
      }
      case 'lostFound': {
        option = 'lost-found';
        break;
      }
      case 'pet': {
        option = 'my pet';
        break;
      }
      default:
        break;
    }

    let obj = {
      name,
      type,
      sex,
      location,
      comments,
      date: birth,
      title: addTitle,
      category: option,
      avatarURL: fileInputRef.current.files[0],
    };

    if (option === 'for-free') {
      await sendRequest('/notices/for-free', obj);
      return;
    } else if (option === 'lost-found') {
      await sendRequest('/notices/lost-found', obj);
    } else {
      obj.price = price;
      await sendRequest('/notices/sell', obj);
      return;
    }
  } else {
    await sendRequest('/pets', {
      comments,
      type,
      name,
      date: birth,
      avatarURL: fileInputRef.current.files[0],
    });
    return;
  }
};
export default serverRequestHandler;
