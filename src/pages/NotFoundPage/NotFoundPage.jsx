import { useNavigate } from 'react-router-dom';
import Background from 'components/Background/Background';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';

import { LiaPawSolid } from 'react-icons/lia';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate('/main');
  };

  return (
    <Section className={css.section}>
      <Background />
      <main style={{ textAlign: 'center' }}>
        <div className={css.div}>
          <p className={css.text}>Ooops! This page not found :(</p>
          {/* <img src={myImage} alt="404" width="822px" height="360px" /> */}
          <div className={css.imgWrap}></div>
          <Button className={css.button} onClick={handleToMain}>
            To main page
            <LiaPawSolid id="svg" />
          </Button>
        </div>
      </main>
    </Section>
  );
};

export default NotFoundPage;
