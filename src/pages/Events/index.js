import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import Gallery from 'react-grid-gallery';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Title from '../../components/ui/Title';
import Tag from '../../components/ui/Tag';

import handDark from '../../images/hand-dark.svg';
import handLight from '../../images/hand-light.svg';

import Locations from '../../components/Locations';
import LocationSmallDevices from '../../components/Locations/LocationSmallDevices';
import OurServices from '../../components/OurServices';
import ContactForm from '../../components/ContactForm';
import PriceTabs from '../../components/PriceTabs';
import GamesTabs from '../../components/GamesTabs';
import Calendar from '../../components/Calendar';

import images from '../../data/images.json';
import data from '../../data/eventsPage.json';
import main from '../../data/mainPage.json';

import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';

import './style.scss';
import '../../components/Advantages/advantages.scss';

const Description = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.8em;
  margin: 40px 0;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};

  @media(max-width: 800px) {
    font-size: 18px;
}
`;

const List = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  margin: 0;

  @media(max-width: 800px) {
    margin: 40px 0;
}
`;

const ListItem = styled.li`
  font-size: 22px;
  padding-left: 1.5em;
  background-image: ${data => (data.theme && data.theme.themeType === 'light' ? `url(${handDark})` : `url(${handLight})`)};
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0;
  margin-bottom: 15px;
  line-height: 1.7em;

    @media(max-width: 800px) {
        font-size: 18px;
    }
`;

const TagsList = styled.div`
  text-align: center;
`;

const ArticleDescription = styled.p`
  text-align: center;
  margin: 0;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  line-height: 1.7em;
  font-size: 22px;


  @media(max-width: 800px) {
      margin: 40px 0;
      font-size: 18px;
  }
`;

const Row = styled.article`
  padding: 40px 0;
  border-bottom: 3px dashed ${data => (data.theme ? data.theme.titleColor : '#fff')};
  border-top: 3px dashed ${data => (data.theme ? data.theme.titleColor : '#fff')};

  @media (min-width:800px) {
     display:grid;
     grid-template-columns:25% 40% auto;
     grid-column-gap:40px;
     border-left-width: 10px;
     border-right-width: 10px;
   }
`;

const styleSmall = () => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

class Events extends React.Component {
// TODO Когда будут апи ендпоинты сделать тут запрос данных
  componentDidMount() {
    // axios.get(`https://...`)
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({ data });
    //   })
  }

  render() {
    const { theme } = this.props;
    return (
      <div>
        <div style={{ backgroundColor: theme.primaryBg }} className="wrap">
          <Banner title="Сборные мероприятия">
            <Menu />
          </Banner>
          <BackgroundWrapper withBuildings>
            <section className="wrapper">
              <Title level={3}>
                {data.subTitle}
              </Title>
              <Description>
                {data.mainDescription}
              </Description>
              {
                  data && data.rows && data.rows.map((item, index) => (
                    <Row key={index}>
                      <div>
                        <Title level={3}>
                          {item.title}
                        </Title>
                        <TagsList>
                          {
                            item.tags ? (
                              item.tags.map((tag, index) => (
                                <Tag key={index} tag={tag}>
                                  {`#${tag}`}
                                </Tag>
                              ))
                            ) : null
                          }
                        </TagsList>
                      </div>
                      <List>
                        {
                          item.list ? (
                            item.list.map(listItem => (
                              <ListItem>
                                {listItem.desc}
                              </ListItem>
                            ))
                          ) : null
                        }
                      </List>
                      <ArticleDescription>
                        {data.advantage}
                      </ArticleDescription>
                    </Row>
                  ))
                }
              <Title primary level={2}>
                Календарь событий
              </Title>
              <Calendar />
              <div style={{ marginTop: '20px', minHeight: '930px' }}>
                <Title level={3}>
                    Галерея
                </Title>
                <Gallery
                  enableImageSelection={false}
                  thumbnailStyle={styleSmall}
                  images={images}
                />
              </div>
            </section>
          </BackgroundWrapper>
        </div>
        <BackgroundWrapper>
          <MediumAndDown>
            <LocationSmallDevices locations={main.ourLocations} />
          </MediumAndDown>
          <LargeAndUp>
            <Locations locations={main.ourLocations} />
          </LargeAndUp>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <OurServices services={main.ourGames.services} />
          <Title primary level={2}>
            Наши цены
          </Title>
          <PriceTabs />
          <Title primary level={2}>
            Наши игры
          </Title>
          <GamesTabs />
          <ContactForm />
        </BackgroundWrapper>
      </div>
    );
  }
}

export default withRouter(withTheme(Events));
