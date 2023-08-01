import NewsItem from '../NewsItem/NewsItem';
import NoticesNoFound from '../NoticesNotFound/NoticesNotFound';
import NewsCard from '../NewsCard/NewsCard';
import { useSelector } from 'react-redux';
import { selectNewsLoading } from 'redux/news/news-selectors';

import { List } from './NewsList.styled';

export default function NewsList({ data }) {
  const isLoading = useSelector(selectNewsLoading);
  const items = data?.map(({ title, url, date, imgUrl, text }, index) => (
    <NewsItem
      key={index}
      title={title}
      url={url}
      text={text}
      date={date}
      imgUrl={imgUrl}
    />
  ));

  return (
    <>
      {!data.length && !isLoading && (
        <NoticesNoFound text="Nothing was found for your request. Try again" />
      )}
      {isLoading && (
        <List>
          <NewsCard cards={6} />
        </List>
      )}
      {data.length > 0 && !isLoading && <List>{items}</List>}
    </>
  );
}
