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
} from './OurFriends.styled';

const OurFriends = () => {
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
                    <ContactTitle>Address:</ContactTitle>
                    {friend.address}
                  </Contacts>
                  <Contacts>
                    <ContactTitle>Phone:</ContactTitle>
                    {friend.phone}
                  </Contacts>
                  <Contacts>
                    <ContactTitle>Email:</ContactTitle>
                    {friend.email}
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
