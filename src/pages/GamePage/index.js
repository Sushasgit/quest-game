import React from 'react';
import styled from 'styled-components';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Title from '../../components/ui/Title';
import Tag from '../../components/ui/Tag';

import handDark from '../../images/hand-dark.svg';
import handLight from '../../images/hand-light.svg';
import Calendar from '../../components/Calendar';
import Footer from '../../components/Footer';

import gallary1 from '../../images/gallery/quadro-gallery.jpg';
import gallary2 from '../../images/gallery/quadro-gallery2.jpg';

import '../../components/Advantages/advantages.scss';
import Logo from '../../components/ui/Logo';
import Gallery from 'react-grid-gallery';

import images from '../../data/images.json';
import data from '../../data/kids.json';

const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8em;
  margin: 40px 0;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const List = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1em;
  padding-left: 1.5em;
  background-image: ${data => (data.theme && data.theme.themeType === 'light' ? `url(${handDark})` : `url(${handLight})`)};
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0;
  margin-bottom: 15px;
  line-height: 1.7em;
`;

const TagsList = styled.div`
  text-align: center;
`;

const Advantage = styled.article`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  background: ${data => (data.theme ? data.theme.primaryBg : '#fff')};


  &::before{
    border-top: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-left: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }

  &::after {
    border-bottom: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-right: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }
`;

const ArticleDescription = styled.p`
  text-align: left;
  margin: 0;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  line-height: 1.7em;
  font-size: 1em;
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

class PaintballKids extends React.Component {
    render() {
        const { match } = this.props;
        const gameType = match.params.type;
        const game = gameType ? data.find(item => item.type === gameType) : [];
        console.log(game)
        return(
            <div className="wrap">
            <Banner title={game.mainTitle}>
              <Logo />
              <Menu />
            </Banner>
            <BackgroundWrapper withBuildings>
              <section className="wrapper">
                <Title level={3}>
                  {game.subTitle}
                </Title>
                <Description>
                  {game.mainDescription}
                </Description>
                {
                    game.ready ? (
                        game && game.rows.map(item => (
                            <Row>
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
                                          item.list.map((listItem, index) => (
                                            <ListItem>
                                            {listItem.desc}
                                        </ListItem>
                                          ))
                                        ) : null
                                    }
                      </List>
                      <ArticleDescription>
                            {item.advantage}
                      </ArticleDescription>
                            </Row>
                            ))
                    ) : (
                        <div>
                                <div>
                            <Tag tag="Квест в разработке" size="lg">Квест в разработке</Tag>
                             <ArticleDescription>Мы готовим для Вас что- то очень интересное. Следите за обновлениями!</ArticleDescription>
                             </div>
                        </div>
                    )
                }
                
                <div style={{ marginTop: '20px', minHeight: '100vh', marginBottom: '80px' }}>
                <Title level={3}>
                    Галерея 
                </Title>
                <Gallery thumbnailStyle={styleSmall} images={images} />
                </div>
                <Footer />
                      
              </section>
            </BackgroundWrapper>
          </div>
        );
    }
}

export default PaintballKids;