import React from 'react';
import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-lightbox-component';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

import './location.scss';

const LocationName = styled.div`
  background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
  box-shadow: 0px 0px 4px 4px ${data => (data.theme ? '#333' : '#fff')};
  color: ${props => (props.theme ? props.theme.gameCards : '#fff')};
  border: 2px solid
  font-size: 1em;
  width: 60px;
  height: 60px;
  display:table-cell;
  vertical-align:middle;
  text-align:center;
  padding: 20px 15px;
  border-radius: 50%;
  margin-bottom: 15px;
  display flex;

  &:after {
      content: '';
      position: absolute;
      width:100%;
      max-width: 250px;
      height:4px;
      left:75px;
      background-color: ${data => (data.theme ? data.theme.titleColor : '#fff')};

      @media(max-width: 400px) {
        max-width: 100px;
    }

      @media(max-width: 400px) {
          max-width: 80px;
      }
  }
`;

class LocationSmallDevices extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          gallery: {
              isOpen: false,
              id: null,
          }
        };
    }

    handleOpenGallery = (id, images) => {
        this.setState({
            gallery: {
                id,
                isOpen: true,
                images
            }
        });
    }
    render() {
        const { locations } = this.props;
        return(
            <ul className="locations-list wrapper">
            {
              locations.list.map((item, index) => (
                  <>
                <li className="locations-list__item">
                              <LocationName>
                              {`T ${index + 1}`}
                              </LocationName>
  
                              <button onClick={() => {this.handleOpenGallery(item.id, item.images)}} className="locations-list__btn">
                                  <img src={item.src}></img>
                              </button>
                          </li>
                          </>
                      ))
            }
            {
                this.state.gallery && this.state.gallery.isOpen ? (
                    <ImageGallery items={this.state.gallery.images} />
                ) : null
            }
          </ul>
        );
    }
}

export default LocationSmallDevices;
