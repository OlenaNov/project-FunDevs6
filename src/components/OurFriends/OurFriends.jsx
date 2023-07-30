import { ourFriends } from './ourFriendsList';
import {
  List,
  Item,
  Title,
  TitleMain,
  ImgThumb,
  Contacts,
  WrapperCard,
  WrapperInfo,
  ContactTitle,
  ContactsLink,
} from './OurFriends.styled';

const OurFriends = () => {
  function formatPhone(number) {
    if (number === 'email only') {
      return 0;
    }
    return number.split(' ').join('');
  }

  return (
    <>
      <TitleMain>Our friends</TitleMain>
      <List>
        {ourFriends.length > 0 &&
          ourFriends.map(friend => (
            <Item>
              <Title href={friend.url}>{friend.title}</Title>

              <WrapperCard>
                <ImgThumb>
                  <img src={friend.imageUrl} alt="картинка сириус" />
                </ImgThumb>

                <WrapperInfo>
                  <Contacts>
                    <ContactTitle>Time:</ContactTitle>
                    {friend.time}
                  </Contacts>

                  <Contacts>
                    <ContactTitle>Адрес:</ContactTitle>
                    {friend.addressUrl && friend.address !== 'website only' ? (
                      <ContactsLink href={friend.addressUrl}>
                        {friend.address}
                      </ContactsLink>
                    ) : (
                      <span>{friend.address}</span>
                    )}
                  </Contacts>

                  <Contacts>
                    <ContactTitle>Email:</ContactTitle>
                    <ContactsLink href={`mailto:${friend.email}`}>
                      {friend.email}
                    </ContactsLink>
                  </Contacts>

                  <Contacts>
                    <ContactTitle>Phone:</ContactTitle>
                    <ContactsLink href={`tel:${formatPhone(friend.phone)}`}>
                      {friend.phone}
                    </ContactsLink>
                  </Contacts>
                </WrapperInfo>
              </WrapperCard>
            </Item>
          ))}
      </List>
    </>
  );
};

export default OurFriends;
