import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getFriends } from '../../redux/friends/friends-operation';
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
  Img,
  // Popover,
  // WorkDaysList,
  // WorkDay,
} from './OurFriends.styled';

const OurFriends = ({ data }) => {
  const dispatch = useDispatch();
  // const [isPopoverVisible, setPopoverVisible] = useState(false);
  const { friends, loading, error } = useSelector(
    state => state.friends.friends
  );

  function formatPhone(number) {
    if (number === 'email only') {
      return 0;
    }
    return number.split(' ').join('');
  }

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(friends) || friends.length === 0) {
    return null;
  }

  // const handleMouseEnter = () => {
  //   setPopoverVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setPopoverVisible(false);
  // };

  return (
    <>
      <TitleMain>Our friends</TitleMain>
      <List>
        {friends
          ? friends.map(item => (
              <Item>
                <Title href={item.url}>{item.title}</Title>

                <WrapperCard>
                  <ImgThumb>
                    <Img src={item.imageUrl} alt=""></Img>
                    {/* <Img src={item.imageUrl} alt="" /> */}
                  </ImgThumb>

                  <WrapperInfo>
                    <Contacts>
                      <ContactTitle>Time:</ContactTitle>
                      {item.workDays &&
                      Array.isArray(item.workDays) &&
                      item.workDays.find(day => day.isOpen)?.from &&
                      item.workDays.find(day => day.isOpen).to
                        ? `${item.workDays.find(day => day.isOpen).from}-${
                            item.workDays.find(day => day.isOpen).to
                          }`
                        : 'day and night'}
                      {/* <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.workDays &&
                        Array.isArray(item.workDays) &&
                        item.workDays.some(day => day.isOpen)
                          ? item.workDays
                              .filter(day => day.isOpen)
                              .map(day => `${day.from}-${day.to}`)
                              .join(', ')
                          : 'day and night'}
                      </span>
                      {isPopoverVisible && (
                        <Popover>
                          <WorkDaysList>
                            {item.workDays &&
                              Array.isArray(item.workDays) &&
                              item.workDays.map((day, index) => (
                                <WorkDay key={index}>
                                  {day.isOpen
                                    ? `${day.from}-${day.to}`
                                    : 'Closed'}
                                </WorkDay>
                              ))}
                          </WorkDaysList>
                        </Popover>
                      )} */}
                    </Contacts>

                    <Contacts>
                      <ContactTitle>Address:</ContactTitle>
                      {item.addressUrl ? (
                        <ContactsLink href={item.addressUrl}>
                          {item.address}
                        </ContactsLink>
                      ) : (
                        <span>website only</span>
                      )}
                    </Contacts>

                    <Contacts>
                      <ContactTitle>Email:</ContactTitle>
                      {item.email ? (
                        <ContactsLink href={`mailto:${item.email}`}>
                          {item.email}
                        </ContactsLink>
                      ) : (
                        <span>website only</span>
                      )}
                    </Contacts>

                    <Contacts>
                      <ContactTitle>Phone:</ContactTitle>
                      {item.phone && item.phone !== 'website only' ? (
                        <ContactsLink href={`tel:${formatPhone(item.phone)}`}>
                          {item.phone}
                        </ContactsLink>
                      ) : (
                        <span>website only</span>
                      )}
                    </Contacts>
                  </WrapperInfo>
                </WrapperCard>
              </Item>
            ))
          : null}
      </List>
    </>
  );
};

export default OurFriends;
